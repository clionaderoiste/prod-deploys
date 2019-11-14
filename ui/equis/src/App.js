import React from 'react';
import logo from './images/DosEquis.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header gridLayout">
        <img src={logo} className="App-logo" alt="logo" />
        <video width="800" controls autoplay>
          <source src="video/TrustIsPermanent.mov" type="video/mp4" />
        </video>
      </header>
    </div>
  );
}

export default App;
