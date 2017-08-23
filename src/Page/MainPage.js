import React, { Component } from 'react';
import {
	StyleSheet, 
	View, 
	Text, 
	Image,
	TouchableHighlight,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
  MKProgress,
  MKSpinner,
  MKButton
} from 'react-native-material-kit';
import TinyButton from 'Base/TinyButton';
import ImageFiled from 'Base/ImageFiled';
import Timer from 'Base/Timer';
import { ResultRight as setRightAction } from '../redux/modules/ImgResult';
import { fetchAttrs as fetchAttrsAction } from '../redux/modules/Attrs';
import SubmitButton from 'Base/SubmitButton';
import ResultMsg from 'Base/Result';
import Panel from 'Base/Panel';
import config from '../config';
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
		}

	}

	render() {
		const ButtonList = ['Mouth', 'Hair', 'Sail', 'Metal', 'Feather', 'Wool']
		const { ind, setRight, imageList } = this.props;
		
		if( imageList.length > 0 ){
			return (

			<Image  style={{ flex: 1, width: undefined, height: undefined ,resizeMode: 'cover' }} source={require('../res/mainImg2.jpg')} >
					<Timer sec={30} />
					<View style={{justifyContent: 'center', alignItems: 'center', flex: 1 }}>

						<View style={{justifyContent: 'center', alignItems: 'center', flex: 1,flexDirection:'column', marginTop:15 }}>

							<Text style={{textAlign : 'right', fontSize :25, fontWeight :'bold'}}>{imageList[ind] && imageList[ind].split('_')[0] + '(' + (ind + 1) +'/'+ imageList.length+ ')'}</Text>
							<ImageFiled 
							imgURL={`${config.imageAdress}/image/${imageList[ind]}`}
							id={0} 
							size={{width:250,height:250}}
							/>

						</View>
            <View style={{height:300,width:Dimensions.get('window').width}}>
						<Panel className={imageList[ind].split('_')[0]} />
						</View>

					</View>
				<SubmitButton/>
				</Image>
			)
		}else{
			return null;
		}
	}
}
export default  connect(
	(state,props) => ({
    ind: state.ind.ind,
    PressId: state.PicAction,
    imageList:state.imgList,
    Result:state.ImgResult
  }),{setRight:setRightAction,fetchAttrs:fetchAttrsAction}
	)(MainPage)