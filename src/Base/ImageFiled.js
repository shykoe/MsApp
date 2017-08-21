import {
	StyleSheet,
	Text, 
	Image,
	TouchableHighlight,
	ActivityIndicator
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextImage } from '../redux/modules/ind';
import { View } from 'react-native-animatable';
import { PicPress as PicPressAction , PicRelease as PicReleaseAction } from '../redux/modules/Actions';

import * as Progress from 'react-native-progress';
class ImageFiled extends Component{
	constructor(props) {
		super(props);
		const { size } = props
		this.state = {
			size:size,
			loading:false,
			progress:0.,
		};
	}
	componentDidMount(){
		const { imgURL } = this.props;
		Image.getSize(imgURL,
				(width, height)=>(this.setState({imgSize:{width: width, height: height}})),
				(error)=>(this.setState({imgSize:{width: 100, height: 100}}))
				);
	}
	handleLoadStart = (event)=>{
		this.setState({loading:true, progress:0. });
	}
	handleProgress = event =>{
		const progress = event.nativeEvent.loaded / event.nativeEvent.total
		if(progress !== this.state.progress && this.state.progress !== 1){
			this.setState({
				loading:progress<1,
				progress:progress,
			})
		}
	}
	handleLoad = event=>{
		this.setState({loading:false,progress:1.})
	}
	render(){
		const { imgURL, PressId, Result, id } = this.props;
		const { loading, progress } = this.state;
		let indicator;
		if( loading && (progress<1.)){
			indicator = 
					(<Progress.Pie
						 size={30} 
						 progress={progress}
						 />)
		}
		return (
				<View  animation='lightSpeedIn' >
				<TouchableHighlight 
				onPressIn={()=>{ this.setState((prevState)=>( { imgSize:prevState.size, size:prevState.imgSize } )); this.props.PicPress(imgURL); } }
				onPressOut={()=>{ this.setState( (prevState)=>( { imgSize:prevState.size, size:prevState.imgSize } ) ); this.props.PicRelease(); } }
				style={{
					margin: 5
				}}
				>
				<View style={{...this.state.size, justifyContent: 'center',alignItems: 'center',}}>
					<Image source={{uri:imgURL}} 
					style={  StyleSheet.absoluteFill}
					onLoadStart={this.handleLoadStart}
					onProgress={this.handleProgress}
					onLoad={this.handleLoad}
					 />
					{ 
						indicator
					}
				</View>
				</TouchableHighlight>
				
				</View>

			) 
	}
}
export default connect(
	(state,props) => ({
    PressId: state.PicAction,
    Result: state.ImgResult,
  }),{PicPress:PicPressAction, PicRelease: PicReleaseAction}
	)(ImageFiled)