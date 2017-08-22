import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

//REDUX Imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

class AppContainer extends React.Component {
  componentWillMount() {
    const theme = {
      grid: {
        minMargin: 2,
      },
      gridItem: {
        imageWidth: 118,
        imageHeight: 118,
      },
    }

    this.props.setTheme(theme);
  }

  render() {
    return ( 
      <View style={ styles.container }>
        <TouchableHighlight onPress={() => this.props.launchPicker() }>
          <Text>Launch Picker</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    nav: state.nav,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);