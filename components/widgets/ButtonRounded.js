import React, { Component } from 'react';
import { TouchableHighlight, View, Text, Dimensions, StyleSheet, Animated, ActivityIndicator, } from 'react-native';


let { width, height } = Dimensions.get('window');

export default class ButtonRounded extends Component {

  constructor(props) {
    super(props)
    this.state = {
      opacity: new Animated.Value(width),
      opacityValue: width,
    }
  }
  
  _onPress = () => {
    this.props.onSubmit() 
    Animated.timing(                  // Animate over time
      this.state.opacity,            // The animated value to drive
      {
        toValue: this.props.to || 50,// Animate to opacity: 1 (opaque)
        duration: 100,              // Make it take a while
      }
    ).start();
    this.setState({ opacityValue: this.props.to || 50 });
    setTimeout(() => {
      Animated.timing(                  // Animate over time
        this.state.opacity,            // The animated value to drive
        {
          toValue: width,// Animate to opacity: 1 (opaque)
          duration: 100,              // Make it take a while
        }
      ).start();
      this.setState({ opacityValue: width });
    }, 1500);
  }
 

  render = () => {
    const { opacityValue, opacity } = this.state;
    const to = this.props.to || 50;
    let touchableStyle = [style.touchable];
    let {btnContainer, btn } = this.props.style;
    if (opacityValue == to) touchableStyle.push({width: 45})
    return (
      <Animated.View style={[ { alignItems: 'center', backgroundColor: 'white', width: opacity }, { ...btnContainer },  ]} >
        <TouchableHighlight
          underlayColor='#E91E63'
          onPress={ this.props._onPress || this._onPress }
          style={[ touchableStyle, { ...btn } ]} 
        >
          {
            (
              opacityValue == to && <ActivityIndicator color='#FFF' size="small" />
            )
            || 
            <ForgetText text={this.props.text} />
          }
        </TouchableHighlight>
      </Animated.View>
    );
  }
}

const ForgetText = props => <Text style={ style.forget }>{ props.text } </Text>; 

const style = StyleSheet.create({
  touchable: {
    backgroundColor: '#E91E63',
    borderRadius: 45,
    height: 45,
    width: width - 40,
    justifyContent: 'center',
  }, 
  forget: { color: "#fff", fontWeight: '400', textAlign: "center", fontSize: 17 },
})
