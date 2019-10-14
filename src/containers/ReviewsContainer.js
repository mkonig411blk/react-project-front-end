import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
import { addReview } from '../actions/addReview';
import { deleteReview } from '../actions/deleteReview';
import { fetchReviews } from '../actions/fetchReviews';

// giftId passed as prop from Gift component
// addReview & deleteReview functions passed in from store using mapDispatchToProps
// reviews passed in from store using mapStateToProps
class ReviewsContainer extends Component {

    componentDidMount() {
        this.props.fetchReviews()
    }

  render() {
    return (

      <div>
        <ReviewInput
          addReview={this.props.addReview}
          giftId={this.props.gift.id}
          gift={this.props.gift}
        />
        <Reviews
          allReviews={this.props.reviews}
          giftId={this.props.gift.id}
          deleteReview={this.props.deleteReview}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ reviews }) => reviews

const mapDispatchToProps = dispatch => {
    return {
      addReview: ({text, giftId, gift, user, userId}) => dispatch(addReview({text, giftId, gift, user, userId})),
      deleteReview: (id) => dispatch(deleteReview(id)),
      fetchReviews: () => dispatch(fetchReviews())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
