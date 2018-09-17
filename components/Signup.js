import React, { Component } from 'react';
import {  View, Text, } from 'react-native';

import FullImage from './widgets/FullImage';
import InputFieldIcon from './widgets/InputFieldIcon';
import ButtonRounded from './widgets/ButtonRounded';

export default class Signup extends Component {
  render() {
    return (
      <View style={[ style.flex1, style.center ]} >
        <FullImage source={{ uri: 'http://tornedalen.se/wp-content/uploads/revslider/zephyr-main/gaussian-blur2-600x400.jpg'}} />
        <LogoText />
        <InputFieldIcon src='../icons/mail.png' style={style.input} placeholder='Email' placeholderTextColor='#FFF' />
        <InputFieldIcon src='../icons/mail.png' style={style.input} placeholder='Password' secure={true} placeholderTextColor='#FFF' />
        <View style={[ style.center] }>
          <Text style={{color:'white'}} >Forget password</Text>
        </View>
        <ButtonRounded style={ { btnContainer: style.btnContainer, btn: style.btn, } } text='Sign in' />
        <ButtonRounded style={ { btnContainer: style.btnContainer, btn: { backgroundColor: 'transparent' }, } } text='Sign up' />
      </View>
    );
  }
}

const LogoText = props => (
  <View style={[ {...props.style}, style.logoContainer ]} >
    <Text style={ style.logo } >COMPANY</Text>
  </View>
);

const style = {
  logoContainer: {
    //flex:1,
    marginBottom: 20,
  },
  logo: {
    color: '#FFF',
    fontSize: 45,
    fontWeight: '900',
    fontFamily: 'courier new',
  }, 
  center: { 
    justifyContent: 'center',
    alignItems: 'center', 
  }, 
  flex1: { flex: 1 },
  input: {
    backgroundColor: 'rgba(45,45,45,.6)',
    color: 'white',
    textAlign: 'left',
    borderWidth: 0,
    height: 50,
  }, 
  btnContainer: {
    backgroundColor: 'transparent',
    marginTop: 30,
  }, 
  btn: {
    backgroundColor: '#48dbfb',
  }
}