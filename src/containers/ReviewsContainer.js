import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
import { addReview } from '../actions/addReview';
import { deleteReview } from '../actions/deleteReview';
// gift object passed as prop from Gift component
// addReview & deleteReview functions passed in from store using mapDispatchToProps
// reviews passed in from store using mapStateToProps
class ReviewsContainer extends Component {

  render() {
          return (
              <div>
              {this.props.user && <ReviewInput
                        addReview={this.props.addReview}
                        giftId={this.props.gift.id}
                        gift={this.props.gift}
                      />}
                  <Reviews
                    allReviews={this.props.reviews}
                    giftId={this.props.gift.id}
                    deleteReview={this.props.deleteReview}
                  />
            </div> )
      }

  }


const mapStateToProps = ({ reviews, user }) => {
    return {
        reviews: reviews.reviews,
        user: user.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
      addReview: ({text, giftId, gift, user, userId}) => dispatch(addReview({text, giftId, gift, user, userId})),
      deleteReview: (id) => dispatch(deleteReview(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
