import { combineReducers } from 'redux';
import * as imageReducer from './image';
import * as themeReducer from './theme';
import * as navigationReducer from './navigation';

export default combineReducers(Object.assign(
  imageReducer,
  navigationReducer,
  themeReducer,
));