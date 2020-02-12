import React, { Component } from 'react';


const shops = ["bana", 'star', 'beans', 'w', 'luster'];
const shopList = shops.map((shop) => 
  <li key={shop.toString()}>{shop}</li>
);

class Coffee extends Component {
  
  render() {
    return (
      <div>
        <ul>{shopList}</ul>
      </div>
    );
  }
}

export default Coffee;