import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="root" className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
            <p>
              Practice React for REAL
            </p>
          <a
            className="App-link"
            href="/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            HOME
          </a>
        </header>
      </div>
    )
  };
}

export default App;
