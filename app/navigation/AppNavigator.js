import { StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

import AppContainer from '../containers/AppContainer';
import Picker from '../components/Picker';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
  },
});

export const AppNavigator = StackNavigator(
  {
    Main: { screen: AppContainer },
    Picker: { screen: Picker },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);