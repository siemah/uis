import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Dimensions, Image, } from 'react-native';

export default class InputFieldIcon extends Component {

    _onChangeText = value => {
        this.setState({ value })
    }

    render() {
        let placeholderTextColor = this.props.placeholderTextColor || '#454545';
        let src = '../icons/mail.png' 
        return (
            <View style={style.inputContainer} >
                <View style={ style.imgContainer } >
                    <Image source={require(src)} style={style.img} />
                </View>
                <TextInput
                    placeholder={`${this.props.placeholder}`}
                    placeholderTextColor={`${placeholderTextColor}`}
                    secureTextEntry={this.props.secure || true}
                    onSubmitEditing={() => console.warn('submit')}
                    returnKeyType='next'
                    keyboardType='email-address'
                    style={[style.input, { ...this.props.style } ]}
                    underlineColorAndroid={'transparent'}
                    onChangeText={this.props.onChangeText}
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
        paddingHorizontal: 50,
        paddingVertical: 5,
        fontSize: 16,
        fontWeight: '400',
        color: 'silver', 
        position: 'relative'
    }, imgContainer: {
        width: 24,
        height: 24,
        position: 'absolute',
        left: 40,
        top: 13,
        zIndex : 100000,
    }
})
