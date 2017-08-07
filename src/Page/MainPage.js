import React, { Component } from 'react';
import {
	StyleSheet, 
	View, 
	Text, 
	Image,
	TouchableHighlight 
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  MKProgress,
  MKSpinner,
  MKButton,
  MKColor
} from 'react-native-material-kit';
import TinyButton from 'Base/TinyButton';
import ImageFiled from 'Base/ImageFiled';
import Timer from 'Base/Timer';
import { ResultRight as setRightAction } from '../redux/modules/ImgResult';
import SubmitButton from 'Base/SubmitButton';
import ResultMsg from 'Base/Result';
import DrawComponent from 'Base/DrawComponent';
import Panel from 'Base/Panel';
const RaisedButton = MKButton.coloredButton()
  .build();
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
const SingleColorSpinner = MKSpinner.singleColorSpinner()
  .withStyle({width:22,height:22})
  .build();
class MainPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clear:1
		}

	}
	render() {
		const ButtonList = ['Mouth', 'Hair', 'Sail', 'Metal', 'Feather', 'Wool']
		const  { className, ind }  = this.props;
		console.log(ind);
		return (

		<Image  style={{ flex: 1, width: undefined, height: undefined ,resizeMode: 'stretch' }} source={require('../res/mainImg2.jpg')} >
				<Timer sec={30} />
				<View style={{justifyContent: 'center', alignItems: 'center', flex: 1,marginTop:10 }}>
					<View style={{justifyContent: 'center', alignItems: 'center', flex: 1,flexDirection:'column' }}>
						<Text style={{textAlign : 'right', fontSize :25, fontWeight :'bold'}}>{className[ind]}</Text>
						      <View style={{width:310, height:310}}>
						        <DrawComponent clear={this.state.clear}/>
						      </View>
						      <RaisedButton
						      style={{width: 40,height: 40,margin:4,marginBottom:20,justifyContent: 'center',alignItems: 'center',borderRadius: 10, alignSelf:'flex-end'}}
						      backgroundColor={MKColor.Silver}
						      onPress={()=>(this.setState( (preState)=>( { clear: preState.clear + 1 } ) ))}
						      >
						      <Text>clear</Text>
						      </RaisedButton>
					</View>

					<Panel className={className}/>
					<SubmitButton/>

				</View>
			
			</Image>
		)

	}
}
export default  connect(
	(state,props) => ({
    ind:state.ind,
    className:state.imgList
  }),null
  	)(MainPage)