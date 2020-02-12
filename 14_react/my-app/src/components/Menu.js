import React, { Component } from 'react';

function ListItem(props) {
  const value = props.value;
  return (
    // Wrong! There is no need to specify the key here:
    <li key={value.toString()}>
      {value}
    </li>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    // Wrong! The key should have been specified here:
    <ListItem value={number} />
  );
}

class Menu extends Component {

  render() {
    return (
      <div>
        <ul>
          {NumberList}
        </ul>
      </div>
    );
  }
}

export default Menu;