import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Welcome from '../main/Welcome';
import Name from '../main/Name';
import Colors from '../components/Colors';
import Clock from '../components/Clock';
import LoginControl from '../components/LoginControl';
import Coffee from '../components/Coffee';
import Menu from '../components/Menu';
import TabCard from '../components/TabCard';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <h1>Main Page</h1>
        <h2><Welcome /></h2>

        <h3><LoginControl /></h3>
        
        <br />
        <br />
        
        <div><Name name="Jee">태그 사이</Name></div>
        
        <br />
        <br />

        <div className="list">
          <li><Link to="/counter">Count Number</Link></li>
        </div>
        
        <br />
        <br />
        
        <div>
          <button
            onClick={this.handleClick}
          >
            Colors {this.state.isToggleOn ? 'ON':'OFF'} 
          </button>
          <br />
          <br />
            {this.state.isToggleOn ? <Colors />:''}
        </div>
        
        <br />
        <br />

        <div><Clock /></div>
        <br />
        <br />
        <div><Coffee /></div>
        <br />
        <br />
        {/* <div><Menu /></div> */}
        <br />
        <br />
        {/* <div><TabCard /></div> */}
        <br />
        <br />
        <div>
          <Link to="calen">
            go to Calendar
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;