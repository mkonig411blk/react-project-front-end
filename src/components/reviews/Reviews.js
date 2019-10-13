import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {
    // assign const to 3 props (allreviews object, giftId, deleteReview function)
    const { allReviews, giftId, deleteReview } = this.props;
    // assign const to reviews specific to the gift
    const allReviewsFiltered = allReviews.filter(review => review.gift_id === giftId);
    // iterate through filterd reviews array to return Review components with 3 props
    const giftReviewList = allReviewsFiltered.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview}/>
  })

    return (
      <div>
        <ul>
          {giftReviewList}
        </ul>
      </div>
    );
  }

};

export default Reviews;
