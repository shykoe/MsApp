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
	  	isLoading: true
		}

	}
	componentDidMount(){
		fetch('http://172.18.32.202:8000/imgelist')
		.then((response)=>response.json()).then((responseJson)=>{
			this.setState({isLoading:false, imageList:responseJson,ind:0})
		})
	}
	render() {
		const ButtonList = ['0', '1', '2', '3', '4', '5', '6', '7', '8']
		const { ind, setRight } = this.props;
		if(!this.state.isLoading){
			return (
				<View style={{ flex: 1 }}>
					<Timer sec={30} />
					<View style={{justifyContent: 'center', alignItems: 'center', flex: 2 }}>
						<View style={{justifyContent: 'center', alignItems: 'center', flex: 3,flexDirection:'row',  flexWrap: 'wrap' }}>
							<ImageFiled 
							imgURL={`http://172.18.32.202:8000/image/${this.state.imageList[ind]}`}
							id={0} 
							size={{width:150,height:150}}
							/>
							<ImageFiled 
							imgURL={`http://172.18.32.202:8000/image/${this.state.imageList[ind+1]}`}
							id={1} 
							size={{width:150,height:150}}
							/>
							<ImageFiled 
							imgURL={`http://172.18.32.202:8000/image/${this.state.imageList[ind+2]}`}
							id={2} 
							size={{width:150,height:150}}
							/>
							<ImageFiled 
							imgURL={`http://172.18.32.202:8000/image/${this.state.imageList[ind+4]}`}
							id={3} 
							size={{width:150,height:150}}
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
    PressId: state.PicAction
  }),{setRight:setRightAction}
	)(MainPage)