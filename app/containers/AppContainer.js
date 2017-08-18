import React from 'react';
import { Text, View } from 'react-native';

//REDUX Imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

class AppContainer extends React.Component {
  render() {
    return ( 
      <View>
        <Text>Container!</Text>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);