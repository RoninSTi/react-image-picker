import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';

//REDUX Imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

import GridItem from './GridItem';
import Header from './Header';


class Picker extends React.Component {
  constructor(props) {
    super(props);
    this.props.setTheme(props.themeOverride);
  }

  componentDidMount() {
    const params = {
      first: this.props.theme.settings.imageFetchCount,
    };
    this.props.fetchImages(params);
  }

  _renderFooter() {
    return null;
  }

  _endReached() {
    return null;
  }

  render() {
    const theme = this.props.theme;
    const margin = {
      margin: theme.grid.margin,
    };
    const container = {
      backgroundColor: theme.style.backgroundColor,
      flex: 1,
    };
    return ( 
      <View style={ container }>
        <Header />
        <FlatList
           contentContainerStyle={[styles.list, margin]}
           data={this.props.fetchedImages}
           renderItem={({ item }) => (
             <GridItem image={ item }/>
           )}
           keyExtractor={item => item.uri}
           numColumns={this.props.theme.grid.numColumns}
           key={this.props.theme.grid.numColumns}
           onEndReachedThreshold={0.5}
           onEndReached={() => {
             this._endReached();
           }}
           ListFooterComponent={this._renderFooter()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: 'transparent',
    flex: 1,
    marginBottom: 20,
  },
  list: {
    justifyContent: 'center',
    backgroundColor: 'transparent',
  }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading,
    fetchedImages: state.fetchedImages,
    theme: state.theme,
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Picker);