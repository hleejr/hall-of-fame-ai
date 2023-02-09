import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Navbar } from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/home'
import { Testpage } from './pages/testpage'

function App() {

  const [state, setState] = useState({})

  useEffect(() => {
    fetch('/api').then(response => {
      if (response.status === 200){
        return response.json()
      }
    }).then(data => setState(data))
    .then(error => console.log(error))
  }, []) 

  console.log(window.location.pathname)

  return (
    <div>
      <Navbar />
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/testing' element={<Testpage />} />
        </Routes>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {state.testing}
        </a>
      </header>
    </div>
  );
}

export default App;
