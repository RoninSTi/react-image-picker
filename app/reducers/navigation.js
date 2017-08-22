import createReducer from '../lib/createReducer';
import * as types from '../actions/types';
import { AppNavigator } from '../navigation/AppNavigator';
import { NavigationActions } from 'react-navigation';

const firstAction = AppNavigator.router.getActionForPathAndParams('Main');
const tempNavState = AppNavigator.router.getStateForAction(firstAction);
const initialNavState = AppNavigator.router.getStateForAction(
  firstAction,
  tempNavState
);

export const nav = createReducer(initialNavState, {
  [types.LAUNCH_PICKER](state, action) {
    return AppNavigator.router.getStateForAction(
        NavigationActions.navigate({ routeName: 'Picker' }),
        state
      );
  },

  [types.DISMISS_PICKER](state, action) {
    return AppNavigator.router.getStateForAction(
      NavigationActions.back(),
      state
    );
  },
});