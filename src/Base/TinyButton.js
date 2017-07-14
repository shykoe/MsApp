import {
	StyleSheet, 
	View, 
	Text, 
	Image,
	TouchableHighlight 
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { nextImage } from '../redux/modules/ind';
import { ResultRight as setRightAction } from '../redux/modules/ImgResult'
const styles = StyleSheet.create({
  field: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: 19,
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    height: 47,
    alignItems: 'center',
  },
  marginTop: {
    marginTop: 20,
  },
  controls: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirm: {
    width: 100,
    height: 44,
    backgroundColor: '#d9d9d9',
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  confirm1: {
    width: 100,
    height: 44,
    backgroundColor: '#FF3133',
    marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  addrStyle: {
    marginTop: 10,
    marginLeft: 5,
    marginBottom: 0
  },
  imagePickerStyle: {
    marginTop: 20,
    marginLeft: 5,
    marginBottom: 8
  }
});
class TinyButton extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  	submitButtonPressed:false
		}
	}
	render() {
		var { 
      handleSubmit,
      innerText, 
      nextImage,
      setRight,
      imgList
      } = this.props;
		return (
			<TouchableHighlight style={this.state.submitButtonPressed ? styles.confirm1 : styles.confirm}
				onPress={
          () => {
            this.setState( (preState)=>( { submitButtonPressed: !preState.submitButtonPressed } ));
                }
        }
			>
				<Text style={{ color: '#fff', fontSize: 18 }}>{innerText}</Text>
			</TouchableHighlight>
			)
	}
}
export default connect(null,{
  nextImage:nextImage,
})(TinyButton)