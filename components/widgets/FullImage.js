import React, { Component } from 'react';
import {  View, Image, StyleSheet } from 'react-native';

export default class FullImage extends Component {
  render() {
    return (
      <View style={[ {...this.props.imgContainer}, style.imgContainer ]} >
        <Image 
            source={ this.props.source }
            style={[{ ...this.props.img }, style.img ]}
         />
      </View>
    );
  }
}

const style = StyleSheet.create({
    imgContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }, 
    img: {
        width: '100%',
        height: '100%',
    }
})
