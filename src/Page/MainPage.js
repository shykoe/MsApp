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
  MKButton
} from 'react-native-material-kit';
import TinyButton from 'Base/TinyButton';
import ImageFiled from 'Base/ImageFiled';
import Timer from 'Base/Timer';
import { ResultRight as setRightAction } from '../redux/modules/ImgResult';
import SubmitButton from 'Base/SubmitButton';
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
		console.log(imageList);
		if( imageList.length > 0 ){
			return (
				<View style={{ flex: 1 }}>
					<Timer sec={30} />
					<View style={{justifyContent: 'center', alignItems: 'center', flex: 2 }}>
						<View style={{justifyContent: 'center', alignItems: 'center', flex: 3,flexDirection:'column' }}>
							<Text style={{textAlign : 'right', fontSize :15, fontWeight :'bold'}}>类别</Text>
							<ImageFiled 
							imgURL={`http://172.18.32.202:8000/image/${imageList[ind]}`}
							id={0} 
							size={{width:250,height:300}}
							/>

						</View>
						<View style={{ justifyContent: 'center', alignItems: 'center', flexDirection:'row',  flexWrap: 'wrap' }}>
						{ (!this.props.PressId.ispressed) && 
							ButtonList.map((item)=>(
								<TinyButton key={item}  imgList={this.state.imageList} innerText={item}/>
								))}
						</View>

						<SubmitButton/>

					</View>
				</View>
			)
		}else{
			return (
				<View style={{justifyContent: 'center', alignItems: 'center', flex: 1 }}>
					<SingleColorSpinner/>
				</View>
				)
		}
	}
}
export default  connect(
	(state,props) => ({
    ind: state.ind.ind,
    PressId: state.PicAction,
    imageList:state.imgList
  }),{setRight:setRightAction}
	)(MainPage)