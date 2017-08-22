import React from 'react';
import { Animated, Dimensions, Easing, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

class Header extends React.Component {
    _prepareToDismiss() {
        this.props.resetPicker();
        this.props.dismissPicker();
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
            paddingLeft: 10,
            paddingRight: 10,
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

        const headerStyles = theme.header.displayShadow ? [size, style, shadow, styles.container]:[styles.container, size, style];

        return (
            <View style={headerStyles}>
                <TouchableHighlight onPress={() => this._prepareToDismiss() }>
                    <Text style={ text }>
                        Cancel
                    </Text>
                </TouchableHighlight>
                <Text style={ text }>
                    {this._titleText()}
                </Text>
                <TouchableHighlight onPress={() => this.props.dismissPicker() }>
                    <Text style={ text }>
                        Select
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 30,
        paddingBottom: 10,
    }
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => {
  return {
    selectedImages: state.selectedImages,
    selectedImageCount: state.selectedImageCount,
    theme: state.theme,
    nav: state.nav,
  }
}, mapDispatchToProps)(Header);