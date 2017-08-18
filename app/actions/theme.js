import * as types from './types';

export function setTheme(theme = {}) {
  return {
    type: types.SET_THEME,
    theme: theme,
  }
}