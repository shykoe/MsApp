import React, { Component } from 'react';
import {
	StyleSheet, 
	View, 
	Text, 
	Image,
	TouchableHighlight,
  TextInput,
  ToastAndroid 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ListItem from 'Base/Item';
import { connect } from 'react-redux';
import {
  MKColor,
  MKSlider,
  MKRangeSlider,
  setTheme,
  MKButton
} from 'react-native-material-kit';
import { login as LoginAction } from '../redux/modules/Auth';
const ColoredRaisedButton = MKButton.coloredButton()
  .withText('Login')
  .build();
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { userName:'',passWord:'' };
  }
  __Login = ()=>{
    const { Login } = this.props;
    const {userName, passWord} = this.state;
    if(userName ==='' || passWord === ''){
      ToastAndroid.show('帐号密码不能为空', ToastAndroid.SHORT);
    }
    Login(userName,passWord);
  }
  render() {
    return (
     
        <View style={{ flex: 1,flexDirection:'column' }}>
          <View style={{ flex: 0.1,justifyContent: 'center', alignItems: 'flex-end',flexDirection:'row',flexWrap: 'wrap' }}>
            <View  style={{justifyContent: 'center', alignItems: 'center', flexDirection:'row',flexWrap: 'wrap' }}>
              <Text style={{fontSize: 15,alignItems: 'center',marginLeft:30}}>
                UserName
                </Text>
          <TextInput
                style={{width:200,justifyContent: 'center',alignItems: 'center',textAlign:"center"}}
                onChangeText={(text) => this.setState({userName:text})}
                value={this.state.userName}
              />
            </View>
            </View>
          <View style={{ flex: 0.1,justifyContent: 'center', alignItems: 'flex-start',flexDirection:'row',flexWrap: 'wrap' }}>
            <View  style={{justifyContent: 'center', alignItems: 'center', flexDirection:'row',flexWrap: 'wrap' }}>
              <Text style={{fontSize: 15,alignItems: 'center',marginLeft:30}}>
                PassWord
                </Text>
          <TextInput
                style={{width:200,justifyContent: 'center',alignItems: 'center', textAlign:"center"}}
                onChangeText={(text) => this.setState({passWord:text})}
                secureTextEntry={true}
                value={this.state.passWord}
              />
            </View>
            </View>
            <ColoredRaisedButton onPress={()=> this.__Login()} />
          </View>
      
    )
  }
}
export default connect(null,{Login:LoginAction})(LoginPage);