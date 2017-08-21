import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//Redux Imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { createLogger } from 'redux-logger';
import reducer from './app/reducers';
import thunkMiddleware from 'redux-thunk';

//Component Imports
import AppContainer from './app/containers/AppContainer';
import Picker from './app/components/Picker';

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
    const theme = {
      grid: {
        minMargin: 5,
      },
      gridItem: {
        imageWidth: 110,
        imageHeight: 110,
      },
      header: {
        height: 80,
      }
    }

    return (
      <Provider store={store}>
        <Picker themeOverride={ theme }/>
      </Provider>
    )
  }
}



