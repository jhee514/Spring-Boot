import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>Count Number</h1>
        <h2>{number}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1});
          }}
          >
            plus 1
          </button>
          <button
            onClick={() => {
              this.setState({ number: 0});
            }}
          >
            reset
          </button>
      </div>
    );
  }
}

export default Counter;