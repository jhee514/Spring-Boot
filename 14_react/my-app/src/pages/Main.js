import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Welcome from '../main/Welcome';
import Name from '../main/Name';

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <h2><Welcome /></h2>
        <br />
        <br />
        <Name name="Jee">태그 사이</Name>
        <br />
        <br />
        <div className="list">
          <li><Link to="/counter">Count Number</Link></li>
        </div>
      </div>
    );
  }
}

export default Main;