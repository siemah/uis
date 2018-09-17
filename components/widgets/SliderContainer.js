import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

import Slider from './Slider';

export default class SliderContainer extends Component {
  render() {
    return (
      <View style={{ ...this.props.style, height: 250, }} >
        <Slider />
      </View>
    );
  }
}
