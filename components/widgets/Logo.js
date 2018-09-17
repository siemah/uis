import React, { Component } from 'react';
import {  View, Text, Image, StyleSheet } from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View style={[{ ...this.props.style }, style.centerContent, style.imgContainer] } >
        <Image 
            source={{ uri: 'https://static.wixstatic.com/media/2cd43b_b929ac7972dc4560af6e896549dc1e37~mv2.png' } }
            style={style.img}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
    imgContainer: {
        
    }, 
    img: {
        width: 80,
        height: 80,
    }, 
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    }
})
