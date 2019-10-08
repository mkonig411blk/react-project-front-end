import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Gift extends Component {

  render() {
    return (
      <div>
        <li>
          {this.props.gift.name}
          {this.props.gift.category}
          {this.props.gift.price}
          // <ReviewsContainer gift={gift}/>
        </li>
      </div>
    );
  }
};

export default Gift;
