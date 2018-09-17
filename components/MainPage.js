import React, { Component } from 'react';
import {  View, Text, FlatList } from 'react-native';

import FullImage from "./widgets/FullImage";
import CardItem from "./widgets/CardItem";
import Header from "./widgets/Header";

export default class MainPage extends Component {

  state = {
    data: [
      {
        _id: '15698qsfqs454',
        img_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg',
        title: 'Taj is in a stoorme of actions!',
        description: 'lorem ipsum dolor sit amet amek a winatha azeka anruh anida ur ...',
        author: 'Siemah lsidem',
        author_img: 'https://yt3.ggpht.com/a-/AJLlDp1_MHMtusDjxgzXqTdY7ZwBmj2d3Rn3Pmuh6w=s88-mo-c-c0xffffffff-rj-k-no',
      },
      {
        _id: '15dsd8qsfsdfqs454',
        img_src: 'http://septmerveillesdumonde.com/images/le-taj-mahal-m.jpg',
        title: 'Taj is in a stoorme of actions!',
        description: 'lorem ipsum dolor sit amet amek a winatha azeka anruh anida ur ...',
        author: 'Siemah lsidem',
        author_img: 'https://yt3.ggpht.com/a-/AJLlDp1_MHMtusDjxgzXqTdY7ZwBmj2d3Rn3Pmuh6w=s88-mo-c-c0xffffffff-rj-k-no',
      },
      {
        _id: '15698sdfsdqsfqs454',
        img_src: 'http://d251sbrcpscd6m.cloudfront.net/assets/files/3201/ticketsinfo.400x233.jpg',
        title: 'Taj is in a stoorme of actions!',
        description: 'lorem ipsum dolor sit amet amek a winatha azeka anruh anida ur ...',
        author: 'Siemah lsidem',
        author_img: 'https://yt3.ggpht.com/a-/AJLlDp1_MHMtusDjxgzXqTdY7ZwBmj2d3Rn3Pmuh6w=s88-mo-c-c0xffffffff-rj-k-no',
      }, 
      {
        _id: '1569s454',
        img_src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Taj_Mahal_%28Edited%29.jpeg/1200px-Taj_Mahal_%28Edited%29.jpeg',
        title: 'Taj is in a stoorme of actions!',
        description: 'lorem ipsum dolor sit amet amek a winatha azeka anruh anida ur ...',
        author: 'Siemah lsidem',
        author_img: 'https://yt3.ggpht.com/a-/AJLlDp1_MHMtusDjxgzXqTdY7ZwBmj2d3Rn3Pmuh6w=s88-mo-c-c0xffffffff-rj-k-no',
      },
      {
        _id: '15dsd8qsfsdfqffffs454',
        img_src: 'http://septmerveillesdumonde.com/images/le-taj-mahal-m.jpg',
        title: 'Taj is in a stoorme of actions!',
        description: 'lorem ipsum dolor sit amet amek a winatha azeka anruh anida ur ...',
        author: 'Siemah lsidem',
        author_img: 'https://yt3.ggpht.com/a-/AJLlDp1_MHMtusDjxgzXqTdY7ZwBmj2d3Rn3Pmuh6w=s88-mo-c-c0xffffffff-rj-k-no',
      },
      {
        _id: '15698sdfdddsdqsfqs454',
        img_src: 'http://d251sbrcpscd6m.cloudfront.net/assets/files/3201/ticketsinfo.400x233.jpg',
        title: 'Taj is in a stoorme of actions!',
        description: 'lorem ipsum dolor sit amet amek a winatha azeka anruh anida ur ...',
        author: 'Siemah lsidem',
        author_img: 'https://yt3.ggpht.com/a-/AJLlDp1_MHMtusDjxgzXqTdY7ZwBmj2d3Rn3Pmuh6w=s88-mo-c-c0xffffffff-rj-k-no',
      }
    ]
  }
  
  _renderItem = ({ item, index} ) => <CardItem item={ item } key={ item._id} />

  render() {
    return (
      <View style={{flex: 1}} >
        <FullImage source={{ uri: 'http://tornedalen.se/wp-content/uploads/revslider/zephyr-main/gaussian-blur2-600x400.jpg' }} />
        <Header />          
        <View style={{flex: 1, marginHorizontal: 15}}>
          <FlatList
            data={this.state.data}
            renderItem={this._renderItem}
          // style={{justi: 'center'}}  
          />
        </View>
      </View>
    );
  }
}
