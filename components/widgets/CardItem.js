import React, { Component } from 'react';
import {  View, Text, Image, TouchableHighlight, } from 'react-native';

export default class CardItem extends Component {
  render() { 
    let { title, description, author, author_img, _id, img_src, } = this.props.item;
    return (
      <View style={{
        borderRadius: 5,
        marginBottom: 10,
        backgroundColor: 'rgba(45,45,45, .5)',
        overflow: 'hidden',
      }} key={ _id } >
        <Image source={{ uri: img_src }} style={{
          height: 250,
          width: '100%',
          flex: 1
        }} />
        <View style={{
          marginVertical: 15,
          paddingHorizontal: 10,
          paddingBottom: 15
        }}>
          <Text style={{color: 'rgba(255,255,255, 1)',fontSize: 16, fontWeight: '400'}}>{ title }</Text>
          <Text style={{color: 'rgba(255,255,255, .6)', marginTop: 10}} >{ description }</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems:'center', paddingHorizontal: 10, marginBottom: 10 }} >
          <Image source={{uri: author_img}} style={{width: 30, height: 30,borderRadius: 30}} />
          <Text style={{fontSize: 12, color: 'white', flex: 1, marginLeft: 20, }} >{ author }</Text>
          <TouchableHighlight underlayColor='transparent' >
            <Text style={{ fontSize: 20, color: 'white', fontWeight: '600',bottom: 3 }} >...</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
