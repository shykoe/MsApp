import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { MKButton } from 'react-native-material-kit';
import { GameStart as GameStartAction } from '../redux/modules/Actions';
const ColoredRaisedButton = MKButton.coloredButton()
  .withText('Start')
  .build();

const styles = StyleSheet.create({
  field: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 19,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    height: 47,
    alignItems: 'center',
  },
  marginTop: {
    marginTop: 20,
  },
  controls: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirm: {
    width: 280,
    height: 44,
    backgroundColor: '#FF3133',
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  confirm1: {
    width: 280,
    height: 44,
    backgroundColor: '#d9d9d9',
    marginTop: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  addrStyle: {
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 0
  },
  imagePickerStyle: {
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 8
  }
});
class HomePage extends Component {
  render() {
    const { gameStart } = this.props;
    return (
    	<View style={{ flex: 1 }}>
	      <View style={{ justifyContent: 'center', alignItems: 'center',
	              flex: 26, backgroundColor: 'rgb(255,255,255)' }}>
	        <Text style={{ fontSize: 30,fontWeight: 'bold', }} >Quick Describe</Text>
	        
	      </View>
	      

        <ColoredRaisedButton onPress={()=>{ Actions.MainPage(); gameStart();}} />
		</View>
    )
  }
}
export default connect(null,{gameStart:GameStartAction})(HomePage);