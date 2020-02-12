import React, { Component } from 'react';

class Counter extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0
  //   };
  // }

  state = {
    number: 0,
    fixedNumber: 0
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>Count Number</h1>
        <h2>{number}</h2>
        
        {/* <button
          onClick={() => {
            this.setState({ number: number + 1});
          }}
          >
            plus 1
        </button> */}

        {/* <button
          onClick={() => {
            this.setState(prevState => {
              return {
                number: prevState.number +1
              };
            });
            this.setState(prevState => ({
              number: prevState.number +1
            }));
          }}
        >
          + 1 + 1
        </button> */}

        {/* callback func */}
        <button
          onClick={() => {
            this.setState(
              { number: number + 1},
              () => {
                console.log('Just called .setState');
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>

        <button
          onClick={() => {
            this.setState({ number: 0});
          }}
        >
          reset
        </button>
          <br />
          <h2>{fixedNumber}</h2>
      </div>
    );
  }
}

export default Counter;
