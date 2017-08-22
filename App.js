import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Redux Imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers';
import thunkMiddleware from 'redux-thunk';

//Component Imports
import AppWithNavigationState from './app/navigation/AppNavigator';

const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__
});

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <AppWithNavigationState />
      </Provider>
    )
  }
}



