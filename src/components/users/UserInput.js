import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from './../../actions/addUser';
import { withRouter } from "react-router-dom";

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
        this.props.addUser(this.state.name, this.props.history);
      }

    render(){
        return(
            <div id="login-form">
                <form onSubmit={this.handleOnSubmit}>
                    <label>To get started, enter your username:</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
  return { addUser: (name, history) => dispatch(addUser(name, history)) }
}

export default connect(null, mapDispatchToProps)(withRouter(UserInput))
