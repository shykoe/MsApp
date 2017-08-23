import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Picker,
  Modal,
  TouchableHighlight
} from 'react-native';
import { connect } from 'react-redux';
const styles = StyleSheet.create({
  container: {
    
  }
});
class SettingPage extends Component {
	constructor(prop) {
		super(prop);
		this.state = {
			rounding:6,
			modalVisible: false,
		};
	}
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={{flexDirection:'row',  paddingTop: 40 ,paddingLeft:20 }} >
      	<Text style={{flex:0.5, alignSelf:'center',justifyContent: 'center', alignItems: 'center',fontSize: 18,fontWeight :'bold',}}>
      	Rounding
      	</Text>
	      <Picker
	      	style={{width:180}}
			  
			  onValueChange={(itemValue, itemIndex) => this.setState({rounding: itemValue})}>
			  <Picker.Item label="6" value={6} />
			  <Picker.Item label="10" value={10} />
			</Picker>
		</View>


        
      </View>
    );
  }
}
export default SettingPage;