import React, { Component } from 'react';
import { connect } from 'react-redux'
class ReviewInput extends Component {

  state = {
    text: ''
  }

  handleOnChange = event => {
    this.setState({
      text: event.target.value,
    });
  }

// addReview function & giftId props passed down from ReviewsContainer
  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addReview({text: this.state.text, giftId: this.props.giftId, user: this.props.user });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
     <div>
        <form onSubmit={this.handleOnSubmit} >
          <label>Add Review: </label>
          <input
            type="text"
            value={this.state.text}
            onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapStateToProps = ({ user }) => user

export default connect(mapStateToProps)(ReviewInput)
