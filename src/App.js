import './App.css';
import React, { Component } from 'react';
import GiftsContainer from './containers/GiftsContainer';
import UserInput from './components/users/UserInput'


class App extends Component {


  render () {
        return (
          <div className="App">
            <UserInput addUser={this.props.addUser}/>
            <GiftsContainer />
          </div>
        )
    }
}

// const mapDispatchToProps = dispatch => ({
//   addUser: name => dispatch({ type: "ADD_USER", name })
// })

function mapDispatchToProps(dispatch){
  return { addUser: (name) => dispatch(addUser(name)) }
}


export default connect(null, mapDispatchToProps)(App);
