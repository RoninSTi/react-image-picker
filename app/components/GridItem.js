import React from 'react';
import { Animated, Easing, Image, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

class GridItem extends React.Component {
    static propTypes = {
        image: React.PropTypes.object.isRequired,
    }

    constructor(props) {
        super(props);
        this.state = {
            isSelected: false,
            scale: new Animated.Value(0),
            opacity: new Animated.Value(0),
        };
    }

    _selectedIndex() {
        const index = this.props.selectedImages.findIndex(obj => obj.uri == this.props.image.uri)
        return index + 1;
    }

    _handlePress() {
        this.setState({
            isSelected: !this.state.isSelected,
        });
        this.state.isSelected ? this.props.deleteImage(this.props.image.uri):this.props.addImage(this.props.image);
        this._animate();
    }

    _animate() {
        this.state.scale.setValue(0);
        const borderToValue = this.state.isSelected ? 0:1.0;
        Animated.parallel([
            Animated.timing(this.state.scale, {
                toValue: 1.0,
                duration: 400,
                easing: Easing.easeOutBack,
            }),

            Animated.timing(this.state.opacity, {
                toValue: borderToValue,
                duration: 150,
                easing: Easing.easeOutBack,
            })
        ]).start();
    }

    render() {
        const { image, theme } = this.props;

        const size = {
            width: theme.gridItem.imageWidth,
            height: theme.gridItem.imageHeight,
        };

        const container = {
            margin: theme.grid.margin,
        };

        const border = {
            backgroundColor: 'transparent',
            flex: 1,
            top: 0,
            left: 0,
            position: 'absolute',
            width: theme.gridItem.imageWidth,
            height: theme.gridItem.imageHeight,
            borderColor: theme.style.foregroundColor,
            borderWidth: theme.gridItem.borderWidth,
            opacity: this.state.opacity,
        };

        const displayIndex = {
            opacity: this.state.opacity,
            backgroundColor: theme.style.foregroundColor,
            color: 'white',
            top: 0,
            right: 0,
            position: 'absolute',
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 5,
            paddingBottom: 5,
            textAlign: 'center',
        };

        const buttonScale = this.state.scale.interpolate({
            inputRange: [0, 0.5, 1.0],
            outputRange: [1.0, 0.95, 1.0]
        });

        const scale = {
            transform: [{scale: buttonScale}]
        };

        return (
            <TouchableWithoutFeedback 
                onPress={ this._handlePress.bind(this) }>
                <Animated.View style={[container, scale]}>
                    <Animated.Image style={ size }
                                    source={{ uri: image.uri }} />
                    <Animated.View style={ border } />
                    <Animated.Text style={ displayIndex }>
                        { this._selectedIndex() }
                    </Animated.Text>
                </Animated.View>
            </TouchableWithoutFeedback>    
        )
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect((state) => { 
    return {
        selectedImages: state.selectedImages,
        theme: state.theme,
    } 
}, mapDispatchToProps)(GridItem);