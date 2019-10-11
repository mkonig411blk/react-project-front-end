import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Gift extends Component {

  render() {
    const gift = this.props.gift
    return (
        <div className="card">
          <h2>{gift.title} (${gift.price})</h2>
          <h4 className="gift-cat">{gift.category}</h4>
          <a href={gift.link} target="_blank"><img src={gift.image} className="gift-image" /></a>
          <p>{gift.description}</p>
          <ReviewsContainer gift={gift}/>
        </div>
    );
  }
};

export default Gift;

// <ReviewsContainer giftId={gift.id}/>
