import React, { Component } from 'react';
import {  View, Text, TouchableHighlight, Image } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

export default class Footer extends Component {
  render() {
    return (
      <View style={{ position: 'absolute', bottom: 20, width: '100%', }} >
        <View style={{ flexDirection: 'row', marginBottom: 20}} >
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1, marginLeft: 10 }} >
            <BtnIcon 
              colors={['rgba(255, 171, 0, .5)', 'rgba(240, 98, 146, .5)']}
              src={ require('../icons/facebook-logo.png') } 
              style={{ width: 40, height: 40, borderRadius: 40, overflow: 'hidden', }} />
            <BtnIcon 
              colors={['rgba(186, 104, 200, .5)', 'rgba(156, 39, 176, .5)']}
              src={ require('../icons/linkedin.png') } 
              style={{ width: 40, height: 40, borderRadius: 40, overflow: 'hidden', }} />
            <BtnIcon 
              colors={['rgba(29, 233, 182, 1)', 'rgba(0, 150, 136, 1)']}
              src={ require('../icons/twitter.png') } 
              style={{ width: 40, height: 40, borderRadius: 40, overflow: 'hidden', }} />
          </View>
          <View style={{ flex: 1,}} >
            <TouchableHighlight 
              onPress={()=> alert('dayen')}
              underlayColor='white'
              style={{ elevation: 23,backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', borderRadius: 30, height: 40, width: 100, position: 'absolute', right: 20 }} >
              <Text style={{ color: '#E91E63', fontSize: 18, textAlign: 'center',  }} > Signup </Text>
            </TouchableHighlight>
          </View>
        </View>
        <Text style={{ textAlign: 'center', color: 'white', width:'80%', marginHorizontal: '10%'}} > footer for singn up or login using other auth qyqtems </Text>
      </View>
    );
  }
}

const BtnIcon = props => (
  <View style={{ ...props.style, justifyContent: 'center', alignItems: 'center',  elevation: 10, borderWidth: 0 }} >
    <LinearGradient 
      colors={ props.colors } 
      start={{x: 0.5, y: 0}} end={{x: 1, y: .5}}
      style={[ { position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', }]}>
    </LinearGradient>
    <TouchableHighlight underlayColor='transparent'  >
      <Image source={ props.src } style={{ width: 20, height: 20, }} />
    </TouchableHighlight>
  </View>
)
