import ReactDOM from 'react-dom';
import React from 'react'
import './index.css';
import App from './App';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import UserReducer from "./reducers/UserReducer"
import ComReducer from './reducers/ComReducer'
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'

const rootReducer = combineReducers({coms: ComReducer, users: UserReducer})
const store = createStore(rootReducer,compose( applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
