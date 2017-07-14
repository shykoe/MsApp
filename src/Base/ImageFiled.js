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
import { PicPress as PicPressAction , PicRelease as PicReleaseAction } from '../redux/modules/Actions'
class ImageFiled extends Component{
	constructor(props) {
		super(props);
		const { size } = props
		this.state = {
			size:size
		};
	}
	componentDidMount(){
		const { imgURL } = this.props;
		Image.getSize(imgURL,
				(width, height)=>(this.setState({imgSize:{width: width, height: height}})),
				(error)=>(this.setState({imgSize:{width: 100, height: 100}}))
				);
	}
	render(){
		const { imgURL, PressId, Result, id } = this.props;
		if(Result.Result && Result.picid === id){
			return (
					<View  animation='tada' >
					<TouchableHighlight 
					onPressIn={()=>{ this.setState((prevState)=>( { imgSize:prevState.size, size:prevState.imgSize } )); this.props.PicPress(imgURL); } }
					onPressOut={()=>{ this.setState( (prevState)=>( { imgSize:prevState.size, size:prevState.imgSize } ) ); this.props.PicRelease(); } }
					style={{
						margin: 5
					}}
					>
						<Image source={{uri:imgURL}} 
						style={ PressId.ispressed ? (PressId.picid === imgURL ? this.state.size : {width:0, height:0}) :
								this.state.size}
						 />
						
					</TouchableHighlight>
					</View>

				)
		}
		else if(Result.Result && Result.picid !== id){
			return (
					<View  animation='bounceOut' >
					<TouchableHighlight 
					onPressIn={()=>{ this.setState((prevState)=>( { imgSize:prevState.size, size:prevState.imgSize } )); this.props.PicPress(imgURL); } }
					onPressOut={()=>{ this.setState( (prevState)=>( { imgSize:prevState.size, size:prevState.imgSize } ) ); this.props.PicRelease(); } }
					style={{
						margin: 5
					}}
					>
						<Image source={{uri:imgURL}} 
						style={ PressId.ispressed ? (PressId.picid === imgURL ? this.state.size : {width:0, height:0}) :
								this.state.size}
						 />
						
					</TouchableHighlight>
					</View>

				)
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
					<Image source={{uri:imgURL}} 
					style={ PressId.ispressed ? (PressId.picid === imgURL ? this.state.size : {width:0, height:0}) :
							this.state.size}
					 />
					
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