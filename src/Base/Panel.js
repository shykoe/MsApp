import {
	StyleSheet, 
	View, 
	Text, 
	Image,
	TouchableHighlight 
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import TinyButton from 'Base/TinyButton';
import ResultMsg from 'Base/Result';
import {
  MKColor,
  MKSlider,
  MKRangeSlider,
  setTheme,
  MKButton,
} from 'react-native-material-kit';
const UpPage = new MKButton.Builder()
				.withBackgroundColor(MKColor.Teal)
				.withText('PageUp')
				.build();
const DnPage = new MKButton.Builder()
				.withText('PageDn')
				.withBackgroundColor(MKColor.Teal)
				.build();
const isEmpty = (item)=>(
	Object.keys(item).length === 0
	);
class Panel extends Component{
	constructor(props) {
		super(props);
		this.state = {
			ind:0
		}
	}
	nextPage = ()=>{
		const { Attrs } = this.props;
		const { ind } = this.state;
		if(Object.keys(Attrs).length > 6 && ind +6 < Object.keys(Attrs).length){
			this.setState((preState,props)=>({ind:preState.ind+6}));
		}
	};
	prePage = ()=>{
		const { Attrs } = this.props;
		if(Object.keys(Attrs).length > 6){
			this.setState((preState,props)=>({ind:0}));
		}
	}
	componentWillReceiveProps(nextProps){
		this.setState({ind:0});
	}
	render(){
		const { Attrs, className } = this.props;
		const { ind } = this.state;
		if(isEmpty(Attrs) || ind === undefined){
			return null;
		}
		return (
			<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection:'row',  flexWrap: 'wrap' }}>
				{(!this.props.PressId.ispressed &&  !this.props.Result.Result ) && 

					<TouchableHighlight
					style={{marginLeft:10,marginTop:50, width: 25,height: 25,alignSelf:'center',justifyContent: 'center', alignItems: 'center'}}
					onPress={()=>(this.prePage())}
					>
					<Image
					source={require('../res/ArrUp.png')}
					style={{transform:[{rotate: '-90deg'}]}}
						/>
					
					
					</TouchableHighlight>
				}
				
				<View style={{  width: 400,flex: 0.7,justifyContent: 'center', flexDirection:'row',  flexWrap: 'wrap' }} >
						{ (!this.props.PressId.ispressed &&  !this.props.Result.Result ) && 
							Object.keys(Attrs).slice( ind,ind + 6).map((item)=>(<TinyButton key={item} className={className} innerText={item} />))
							}
							<ResultMsg/>
				</View>
				
				{(!this.props.PressId.ispressed &&  !this.props.Result.Result ) && 
					<TouchableHighlight
					style={{marginRight:10,marginTop:50, width: 25,height: 25,alignSelf:'center',justifyContent: 'center', alignItems: 'center'}}
					onPress={()=>(this.nextPage())}
					>
					<Image
					source={require('../res/ArrDn.png')}
					style={{transform:[{rotate: '-90deg'}]}}
						/>
					</TouchableHighlight>
				}
				
			</View>
		)
	}
}
export default  connect(
	(state,props) => ({
    PressId: state.PicAction,
    Result:state.ImgResult,
    Attrs:state.attrs
  }),null
	)(Panel)