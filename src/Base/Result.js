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
		if(Result.Result && Action.msg){
			return (
					<View  animation='lightSpeedIn' >
						<Text style={{ fontSize: 30 }} >Oh I know , it's 
						<Text style={{ fontSize: 40,fontWeight: 'bold',color:'cornflowerblue' }} > {Action.msg}</Text>
						</Text>
						

					</View>

				)
		}
		else{
			return(
					<View  animation='lightSpeedIn' >

					</View>
				)
		}
	}
}
export default connect(
	(state,props) => ({
    Action: state.PicAction,
    Result: state.ImgResult,

  }),
	)(ResultMsg)