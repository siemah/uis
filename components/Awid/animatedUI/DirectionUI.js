import React, { Component } from 'react';
import {  View, Text, Animated, Dimensions, } from 'react-native';

let { width, height, } = Dimensions.get('window');

export default class DirectionUI extends Component {

  state = {
    position: new Animated.ValueXY(this.props.direction == 'ltr' ? { x: -width, y: 0 } : { x: width, y: 0 } ),
  }

  componentDidMount = () => {
    Animated.timing(
      this.state.position,
      {
        toValue: {x:0, y:0},
        duration: this.props.duration || 500,
      }
    ).start();
  }

  render() {
    return (
      <Animated.View 
        style={{ transform: this.state.position.getTranslateTransform() }}
      >
        
        { this.props.children }
        
      </Animated.View>
    );
  }
}
