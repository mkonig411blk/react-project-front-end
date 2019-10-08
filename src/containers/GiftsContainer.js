import React, { Component } from 'react'
// import RestaurantInput from '../components/restaurants/RestaurantInput'
import Gifts from '../components/gifts/Gifts'
import { connect } from 'react-redux'

class GiftsContainer extends Component {

  render() {
    return (
      <div>
        <Gifts gifts={this.props.gifts}/>
      </div>
    )
  }
}

const mapStateToProps = ({ gifts }) => ({ gifts })
//
// const mapDispatchToProps = dispatch => ({
//   addRestaurant: name => dispatch({ type: "ADD_RESTAURANT", name }),
//   deleteRestaurant: id => dispatch({type: "DELETE_RESTAURANT", id})
// })
//
export default connect(mapStateToProps)(GiftsContainer)
