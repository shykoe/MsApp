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
class GamePageList extends Component {


  render() {
    const { data } = this.props;
    //console.log(data);
    if(data === undefined){
      return (<View></View>)
    }
    return (
      <View style={styles.container}>
        <FlatList
		  	data={data}
	       	renderItem={({item}) => <ListItem key={item.key} title={item.title}
	     				/>}
		/> 
      </View>
    );
  }
}
export default GamePageList;