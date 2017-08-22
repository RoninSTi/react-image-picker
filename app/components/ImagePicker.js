import React from 'react';
import { ActivityIndicator, CameraRoll, Image, FlatList, StyleSheet, View, Dimensions } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import GridItem from './GridItem';
import Header from './Header';

//REDUX Imports
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

class ImagePicker extends React.Component {
  constructor(props) {
    super(props);
    // const theme = props.theme;
    // const {height, width} = Dimensions.get('window');

    // const minMargin = theme.minItemMargin ? theme.minItemMargin:10;
    // this.numColumns = Math.floor(width / (theme.imageWidth + (2 * minMargin)));
    // const margin = (width - (this.numColumns * theme.imageWidth))/((2 * this.numColumns) + 2);
    // const imageHeight = theme.isSquare ? theme.imageWidth: theme.imageHeight ? theme.imageHeight:theme.imageWidth;
    // const backgroundColor = theme.backgroundColor ? theme.backgroundColor:'#E7E7E7';
    // const foregroundColor = theme.foregroundColor ? theme.foregroundColor:'#056ECF';
    // const borderWidth = theme.borderWidth ? theme.borderWidth:5.0;
    // const headerHeight = theme.headerHeight ? theme.headerHeight:64;
    // const headerBackgroundColor = theme.headerBackgroundColor ? theme.headerBackgroundColor:backgroundColor;
    // const fontSize = theme.fontSize ? theme.fontSize:20;
    // const fontFamily = theme.fontFamily ? theme.fontFamily:'Arial';
    // const headerTitleColor = theme.headerTitleColor ? theme.headerTitleColor:'#333';
    // const headerShadow = theme.headerShadow ? theme.headerShadow:true;

    // this.gridItemTheme = {
    //   margin: margin,
    //   imageWidth: theme.imageWidth,
    //   imageHeight: imageHeight,
    //   borderWidth: borderWidth,
    //   backgroundColor: backgroundColor,
    //   foregroundColor: foregroundColor,
    //   headerHeight: headerHeight,
    //   headerBackgroundColor: headerBackgroundColor,
    //   fontSize: fontSize,
    //   fontFamily: fontFamily,
    //   headerTitleColor: headerTitleColor,
    //   headerShadow: headerShadow,
    // }

    // this.numResults = theme.numResults ? theme.numResults:25;
  }

  componentDidMount() {
    const params = {
      first: 5,
    }
    this.props.fetchImages(params);
  }

  _endReached() {
    // if (this.props.pageInfo.has_next_page) {
    //   const params = {
    //     first: this.numResults,
    //     after: this.props.pageInfo.end_cursor,
    //   }
    //   this.props.fetchImages(params);
    // }
  }

  _renderHeader() {
    return <Header theme={ this.gridItemTheme } />
  }

  _renderFooter() {
    if (!this.props.isLoading) {
      return null;
    }

    return (
      <View
        style={{
          paddingVertical: 20,
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  }

  render() {
    // const theme = this.gridItemTheme
    // const margin = {
    //   margin: theme.margin,
    // };
    // const container = {
    //   backgroundColor: theme.backgroundColor,
    //   flex: 1,
    // };

    return (
      <View/>
      // <View style={{ backgroundColor: theme.backgroundColor,
      //                  flex: 1, }}>
      //   {this._renderHeader()}
      //   <List style={styles.listContainer}>
      //     <FlatList
      //     contentContainerStyle={[styles.list, margin]}
      //     data={this.props.fetchedImages}
      //     renderItem={({ item }) => (
      //       <GridItem image={ item }
      //                 theme={ theme } />
      //     )}
      //     keyExtractor={item => item.uri}
      //     numColumns={this.numColumns}
      //     onEndReachedThreshold={0.5}
      //     onEndReached={() => {
      //       this._endReached();
      //     }}
      //     ListFooterComponent={this._renderFooter()}
      //     />
      //   </List>
      // </View>
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
    theme: state.theme,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ImagePicker);