import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './reducers/rootReducer.js'
import manageGifts from './reducers/manageGifts.js'
import manageUsers from './reducers/manageUsers.js'
import './index.css';

const store = createStore(manageGifts, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, document.getElementById('root')
)
