import {
	StyleSheet,
	Text, 
	Image,
	TouchableHighlight 
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextImage } from '../redux/modules/ind';
import { View } from 'react-native-animatable';

class ResultMsg extends Component{
	constructor(props) {
		super(props);
	}

	render(){
		const { imgURL, Action, Result, id } = this.props;
		if(Result.Result && Action.msg && Result.isRight){
			return (
					<View  animation='lightSpeedIn' style={{ marginLeft: 20 }} >
						<Text style={{ fontSize: 30 }} >Oh I know , it's 
						<Text style={{ fontSize: 40,fontWeight: 'bold',color:'cornflowerblue' }} > {Action.msg + '\n'}</Text>
						 you got  
						 <Text style={{ fontSize: 40,fontWeight: 'bold',color:'cornflowerblue' }} > {Action.score + ' '}</Text>
						 points!
						</Text>
						

					</View>

				)
		}
		else if(Result.Result && Action.msg ){
			return (
					<View  animation='lightSpeedIn' style={{ marginLeft: 20 }} >
						<Text style={{ fontSize: 30 }} >emmmm ... I guess it's 
						<Text style={{ fontSize: 40,fontWeight: 'bold',color:'cornflowerblue' }} > {Action.msg}</Text>
						</Text>
						

					</View>

				)
		}
		else{
			return null;
		}
	}
}
export default connect(
	(state,props) => ({
    Action: state.PicAction,
    Result: state.ImgResult,

  }),
	)(ResultMsg)