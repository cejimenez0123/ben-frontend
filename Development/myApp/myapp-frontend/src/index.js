import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import leadReducer from './reducers/leadReducer';
import pageReducer from './reducers/pageReducer'
import {combineReducers } from "redux"
import ErrorBoundary from './functions/errorBoundary'
const rootReducer = combineReducers({pages: pageReducer,users: leadReducer})
 const store = createStore(
    rootReducer, applyMiddleware(thunk)
);
ReactDOM.render(
  <Provider store={store}> 
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
  </Provider>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
