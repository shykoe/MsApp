import {
	StyleSheet,
	Image,
	TouchableHighlight 
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAnimatableComponent, View, Text } from 'react-native-animatable';
import { timerTick as timerTickAction, timerEnd as timerEndAction } from '../redux/modules/Timer';
class Timer extends Component{
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		const { timerTick } = this.props;
		this.timerChange = setInterval(
			() => { timerTick() },
			1000
		);
	}
	componentWillUnmount() {
    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    	this.timerChange && clearTimeout(this.timerChange);
  	}
  	componentDidUpdate(prevProps, prevState){
  		const { sec, timerEnd } = prevProps;
  		if(sec <= 1000){
			timerEnd();
  		}
  	}
	render(){
		const { sec, timerEnd } = this.props;
		return (
			<View  animation="tada" >
			<Text style={{textAlign : 'right', fontSize :15, fontWeight :'bold'}} >
			{`Time Remaining: ${sec / 1000} s`}
			</Text>
			</View>
			)
	}
}
export default connect(
(state,props) => ({
    sec: state.Timer
  }),{timerTick:timerTickAction, timerEnd:timerEndAction})(Timer)