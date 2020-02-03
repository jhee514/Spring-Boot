import React, { Component } from 'react';
import Name from '../main/Name';
import { About } from '../pages';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogoutClick() {
    this.setState({
      isLoggedIn: false
    });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    // let button;
    // if (isLoggedIn) {
    //   button = <LogoutButton onClick={this.handleLoginClick} />;
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick} />;
    // }

    let message;
    if (isLoggedIn) {
      message = <Name />
    } else {
      message = <About />
    }
    return (
      <div>
        {/* {button} */}
        {message}
      </div>
    );
  }
}

export default LoginControl;