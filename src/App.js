import './App.css';
import React, { Component } from 'react';
import GiftsContainer from './containers/GiftsContainer';
import UserInput from './components/users/UserInput';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {


  render () {
      console.log(this.history)
        return (
          <Router>
            <div className="App">
                <Route exact path="/" component={UserInput}  history={this.history}/>
                <Route exact path= "/gifts" component={GiftsContainer}/>
            </div>
         </Router>
        )
    }
}

export default App;
