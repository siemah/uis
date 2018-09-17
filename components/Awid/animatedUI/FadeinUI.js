import React, { Component } from 'react';
import {  View, Text, Animated } from 'react-native';

export default class FadeInUI extends Component {

  state = {
    opacity: new Animated.Value(0),
    height: 0,
  }

  componentDidMount = () => {
    Animated.spring(
      this.state.opacity,
      {
        toValue: 1,
        speed: 0,
        bounciness: 10,
      }
    ).start();
  }
  
  render() {
    return (
      <Animated.View style={{ opacity: this.state.opacity,  }} >
        { this.props.children }
      </Animated.View>
    );
  }
}
