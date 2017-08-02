import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Image
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
                flex: 0.2, backgroundColor: 'rgb(255,255,255)',marginBottom:20 }}>
          <Text style={{ fontSize: 40,fontWeight: 'bold',color:'cornflowerblue' }} >Quick Describe</Text>
          
        </View>
        <Image  style={{ flex: 1, width: undefined, height: undefined ,resizeMode: 'stretch',marginBottom:20 }} source={require('../res/startImg.png')} >
	      </Image>

        <ColoredRaisedButton onPress={()=>{ Actions.ScorePage();}} />
		</View>
    )
  }
}
export default connect(null,{gameStart:GameStartAction})(HomePage);