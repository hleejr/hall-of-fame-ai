# imports used for webscraping
from bs4 import BeautifulSoup
from multiprocess import Pool
import sys, requests, pandas, numpy, string 

# any config/setup for imported libraries
pandas.options.display.max_columns = None
pandas.options.display.max_rows = None

# define function for collecting desired links
def get_links():
    links = [] 
    for char in string.ascii_lowercase: # loop through alphabet to get letters for url
        page = requests.get(f'https://www.basketball-reference.com/players/{char}')
        soup = BeautifulSoup(page.content, 'html.parser')
        player_links = soup.find_all('tr')

        # loop through and record links on current letter's page 
        for i in range(len(player_links)):
            if i == 0:
                continue
            else: 
                player_link = player_links[i].find('a', href=True)['href'] # searches html a tags to find url
                player_url = f'https://www.basketball-reference.com/{player_link}'
                links.append(player_url)
                
    return links

# define function for collecting player information and create dataframe
def scrape_player(url):
    player_page = requests.get(url)
    player_soup = BeautifulSoup(player_page.content, 'html.parser')
    player_name = player_soup.find(id='meta').find("h1").find("span").text
    player_totals = player_soup.find(id="totals")
    player_playoffs_totals = player_soup.find(id="playoffs_totals")

    if player_totals:
        player_df = pandas.read_html(str(player_totals))[0]
        player_df = player_df[player_df['Age'].notna()]
        if "Unnamed: 30" in player_df.columns:
            player_df = player_df.drop('Unnamed: 30', axis=1)
        player_df.insert(0,'Player Name',player_name)
    if player_playoffs_totals:
        player_df2 = pandas.read_html(str(player_playoffs_totals))[0]
        player_df2 = player_df2[player_df2['Age'].notna()]
        if "Unnamed: 30" in player_df2.columns:
            player_df2 = player_df2.drop('Unnamed: 30', axis=1)
        player_df2.insert(0,'Player Name',player_name)
    
    # Extract the players career accolades
    awards = player_soup.find_all(id='bling')
    player_awards = []
    if awards:
        award = awards[0].find_all('a')
        for i in range(len(award)):
            player_awards.append(award[i].text)
    else:
        player_awards = "None"
    
    if player_playoffs_totals:
        all_stats = pandas.concat([player_df,player_df2], axis=0, ignore_index=True)
        for index, row in all_stats.iterrows():
            row["awards"] = player_awards

        return all_stats
    else:
        for index, row in player_df.iterrows():
            row["awards"] = player_awards
            
        return player_df
    
# using multiprocess to speed up scraping and data transformation

links = get_links() # Runtime: ~8 seconds

with Pool(10) as p:
    records = p.map(scrape_player, links) 
    
all_player_stats = pandas.DataFrame()
for record in records:
    all_player_stats = pandas.concat([all_player_stats,record], axis=0, ignore_index=True) # Runtime: ~9m 50sec
    
all_player_stats.sample(100)
# all_player_stats.to_csv("dirty_aba_nba_players.csv")