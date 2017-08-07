import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  WebView
} from 'react-native';
import Paint from './paint';
class DrawComponent extends Component{
	handleMessage = (evt) =>{
		const message = evt.nativeEvent.data;
		console.log(message);

	}
	clearCanvas = ()=>{
		const data = {
		    command: 'clear'
		};
		this.webview.postMessage(JSON.stringify(data));
	}
	componentWillReceiveProps(nextProps){
		const { clear } = this.props;
		this.clearCanvas();
	}
	render(){

		return(
			<WebView
	        source={{html:Paint}}
	        ref={w => this.webview = w}
	        javaScriptEnabled={true}
	        onMessage={this.handleMessage}
      		/>
	        
			)
	}
}
export default DrawComponent;