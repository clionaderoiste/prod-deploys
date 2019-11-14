import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <video width="800" controls autoplay>
          <source src="video/TrustIsPermanent.mov" type="video/mp4" />
        </video>
        <p>This is application version {process.env.REACT_APP_VERSION}</p>
      </header>
    </div>
  );
}

export default App;
