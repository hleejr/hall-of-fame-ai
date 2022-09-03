# hall-of-fame-ai
 
<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/hleejr/hall-of-fame-ai">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3>Hall of Fame AI</h3>

  <h5>Database of major league sports players' statistics with hall of fame predictive analysis driven by machine-learning algorithms</h5>
</p>
<hr />

<p align="center">
    <h3>Table of Contents</h3>
</p>
[![forthebadge](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjguMTQiIGhlaWdodD0iMzUiIHZpZXdCb3g9IjAgMCAxMjguMTQgMzUiPjxyZWN0IGNsYXNzPSJzdmdfX3JlY3QiIHg9IjAiIHk9IjAiIHdpZHRoPSIxMjguMTQiIGhlaWdodD0iMzUiIGZpbGw9IiM1NTkzQzciLz48cmVjdCBjbGFzcz0ic3ZnX19yZWN0IiB4PSIxMjguMTQiIHk9IjAiIHdpZHRoPSIwIiBoZWlnaHQ9IjM1IiBmaWxsPSIjMzg5QUQ1Ii8+PHBhdGggY2xhc3M9InN2Z19fdGV4dCIgZD0iTTE1LjYwIDIyTDEzLjYzIDEzLjQ3TDE1LjEwIDEzLjQ3TDE2LjQzIDE5Ljg4TDE4LjA2IDEzLjQ3TDE5LjMwIDEzLjQ3TDIwLjkxIDE5Ljg5TDIyLjIyIDEzLjQ3TDIzLjY5IDEzLjQ3TDIxLjcyIDIyTDIwLjMxIDIyTDE4LjY4IDE1Ljc3TDE3LjAyIDIyTDE1LjYwIDIyWk0yOS4yNSAyMkwyNy43NiAyMkwyNy43NiAxMy40N0wyOS4yNSAxMy40N0wyOS4yNSAxNy4wMkwzMy4wNiAxNy4wMkwzMy4wNiAxMy40N0wzNC41NCAxMy40N0wzNC41NCAyMkwzMy4wNiAyMkwzMy4wNiAxOC4yMUwyOS4yNSAxOC4yMUwyOS4yNSAyMlpNNDEuMzIgMTguODZMMzguNDUgMTMuNDdMNDAuMTAgMTMuNDdMNDIuMDYgMTcuNTFMNDQuMDIgMTMuNDdMNDUuNjYgMTMuNDdMNDIuODEgMTguODZMNDIuODEgMjJMNDEuMzIgMjJMNDEuMzIgMTguODZaTTU3LjA0IDIyTDU1LjU2IDIyTDU1LjU2IDEzLjQ3TDU3LjA0IDEzLjQ3TDU3LjA0IDE3LjAyTDYwLjg1IDE3LjAyTDYwLjg1IDEzLjQ3TDYyLjMzIDEzLjQ3TDYyLjMzIDIyTDYwLjg1IDIyTDYwLjg1IDE4LjIxTDU3LjA0IDE4LjIxTDU3LjA0IDIyWk02Ni44MCAxOC4wMEw2Ni44MCAxOC4wMEw2Ni44MCAxNy41MlE2Ni44MCAxNi4yOCA2Ny4yNCAxNS4zMlE2Ny42OCAxNC4zNyA2OC40OSAxMy44NlE2OS4zMCAxMy4zNSA3MC4zNCAxMy4zNVE3MS4zOCAxMy4zNSA3Mi4xOSAxMy44NVE3Mi45OSAxNC4zNSA3My40MyAxNS4yOVE3My44NyAxNi4yMyA3My44OCAxNy40OEw3My44OCAxNy40OEw3My44OCAxNy45NlE3My44OCAxOS4yMSA3My40NCAyMC4xNlE3My4wMSAyMS4xMCA3Mi4yMCAyMS42MVE3MS40MCAyMi4xMiA3MC4zNSAyMi4xMkw3MC4zNSAyMi4xMlE2OS4zMSAyMi4xMiA2OC41MCAyMS42MVE2Ny42OSAyMS4xMCA2Ny4yNSAyMC4xN1E2Ni44MSAxOS4yMyA2Ni44MCAxOC4wMFpNNjguMjggMTcuNDZMNjguMjggMTcuOTZRNjguMjggMTkuMzYgNjguODMgMjAuMTNRNjkuMzggMjAuOTAgNzAuMzUgMjAuOTBMNzAuMzUgMjAuOTBRNzEuMzMgMjAuOTAgNzEuODYgMjAuMTVRNzIuMzkgMTkuNDAgNzIuMzkgMTcuOTZMNzIuMzkgMTcuOTZMNzIuMzkgMTcuNTFRNzIuMzkgMTYuMDkgNzEuODYgMTUuMzRRNzEuMzIgMTQuNTggNzAuMzQgMTQuNThMNzAuMzQgMTQuNThRNjkuMzggMTQuNTggNjguODQgMTUuMzNRNjguMjkgMTYuMDkgNjguMjggMTcuNDZMNjguMjggMTcuNDZaTTc5LjgyIDIyTDc4LjM0IDIyTDc4LjM0IDEzLjQ3TDgzLjc2IDEzLjQ3TDgzLjc2IDE0LjY2TDc5LjgyIDE0LjY2TDc5LjgyIDE3LjIwTDgzLjI2IDE3LjIwTDgzLjI2IDE4LjM4TDc5LjgyIDE4LjM4TDc5LjgyIDIyWk04OC43MCAyMkw4Ny4xNiAyMkw5MC4zOCAxMy40N0w5MS43MSAxMy40N0w5NC45NCAyMkw5My4zOSAyMkw5Mi43MCAyMC4wMUw4OS4zOSAyMC4wMUw4OC43MCAyMlpNOTEuMDUgMTUuMjhMODkuODEgMTguODJMOTIuMjggMTguODJMOTEuMDUgMTUuMjhaTTEwMC40NiAyMkw5OC45OCAyMkw5OC45OCAxMy40N0wxMDAuNDYgMTMuNDdMMTAwLjQ2IDIyWk0xMTIuMTYgMTUuNjBMMTEwLjczIDE1LjYwUTExMC43NCAxNC41NiAxMTEuNDQgMTMuOTZRMTEyLjEzIDEzLjM1IDExMy4yOCAxMy4zNUwxMTMuMjggMTMuMzVRMTE0LjQ1IDEzLjM1IDExNS4xMSAxMy45NVExMTUuNzcgMTQuNTUgMTE1Ljc3IDE1LjYyTDExNS43NyAxNS42MlExMTUuNzcgMTYuNTcgMTE0Ljg4IDE3LjUwTDExNC44OCAxNy41MEwxMTQuMTYgMTguMjFRMTEzLjc3IDE4LjY1IDExMy43NiAxOS40OUwxMTMuNzYgMTkuNDlMMTEyLjQzIDE5LjQ5UTExMi40MyAxOC43MSAxMTIuNjMgMTguMjVRMTEyLjgyIDE3Ljc5IDExMy4zOSAxNy4yM1ExMTMuOTYgMTYuNjggMTE0LjExIDE2LjQ1TDExNC4xMSAxNi40NVExMTQuMzUgMTYuMDkgMTE0LjM1IDE1LjY3TDExNC4zNSAxNS42N1ExMTQuMzUgMTUuMTIgMTE0LjA4IDE0LjgzUTExMy44MCAxNC41NCAxMTMuMjggMTQuNTRMMTEzLjI4IDE0LjU0UTExMi43NyAxNC41NCAxMTIuNDYgMTQuODNRMTEyLjE2IDE1LjExIDExMi4xNiAxNS42MEwxMTIuMTYgMTUuNjBaTTExMi4zMyAyMS4zMUwxMTIuMzMgMjEuMzFRMTEyLjMzIDIwLjk3IDExMi41NSAyMC43NVExMTIuNzcgMjAuNTQgMTEzLjE0IDIwLjU0TDExMy4xNCAyMC41NFExMTMuNTEgMjAuNTQgMTEzLjczIDIwLjc2UTExMy45NCAyMC45OCAxMTMuOTQgMjEuMzFMMTEzLjk0IDIxLjMxUTExMy45NCAyMS42NCAxMTMuNzMgMjEuODVRMTEzLjUyIDIyLjA3IDExMy4xNCAyMi4wN1ExMTIuNzUgMjIuMDcgMTEyLjU0IDIxLjg1UTExMi4zMyAyMS42NCAxMTIuMzMgMjEuMzFaIiBmaWxsPSIjRkZGRkZGIi8+PHBhdGggY2xhc3M9InN2Z19fdGV4dCIgZD0iIiBmaWxsPSIjRkZGRkZGIiB4PSIxNDEuMTQiLz48L3N2Zz4=)]https://forthebadge.com)
<!-- TABLE OF CONTENTS -->

<!--

<summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>

-->

<!-- ABOUT THIS PROJECT -->
## Why HOFai ?





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/hleejr/hall-of-fame-ai.svg?style=for-the-badge
[contributors-url]: https://github.com/hleejr/hall-of-fame-ai/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/hleejr/hall-of-fame-ai.svg?style=for-the-badge
[forks-url]: https://github.com/hleejr/hall-of-fame-ai/network/members
[stars-shield]: https://img.shields.io/github/stars/hleejr/hall-of-fame-ai.svg?style=for-the-badge
[stars-url]: https://github.com/hleejr/hall-of-fame-ai/stargazers
[issues-shield]: https://img.shields.io/github/issues/hleejr/hall-of-fame-ai.svg?style=for-the-badge
[issues-url]: https://github.com/hleejr/hall-of-fame-ai/issues
[license-shield]: https://img.shields.io/github/license/hleejr/hall-of-fame-ai.svg?style=for-the-badge
[license-url]: https://github.com/hleejr/hall-of-fame-ai/blob/main/LICENSE.txt