import React from 'react';
import logo from './images/DosEquis.jpeg';
import beta from './images/beta.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header gridLayout">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <img src={beta} className="App-beta" alt="beta logo" />
          <p className="App-version">This is application version {process.env.REACT_APP_VERSION}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
