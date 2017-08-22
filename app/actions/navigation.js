import * as types from './types';

export function launchPicker() {
  return {
    type: types.LAUNCH_PICKER,
  }
}

export function dismissPicker() {
  return {
    type: types.DISMISS_PICKER,
  }
}