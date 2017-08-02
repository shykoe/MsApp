import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import ListItem from 'Base/Item';
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f1f1f1',
  }
});
const data=[
	{key:'123',title: 'aaaa',url:'http://www.material-ui.com/#/components/grid-list',clicks:123,},
	{key:'1231',title: 'a',url:'http://www.material-ui.com/#/components/grid-list',clicks:123,},
 ]
class LearnPageList extends Component {


  render() {
    return (
      <View style={styles.container}>
        <FlatList
		  	data={data}
	       	renderItem={({item}) => <ListItem key={item.key} title={item.title} url={item.url}
	          clicks={item.clicks} date={item.date} 
	     				/>}
		/> 
      </View>
    );
  }
}
export default LearnPageList;