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

import { SetResult as setRightAction } from '../redux/modules/ImgResult';

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
		<ColoredRaisedButton style={styles.confirm1} />
		)
	}
}
export default connect(null,
			{setRight:setRightAction})(SubmitButton);