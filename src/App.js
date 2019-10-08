import './App.css';
import React, { Component } from 'react';
import GiftsContainer from './containers/GiftsContainer';


class App extends Component {


  render () {
        return (
          <div className="App">
            <GiftsContainer />
          </div>
        )
    }
}

export default App;
