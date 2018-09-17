import React, { Component } from 'react';
import {  View, Text, TouchableHighlight, ViewPagerAndroid, Image,  } from 'react-native';

export default class Slider extends Component {
  
  state = {
    images: [
      require( '../images/1.jpg'),
      require( '../images/2.jpg'),
      require( '../images/3.jpg'),
    ], 
    page: 0,
  }

  _onPress = page => {
    this.vp.setPage(page)
  }
  
  render() {
    return (
      <View style={{ flex: 1 }} >

        <ViewPagerAndroid
          style={{ flex: 1 }}
          initialPage={this.state.page}
          onPageSelected={event => console.warn(event.nativeEvent)}
          ref={(vp) => { this.vp = vp; }}
          scrollEnabled={true}
        >
          {
            this.state.images.map((img, index) => <SliderItem src={img} key={index} index={index} />)
          }
        </ViewPagerAndroid>

        <TouchableHighlight
          style={{ position: 'absolute', top: 0, right: 0, height: 50, width: 100, backgroundColor: '#E91E63', justifyContent: 'center', }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }} >Back</Text>
        </TouchableHighlight>  

        <View style={{ position: 'absolute', bottom: 10, left: 0, right: 0, justifyContent: 'center', flexDirection: 'row' }} >
          <TouchableHighlight 
            activeOpacity={1}
            underlayColor='transparent'
            style={ style.sliderBtn }
            onPress={() => { this._onPress(0) }}>
            <Text style={ style.btnRoundedItem } ></Text>
          </TouchableHighlight>
          <TouchableHighlight 
            activeOpacity={1}
            underlayColor='transparent'
            style={ style.sliderBtn }
            onPress={() => { this._onPress(1) }}>
            <Text style={ style.btnRoundedItem } ></Text>
          </TouchableHighlight>
          <TouchableHighlight 
            activeOpacity={1}
            underlayColor='transparent'
            style={ style.sliderBtn }
            onPress={() => { this._onPress(2) }}>
            <View style={ style.btnRoundedItem } ></View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}


const SliderItem = props => (
  <View index={props.index} style={{ flex: 1, }} >
    <Image source={props.src} style={{ width: '100%', height: 250 }} />
  </View>
); 

const style = {
  sliderBtn: { 
    width: 12, height: 12, 
    borderRadius: 20, 
    backgroundColor: 'transparent', 
    marginRight: 10, 
    borderWidth: 1, borderColor: 'white', 
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  btnRoundedItem: { backgroundColor: 'white', width: 5, height: 5, borderRadius: 5 },
}