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
import {
  MKColor,
  MKSlider,
  MKRangeSlider,
  setTheme,
  MKButton,
} from 'react-native-material-kit';
import { ResultRight as setRightAction } from '../redux/modules/ImgResult';
const ColoredRaisedButton = MKButton.coloredButton()
  .build();
const styles = StyleSheet.create({
  field: {
    flex: 4,
    //flexDirection: 'row',
    //paddingLeft: 19,
    //backgroundColor: '#fff',
    //borderColor: '#ddd',
    //borderStyle: 'solid',
    //borderBottomWidth: 1,
    //height: 47,
    //alignItems: 'center',
    flexWrap: 'wrap'
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
    //marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'flex-start',
    //borderRadius: 10,
  },
  confirm1: {
    width: 100,
    height: 44,
    backgroundColor: '#FF3133',
    //marginTop: 12,
    justifyContent: 'center',
    alignItems: 'center',
    //borderRadius: 10,
    alignSelf:'flex-end',
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

class ValueText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curValue: props.initial,
    };
  }

  onChange(curValue) {
    this.setState({curValue});
  }

  render() {
    return (
      <View style={{marginBottom:2,justifyContent: 'center',alignItems: 'center'}}>
      <Text>
        {this.state.curValue}
      </Text>
      </View>
    );
  }
}


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
      <View style={{display:'flex',height:80}} >
        <View style={{marginTop: 0,height:40, marginBottom:5}}>
        {this.state.submitButtonPressed &&
          <MKSlider 
          style={{margin: 0}}
          min={0}
          max={100}
          minValue={0}
          maxValue={100}
          onChange={(curValue) => this.refs.valueText.onChange(curValue.toFixed(2)/100.0)}
          />}
        {this.state.submitButtonPressed &&<ValueText ref="valueText"  initial="0" style={{margin: 0}} />}
        </View>
        <ColoredRaisedButton 
        style={{width: 100,height: 40,margin:4,justifyContent: 'center',alignItems: 'center'}}
        backgroundColor={this.state.submitButtonPressed ? MKColor.Amber : MKColor.Silver }
        onPress={()=>(this.setState( (preState)=>( { submitButtonPressed: !preState.submitButtonPressed } )))}
        >
        <Text>{innerText}</Text>
        </ColoredRaisedButton>
      </View>
			)
	}
}
export default connect(null,{
  nextImage:nextImage,
})(TinyButton)