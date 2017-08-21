import React from 'react';
import { Animated, Dimensions, Easing, StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    _titleText() {
        switch (this.props.selectedImageCount) {
            case 0:
            return 'Select photo(s)';
            case 1:
            return '(1) Photo selected';
            default:
            return '(' + this.props.selectedImageCount + ') Photos selected';
        }
    }

    render() {
        const { theme } = this.props;
        const {height, width} = Dimensions.get('window');
        const size = {
            width: width,
            height: theme.header.height,
        }

        const style = {
            backgroundColor: theme.header.backgroundColor,
            justifyContent: 'center',
        }

        const text = {
            textAlign: 'center',
            fontSize: theme.style.fontSize,
            fontFamily: theme.style.fontFamily,
            color: theme.header.color,
        }

        const shadow = {
            shadowColor: '#000000',
            shadowOffset: {
              width: 0,
              height: 3
            },
            shadowRadius: 5,
            shadowOpacity: 0.2
        }

        const titleText = this._titleText();

        const headerStyles = theme.header.displayShadow ? [size, style, shadow]:[size, style];

        return (
            <View style={headerStyles}>
                <Text style={ text }>
                    {titleText}
                </Text>
            </View>
        )
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {
    selectedImages: state.selectedImages,
    selectedImageCount: state.selectedImageCount,
    theme: state.theme,
  }
}, mapDispatchToProps)(Header);