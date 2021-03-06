import {
	StyleSheet, 
	View, 
	Text, 
	Image,
	TouchableHighlight 
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  MKColor,
  MKSlider,
  MKRangeSlider,
  setTheme,
  MKButton,
} from 'react-native-material-kit';
import { PicPress as PicPressAction , PicRelease as PicReleaseAction } from '../redux/modules/Actions'
import { SetResult as setRightAction } from '../redux/modules/ImgResult';
import { Submit as SubmitAction } from '../redux/modules/Actions' 
const ColoredRaisedButton = MKButton.coloredButton()
  .withText('Submit')
  .build();
const styles = StyleSheet.create({
  confirm: {   
		width: 100,
	    height: 44,
	    backgroundColor: '#d9d9d9',
	    marginTop: 12,
	    justifyContent: 'center',
	    alignItems: 'center',
	    alignSelf:'flex-end',
	    borderRadius: 10
	},
  confirm1: {
    width: 600,
    height: 44,
    backgroundColor: '#FF3133',
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'flex-end',
     borderRadius: 10
  }
});
class SubmitButton extends Component{
	constructor(props) {
		super(props);
	}
	handleSubmit = ()=>{
		const { attrs } = this.props;
		if(Object.keys(attrs).reduce((p,i)=>(p||attrs[i]!==0), false)){
			
			this.props.Submit();
		}
	}
	render(){
		const { setRight, result,isSubmit } = this.props;
		if(!result.Result && !isSubmit){
			return (
			<ColoredRaisedButton  
			onPress={this.handleSubmit}
			
			/>)
		}else{
			return (
			<ColoredRaisedButton  
			
			
			/>)
		}
		
	}
}
export default connect(
	(state,props)=>({attrs:state.attrs,result:state.ImgResult,isSubmit:state.PicAction.isSubmit}), {Submit:SubmitAction})(SubmitButton);