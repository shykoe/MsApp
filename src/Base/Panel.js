import {
	StyleSheet, 
	View, 
	Text, 
	Image,
	TouchableHighlight 
} from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ResultMsg from 'Base/Result';
class Panel extends Component{
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount(){
		const { className } = this.props;
		fetch("http://172.18.32.202:8000/api/attrs?class="+className)
		.then(response => response.json())
		.then(data => this.setState({attrs:data}))
	}
	render(){
		console.log(this.state.attrs);
		if(this.state.attrs){
			return(
					<View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center', flexDirection:'row',  flexWrap: 'wrap' }}>					
						{this.state.attrs.map(item=><Text>{item}</Text>)}
							<ResultMsg/>
					</View>
				)
		}
		return (
				<View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center', flexDirection:'row',  flexWrap: 'wrap' }}>					
					
						<ResultMsg/>
				</View>
			)
	}
}
export default Panel;