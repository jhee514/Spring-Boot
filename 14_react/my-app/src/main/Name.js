import React, { Component } from 'react';
import PropTypes from 'prop-types';

// const Name = ({ name, children }) => {
//   return (
//   <>
//     My name is {name}!
//     <br />
//     {children} is the 'props.children'.
//   </>
//   );
// };

// Name.defaultProps = {
//   name: "React"
// };
  
// Name.propTypes = {
//   name: PropTypes.string
// };


class Name extends Component {
  static defaultProps = {
    name: 'React'
  };

  static propTypes = {
    name: PropTypes.string
  };

  render() {
    const { name, children } = this.props;
    return (
      <>
      My name is {name}!
      <br />
      {children} is the 'props.children'.
     </>
    );
  }
}


export default Name;