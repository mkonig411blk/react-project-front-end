import './App.css';
import React, { Component } from 'react';
import GiftsContainer from './containers/GiftsContainer';
import UserInput from './components/users/UserInput';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {


  render () {
        return (
          <Router>
            <div className="App">
                <Route exact path="/" component={UserInput} />
                <UserInput />
                <GiftsContainer />
                <Route exaxt path= "/gifts" component={GiftsContainer} />
            </div>
         </Router>
        )
    }
}

export default App;
// <Route path="/" component={UserInput} />
// redirect to /gifts link in the addUser action
// <Route path= "/gifts" component={GiftsContainer} />
