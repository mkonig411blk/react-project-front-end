import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    // assign const to 3 props (reviews, giftId, deleteReview function)
    const { reviews, giftId, deleteReview } = this.props;
    // assign const to reviews specific to the gift
    const associatedReviews = reviews.filter(review => review.giftId === giftId);

    // iterate through associatedReviews array to return Review components with 3 props passed down
    const reviewList = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {reviewList}
        </ul>
      </div>
    );
  }

};

export default Reviews;
