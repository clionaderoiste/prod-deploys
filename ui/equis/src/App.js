import React from 'react';
import logo from './images/DosEquis.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is application version {process.env.REACT_APP_VERSION}</p>
      </header>
    </div>
  );
}

export default App;
