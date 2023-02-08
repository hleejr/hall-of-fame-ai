import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Testing } from './components/testing';

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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Testing prop={state}/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.
        </a>
      </header>
    </div>
  );
}

export default App;
