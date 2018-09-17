import React, { Component } from 'react';
import {  View, Text, Image, } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import FadeinUI from './animatedUI/FadeinUI';
import DirectionUI from './animatedUI/DirectionUI'; 
import FillContent from './animatedUI/FillContent';

export default class Splash extends Component {
  render() {
    return (
      <LinearGradient 
        colors={['#9C27B0', '#AB47BC', '#E91E63']} 
        start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
        style={[ {...this.props.style, flex: 1, alignItems: 'center', justifyContent: 'center',}]} >
        
        <FadeinUI>
          <Image 
              source={{ uri: 'https://www.ctek.com/storage/ma/bf5040ba689b4869bd6724ba2ef4f44e/f7c47a80cf514cd68fd2ad4413e6d17c/png/244B398F9113E124C095220210C022A17D5A3BF1/FacebookWhiteIcon.png' }} 
              style={{ width: 200, height: 200}} />
        </FadeinUI>
        
        <DirectionUI duration={200} >
          <Text style={{ color: 'white', fontSize: 16, fontFamily: 'monospace' }}>WELCOME TO</Text>
        </DirectionUI>
        
        <DirectionUI duration={200} direction='ltr' >
          <Text style={{ color: 'white', fontSize: 35, fontFamily: 'monospace', fontWeight: '900' }}>{'AWID'}</Text>
        </DirectionUI >
        
        <FillContent style={{ position: 'absolute', bottom: 0, left: 0, height: 8, }} >
          
          <View style={{ position: 'absolute', width: '35%', backgroundColor: '#9C27B0', height: '100%', }}></View>
          <View style={{ position: 'absolute', right: 0, width: '65%', backgroundColor: 'rgba(185,185,185,.4)', height: '100%', }}></View>
        
        </FillContent> 
     
      </LinearGradient>
    );
  }
}
