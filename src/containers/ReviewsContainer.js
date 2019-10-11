import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

// giftId passed as prop from Gift component
// addReview & deleteReview functions passed in from store using mapDispatchToProps
// reviews passed in from store using mapStateToProps
class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          giftId={this.props.gift.id}
        />
        <Reviews
          reviews={this.props.gift.reviews}
          giftId={this.props.gift.id}
          // deleteReview={this.props.deleteReview}
        />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
    return {
      addReview: review => dispatch({type: 'ADD_REVIEW', review}),
      deleteReview: id => dispatch({type: 'DELETE_REVIEW', id})
  }
}

export default connect(null, mapDispatchToProps)(ReviewsContainer)
