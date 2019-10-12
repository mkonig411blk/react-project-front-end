import React, { Component } from 'react';
import Gift from './Gift';
import { connect } from 'react-redux';
import { fetchGifts } from '../../actions/fetchGifts';

class Gifts extends Component {

    componentDidMount() {
        this.props.fetchGifts()
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
  return { fetchGifts: () => dispatch(fetchGifts()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gifts);
