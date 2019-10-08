import React, { Component } from 'react';
import Gift from './Gift';

class Gifts extends Component {

  render() {
    const gifts = this.props.gifts.map(gift => {
      return (
        <Gift
            key={gift.id}
            gift={gift}
        />
      )
    });

    return(
      <div>
        {gifts}
      </div>
    );
  }
};

export default Gifts;
