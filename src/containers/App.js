import React, { Component } from 'react';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';  
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import 'babel-polyfill';

import DeparturesApp from './DeparturesApp';  
import DeparturesAppReducer from '../reducers/DeparturesApp';
import { requestUpdate, recieveUpdate } from '../actions/DeparturesActions';
import '../assets/stylesheets/main.scss';

// import DevTools from '../utils/DevTools'

const store = createStore(
    DeparturesAppReducer,
    compose(
        applyMiddleware(thunk), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default class App extends Component {
  render() {
    return (
        <div className="appcontainer">
            <Provider store={store}>
                <DeparturesApp />
            </Provider>
        </div>
    );
  }
}