import React, { Component } from 'react';
import { Animated } from 'react-native';

export default class Resize extends Component {

  state = {
    fromWidth: this.props.from,
    toWidth: this.props.to
  }

  

  render() {
    return (
      <Animated.View>
        { this.props.children }
      </Animated.View>
    );
  }
}
