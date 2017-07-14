import {
	StyleSheet, 
	View, 
	Text, 
	Image,
	TouchableHighlight 
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SetResult as setRightAction } from '../redux/modules/ImgResult';
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
    width: 100,
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
		this.state = {
	  	isSubmit:false,
		}
	}
	render(){
		const { setRight } = this.props;
		return (
		<TouchableHighlight
			style={this.state.isSubmit ? styles.confirm : styles.confirm1}
			onPress={
					()=>{
						this.setState({isSubmit:true});
						setRight(0);
						
					}
			}
			onPressOut={()=>(this.setState({isSubmit:false}))}
			>
			<Text style={{ color: '#fff', fontSize: 18 }}>submit</Text>	
		</TouchableHighlight>)
	}
}
export default connect(null,
			{setRight:setRightAction})(SubmitButton);