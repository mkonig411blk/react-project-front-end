import React, { Component } from 'react';
class Review extends Component {

// 3 props have been passed to Review: index, review object, deleteReview function

  handleOnClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    const {review} = this.props
    return (
      <div>
        <li>
          {review.user.name}: "{review.text}" <button onClick={this.handleOnClick}> X </button>
        </li>
      </div>
    );
  }

};

export default Review
