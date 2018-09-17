import React, { Component } from 'react';
import {  View, Text, ViewPagerAndroid, TextInput, Image, } from 'react-native';

export default class Connexion extends Component {
  render() {
    return (
      <View style={{ borderRadius: 5, padding:20, backgroundColor: 'white', elevation: 30, ...this.props.style }} >

        <ViewPagerAndroid
          style={{ flex: 1, justifyContent: 'center', alignContent: 'center', }}
          ref={(vp) => { this.vp = vp; }}
        >
          
          <View>
            <FormGroup label='EMAIL' placeholder='Email or mobile' />
            <FormGroup label='PASSWORD' placeholder='Password' secure={true} showIcon={ true } />
            <FormGroup label='CONFIRM PASSWORD' placeholder='Confirm' secure={true} />
          </View>

        </ViewPagerAndroid>

      </View>
    );
  }
}

const InputField = props => (
  <TextInput
    returnKeyType={props.type || 'next'}
    secureTextEntry={props.secure || false}
    placeholder={props.placeholder || 'Field'}
    placeholderTextColor='#777'
    onSubmitEditing={() => alert('sub')}
    underlineColorAndroid='transparent' 
    autoCapitalize={'none'}
    autoCorrect={false}
    onChangeText={ props.onChangeText }
    style={{...props.style}}
  />
); 

const FormGroup = props => (
  <View style={{ marginBottom: 10}} >
    <Text style={{ fontWeight: '600', color: '#ccc',fontSize: 14, }} >{ props.label }</Text>
    <InputField 
      placeholder={ props.placeholder } 
      type={props.type}
      secure={props.secure || false} style={{
      borderWidth: 2,
      borderColor: '#eee',
      paddingHorizontal: 8,
      paddingVertical: 10,
      borderRadius: 3,
      backgroundColor: 'transparent',
      color: '#333',
    }} />
    {
      props.showIcon &&
      <Image source={ require('../icons/eye.png') } style={{width: 24, height: 24, position: 'absolute', bottom: 12, right: 15 }} />
    }
  </View>
)