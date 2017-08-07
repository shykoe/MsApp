import React, { Component } from 'react';
import { View, Text, SectionList, WebView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ListItem from 'Base/Item';
import DrawComponent from 'Base/DrawComponent';
export default class ScroePage extends Component {
  render() {
    return (
    	<View>
      <View style={{width:500, height:1000}}>
        <DrawComponent/>
      </View>
      </View>
    )
  }
}