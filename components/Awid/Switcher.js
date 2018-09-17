import React, { Component } from 'react';
import {  View, Text, TouchableHighlight,  } from 'react-native';

export default class Switcher extends Component {
  render() {
    return (
      <View style={{ marginTop: 40, marginBottom: 20, flexDirection: 'row',  }} >

        <View style={{flex: 1, alignItems:'center', justifyContent: 'center',}} >
          <TouchableHighlight underlayColor='transparent' >
            <Text style={[ style.text, { bottom: 6} ]}> Login </Text>
          </TouchableHighlight>
          
        </View>

        <View style={{flex: 1, alignItems:'center', justifyContent: 'center',}} >
          <TouchableHighlight underlayColor='transparent' >
            <Text style={ style.text }> Signup </Text>
          </TouchableHighlight>
          <View style={{ borderRadius: 5, backgroundColor: 'white', width: 5, height: 5, marginTop: 10, }} ></View>
        </View>

      </View>
    );
  }
}

const style = {
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
}
