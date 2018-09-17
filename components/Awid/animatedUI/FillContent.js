import React, { Component } from 'react';
import { Animated, Dimensions, } from 'react-native';


export default class FillContent extends Component {

  state = {
    width: new Animated.Value(0),
  }

  componentDidMount = () => {
    Animated.timing(
      this.state.width,
      {
        toValue: Dimensions.get('window').width,
        duration: this.props.duration || 200,
      }
    ).start();
  }

  render() {
    return (
      <Animated.View style={{
        width: this.state.width,
        ...this.props.style
      }}>
        
        { this.props.children }

      </Animated.View>
    );
  }
}
