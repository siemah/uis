import React, { Component } from 'react';
import { View, Text, TouchableHighlight, } from 'react-native';

export default class MainContainer extends Component {
  render() {
    return (
      <View style={ style.container } >
        <Header title='XX Grand Apartement' type='1' subtitle='Rent: £15/pw' />
        <Button title='secure apartement' />
        <Hr />
        <Header title='Summary' type='3' subtitle='Size: 150m2' />
        <View style={{ flexDirection: 'row', }} >
            <Header title='Rent: £153/pw' style={{ width: 140, }} />
            <Button title='secure apartement' style={{ flex: 1, }} />
        </View>
      </View>
    );
  }
}

const Header = props => {
    let fs = props.type == '1' ? { fontSize: 25, } : props.type == '3' ? { fontSize: 18, } : { fontSize: 14, };  
    return (
        <View style={{ height: 50, marginBottom: 20, ...props.style, }} >
            <Text style={[ style.header, { ...fs } ]} > {props.title} </Text>
            {
                props.subtitle &&
                <Text style={[style.subtitle, { fontSize: 16, }]} > { props.subtitle } </Text>
            }
        </View>
    );
};

const Button = props => (
    <TouchableHighlight
        activeOpacity={.8}
        underlayColor='#111'
        style={{ backgroundColor: '#111', height: 40, width: '100%', borderWidth: 0, justifyContent: 'center', borderRadius: 1, ...props.style, }}
     >
        <Text style={{ color: 'white', fontSize: 11, textAlign: 'center', }} > { `${props.title}`.toLowerCase() } </Text>
    </TouchableHighlight>
)

const Hr = props => (<View style={ style.hr } ></View>)


const style = {
    container: {
        padding: 20,
        backgroundColor: '#FFFFFF'
    },
    header: {
        fontWeight: '600', 
        padding: 0,
    }, 
    subtitle: {

    },
    hr: {
        height: 2,
        backgroundColor: '#bbb',
        width: '100%',
        marginVertical: 30,
    }
}
