import React, { Component } from 'react';
class Review extends Component {

// 3 props have been passed to Review: index, review object, deleteReview function
  handleOnClick = () => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleOnClick}> X </button>
      </div>
    );
  }

};

export default Review;
