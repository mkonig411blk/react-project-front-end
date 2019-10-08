import React, { Component } from 'react'
// import RestaurantInput from '../components/restaurants/RestaurantInput'
import Gifts from '../components/gifts/Gifts'
import { connect } from 'react-redux'
import { fetchGifts } from '../actions/fetchGifts'

class GiftsContainer extends Component {

    componentDidMount() {
        this.props.fetchGifts()
    }

    handleLoading = () => {
        console.log(this.props.loading)
        if(this.props.loading) {
            return <div>Loading...</div>
        } else {
            return <Gifts gifts={this.props.gifts} />
        }
    }


  render() {
    return (
      <div>
        {this.handleLoading()}
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

function mapDispatchToProps(dispatch){
  return { fetchGifts: () => dispatch(fetchGifts()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(GiftsContainer)
