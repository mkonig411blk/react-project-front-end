import React, { Component } from 'react';
import Gift from './Gift';
import { connect } from 'react-redux';
import { fetchGifts } from '../../actions/fetchGifts';
import { fetchReviews } from '../../actions/fetchReviews';

class Gifts extends Component {

    componentDidMount() {
        this.props.fetchGifts()
        this.props.fetchReviews()
    }


  render() {
    const gifts = this.props.fetchedGifts.map(gift => {
      return (
        <Gift
            key={gift.id}
            gift={gift}
        />
      )
    });

    return(
      <div>
        {gifts}
      </div>
    );
  }
};

const mapStateToProps = ({ gifts }) => gifts

function mapDispatchToProps(dispatch){
  return {
      fetchGifts: () => dispatch(fetchGifts()),
      fetchReviews: () => dispatch(fetchReviews())}
}

export default connect(mapStateToProps, mapDispatchToProps)(Gifts);
