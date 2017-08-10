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
import { changeAttrs } from '../redux/modules/Attrs';
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
    const { attrValue } = this.props;
    return (
      <View style={{marginBottom:2,justifyContent: 'center',alignItems: 'center'}}>
      <Text>
        {attrValue}
      </Text>
      </View>
    );
  }
}

class TinyButton extends Component{
	constructor(props) {
		super(props);
		this.state = {
		  	ButtonPressed:false
		}
	}
  componentWillMount(){
    const { value } = this.props;
    if(value>0){
      this.setState({ButtonPressed:true})
    }
  }
  handlePress = ()=>{
    const { ButtonPressed } = this.state;
    const { innerText } = this.props;
    if(ButtonPressed){
      this.props.dispatch(changeAttrs(innerText, 0));
      this.setState({ButtonPressed:false});
    }else{
      this.setState({ButtonPressed:true});
    }
  }
	render() {
		const { 
      innerText,
      setRight,
      value,
      chAttr
      } = this.props;
		return (
      <View style={{display:'flex',height:90}} >
        <View style={{marginTop: 0,height:40, marginBottom:5}}>
        {this.state.ButtonPressed &&
          <MKSlider 
          style={{margin: 0}}
          min={0}
          max={100}
          minValue={0}
          maxValue={100}
          value={value*100}
          onChange={(curValue) => this.refs.valueText.onChange(curValue.toFixed(2)/100.0)}
          onConfirm={(curValue)=> this.props.dispatch( changeAttrs(innerText,curValue.toFixed(2)/100.0 ))}
          />}
        {this.state.ButtonPressed &&<ValueText ref="valueText" attrValue={value}  attrName={innerText} initial="0" style={{margin: 0}} />}
        </View>
        <ColoredRaisedButton 
        style={{width: 90,height: 40,margin:4,justifyContent: 'center',alignItems: 'center',borderRadius: 10}}
        backgroundColor={this.state.ButtonPressed ? MKColor.Amber : MKColor.Silver }
        onPress={ this.handlePress }
        >
        <Text style={{fontSize :15, fontWeight :'bold'}}>{innerText}</Text>
        </ColoredRaisedButton>
      </View>
			)
	}
}
export default connect(
  (state,props)=>({
    value:state.attrs[props.innerText]
  }),null)(TinyButton)