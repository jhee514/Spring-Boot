import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Main from './pages/Main';
import About from './pages/About'
import logo from './logo.svg';

import './App.css';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div id="root" className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Route exact path="/main" component={Main} />
        <Route exact path={['/about/:username', '/about']} component={About} />
        <Route exact path="/counter" component={Counter} />
        <Route exact path="/" component={Home} />
      </div>
    );
  }
}

export default App;
