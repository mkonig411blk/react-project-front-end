import React, { Component } from 'react';
// import RestaurantInput from '../components/restaurants/RestaurantInput'
import Gifts from '../components/gifts/Gifts';
import { connect } from 'react-redux';
import { fetchGifts } from '../actions/fetchGifts';

class GiftsContainer extends Component {

    componentDidMount() {
        this.props.fetchGifts()
    }

  render() {
      console.log(this.props.gifts)
    return (
      <div>
        <Gifts gifts={this.props.gifts} />
      </div>
    )
  }
}

const mapStateToProps = ({ gifts }) => ({ gifts })

function mapDispatchToProps(dispatch){
  return { fetchGifts: () => dispatch(fetchGifts()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftsContainer);
