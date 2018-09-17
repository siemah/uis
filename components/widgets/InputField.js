import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions } from 'react-native';

export default class InputField extends Component {

  _onChangeText = value => {
    this.setState({value})
  } 

  render() {
    return (
      <View style={ style.inputContainer } >
        <TextInput
          placeholder={`${this.props.placeholder}`}
          secureTextEntry={ this.props.secure || false}
          onSubmitEditing={() => console.warn('submit')}
          returnKeyType='next'
          keyboardType='email-address'
          style={[ { ...this.props.style }, style.input ]}
          underlineColorAndroid={'transparent'}
          onChangeText={ this.props.onChangeText }
         />
      </View>
    );
  }
}

let { width, height } = Dimensions.get('window');

const style = StyleSheet.create({
  inputContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    textAlign: 'center',
    height: 45,
    width: width - 40,
    backgroundColor: 'transparent',
    borderRadius: 45,
    borderWidth: 2,
    borderColor: 'silver',
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontSize: 16,
    fontWeight: '400',
    color: 'silver',
  }
})
