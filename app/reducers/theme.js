import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import BASE_THEME from '../lib/themeHelper';
import { themeFromOverride } from '../lib/themeHelper';

export const theme = createReducer(BASE_THEME, {
  [types.SET_THEME](state, action) {
    return themeFromOverride(state, action.theme);
  },
});