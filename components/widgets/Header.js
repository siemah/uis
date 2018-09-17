import React, { Component } from 'react';
import {  View, Text, TouchableHighlight, Image, Animated, TextInput, Dimensions } from 'react-native';

export default class Header extends Component {

  state = {
    left: new Animated.Value( 0 ),
    display: 'none',
  }

  _onPress = () => { 
    Animated.sequence([
      Animated.spring(                  // Animate over time
        this.state.display,            // The animated value to drive
        {
          toValue: 'flex',                   // Animate to opacity: 1 (opaque)
          duration: 100,              // Make it take a while
        }
      ), 
      Animated.spring(                  // Animate over time
        this.state.left,            // The animated value to drive
        {
          toValue: Dimensions.get('window').width - 30,                   // Animate to opacity: 1 (opaque)
          duration: 100,              // Make it take a while
        }
      ) 
    ]).start();
  }

  render() {
    return (
      <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: 15,
      }} >
        <TouchableHighlight underlayColor='transparent'
        style={{
            
        }}>
            <Image source={ require('../icons/menu.png')} style={{width: 30, height: 30,}} />
        </TouchableHighlight>
        <Text style={{ flex: 1, color: 'white', fontSize: 20, fontWeight: '900', textAlign: 'center', }} >DAYEN</Text>
        <TouchableHighlight>
            <Image source={{ uri: 'http://www.tattvam.co.in/assets/images/icon.png' }} style={{ width: 30, height: 30, }} />
        </TouchableHighlight>
        <TouchableHighlight onPress={ this._onPress }>
            <Image source={{ uri: 'http://moziru.com/images/unknown-clipart-missing-person-12.png' }} style={{ width: 30, height: 30, }} />
        </TouchableHighlight>
        <Animated.View style={{ position: 'absolute', top: 15, left: 15, zIndex: this.state.zIndex, display: 'none' }} >
            <View style={{ display: 'none'}} >
                <TextInput placeholder='search'
                    underlineColorAndroid='transparent'
                    placeholderTextColor='white'
                    style={{
                        backgroundColor: 'rgba(45,45,45,.3)',
                        color: 'white', 
                        textAlign: 'center', 
                    }} />
            </View>
        </Animated.View>
      </View>
    );
  }
}
