import { combineReducers } from 'redux';
import * as imageReducer from './image';
import * as themeReducer from './theme';

export default combineReducers(Object.assign(
  imageReducer,
  themeReducer,
));