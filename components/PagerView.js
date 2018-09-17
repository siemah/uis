import React, { Component } from 'react';
import {  View, Text, ViewPagerAndroid, Image, TouchableHighlight } from 'react-native';

export default class componentName extends Component {
  state = {
    images : [
      require( './images/1.jpg' ), 
      require( './images/2.jpg'), 
      require( './images/mail.png' ), 
    ], page: 2,
    i: 2
  }

  _onPress = i => {
    this.vp.setPage( i )
  }

  

  render() { 
    return (
      <View style={{flex: 1}} >

        <ViewPagerAndroid 
          style={{ flex: 1 }}
          initialPage={ this.state.i }
          onPageSelected={ event => console.warn(event.nativeEvent) } 
          ref={(vp) => { this.vp = vp; }}
        >
          {
            this.state.images.map((img, index) => <SliderItem src={ img } key={ index } index={ index } /> )
          }
        </ViewPagerAndroid>
        <View style={{ position: 'absolute', bottom: 10, left: 0, right: 0, justifyContent: 'center', flexDirection: 'row' }} >
          <TouchableHighlight style={{ width: 20, height: 20, borderRadius: 20, backgroundColor: 'red', marginRight: 10  }} 
            onPress={ () => { this._onPress(0) } }>
            <Text></Text>
          </TouchableHighlight>
          <TouchableHighlight style={{ width: 20, height: 20, borderRadius: 20, backgroundColor: 'red', marginRight: 10,  }} 
            onPress={ () => { this._onPress(1) } }>
            <Text></Text>
          </TouchableHighlight>
          <TouchableHighlight style={{ width: 20, height: 20, borderRadius: 20, backgroundColor: 'red', marginRight: 10,  }} 
            onPress={ () => { this._onPress(2) } }>
            <Text></Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const SliderItem = props => (
  <View index={ props.index } style={{flex: 1, }} >
    <Image source={props.src} style={{ width: '100%', height: 250 }} />
  </View>
); 
