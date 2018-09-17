import React, { Component } from 'react';
import {  View, Text, Button } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import FullImage from './components/widgets/FullImage';
import Switcher from './components/Awid/Switcher';
import Connexion from './components/Awid/Connexion';
import Footer from './components/Awid/Footer';

import Geocoder from 'react-native-geocoding';

export default class App extends Component {

  _onPress = () => {
    navigator.geolocation.getCurrentPosition( position => {
      console.warn(position.coords);
    }, err => console.warn(err));
  }

  render() {
    return (
      <Button title='get address' onPress={ this._onPress } />
    );
  }
}

/*<View style={{flex: 1}} >  

        <Background style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}} />

        <Switcher />
        <Connexion style={{ height: 270, marginHorizontal: 10, }} />

        <Footer />

    </View>*/

let Background = props => (
  <View style={ {...props.style} } >
    <FullImage 
    source={{ uri: 'https://www.electronicverificationsystems.com/images/default-source/default-album/phone-as-identity.jpg' }} />
    <LinearGradient 
      colors={['rgba(156, 39, 176, .8)', 'rgba(213, 30, 99, .8)']} 
      start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}
      style={[ {...props.style, flex: 1, }]}>
    </LinearGradient>
  </View>
);