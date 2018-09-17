import React, { Component } from 'react';
import {  View, Text, StatusBar, ScrollView } from 'react-native';

import SliderContainer from './widgets/SliderContainer';
import MainContainer from './widgets/MainContainer';

export default class DribbbleUI extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={{ }} showsVerticalScrollIndicator={ false } >
        <StatusBar hidden={true} />
        <SliderContainer />
        <MainContainer />
        <MainContainer />
        <MainContainer />
      </ScrollView>
    );
  }
}
