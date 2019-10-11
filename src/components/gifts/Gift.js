import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Gift extends Component {

  render() {
    const gift = this.props.gift
    return (
        <div class="card">
          <h2>{gift.title} (${gift.price})</h2>
          <h4 class="gift-cat">{gift.category}</h4>
          <a href={gift.link} target="_blank"><img src={gift.image} class="gift-image" /></a>
          <p>{gift.description}</p>

        </div>
    );
  }
};

export default Gift;

// <ReviewsContainer giftId={gift.id}/>
