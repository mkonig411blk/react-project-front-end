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
                <Route path="/" component={UserInput} />
            </div>
         </Router>
        )
    }
}

export default App;
