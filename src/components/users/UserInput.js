import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { addUser } from '.../actions/addUser';

const USERS_URL = "http://localhost:3000/users"

class UserInput extends React.Component {

    state = {
        name: ''
    }

    handleOnChange = event => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.addUser(this.state.name);
        // import reroute component, reroute here
      }

    render(){
        return(
            <div id="login-form">
                <form onSubmit={this.handleOnSubmit}>
                    <label>To leave a comment, enter your username:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}
// 
// function mapDispatchToProps(dispatch){
//   return { addUser: (name) => dispatch(addUser(name)) }
// }
//
// export default connect(null, mapDispatchToProps)(UserInput)

export default UserInput
