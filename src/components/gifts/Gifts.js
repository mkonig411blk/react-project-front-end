import React, { Component } from 'react';
import Gift from './Gift';

class Gifts extends Component {

  render() {
    const giftCards = this.props.gifts.map(gift => {
      return (
        <Gift
            key={gift.id}
            gift={gift}
        />
      )
    });

    return(
      <div>
        {giftCards}
      </div>
    );
  }
};

export default Gifts;
