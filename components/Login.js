import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import Logo from './widgets/Logo';
import InputField from './widgets/InputField';
import ButtonRounded from './widgets/ButtonRounded';

export default class Login extends Component {
  
  state = {
    username: '',
    password: '',
  }

  _setState = state => {
    this.setState({ ...state })
  }

  _submit = () => {
    let res = fetch('https://reactmap-199117.firebaseio.com/users.json', {
      method: 'POST',
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    });
    console.warn(res)
    //return res
  }
  
  render() {
    return (
      <View style={[ style.container, style.center ]} >
        <Logo style={ { flex: 1 } } />
        <View style={[ style.flex2, {width: '100%'} ]}>
          <View style={{marginBottom: 10}} >
            <InputField
              placeholder='Username'
              onChangeText={ username => this._setState({ username })}
             />
            <InputField
              placeholder='Password'
              secure={ true }
              onChangeText={ password => this._setState({ password })}
             />
          </View>
          <View style={[ style.btnContainer, style.center ]} >
            <ButtonRounded text='Login' onSubmit={ this._submit } />
          </View>
          <View style={[style.center]}>
            <TouchableHighlight onPress={() => console.warn("object")}>
              <Text style={{ textAlign: 'center'}}>Forget Password?</Text>
            </TouchableHighlight>
            <Text style={ style.underline } ></Text>
          </View>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: { 
    flex: 1, 
    alignItems: 'center', 
    backgroundColor: '#ffffff',
  },
  flex1: { 
    flex: 1, 
  },
  flex2: { 
    flex: 2,
  }, 
  btnContainer: { 
    marginVertical: 20,
  }, center: {
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  underline: { 
    borderBottomWidth: 1, 
    borderBottomColor: 'silver', 
    width: 115,
    position: 'relative',
    bottom: 10
  }
});