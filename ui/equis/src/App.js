import React from 'react';
import logo from './images/DosEquis.jpeg';
import bug from './images/Squashed bug.jpeg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header gridLayout">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <img src={bug} className="" alt="logo" />
          <p className="App-version">This is application version {process.env.REACT_APP_VERSION}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
