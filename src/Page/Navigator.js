import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TabNavigator from 'react-native-tab-navigator';
import LearnPageList from 'Page/LearnList';
import SettingPage from 'Page/SettingPage';
import GamePageList from 'Page/GameList';
import { tapOptionPressed } from '../redux/modules/tapOption';
import { userCheck as userCheckAction } from '../redux/modules/Auth';
import config from '../config';
const learnTab = 'Learn';
const gameTab = 'Game';
const setTab = 'Set';
const titleDict = {
  learnTab: '学习',
  gameTab: '游戏',
  setTab: '设置'
};
class TapNavigator extends Component {
	constructor(prop) {
		super(prop);
		this.state = {
		};
	}
    componentWillMount() {
        this.checkAuthentication(this.props);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.location !== this.props.location) {
            this.checkAuthentication(nextProps);
        }
    }
    checkAuthentication(params) {
        const { userCheck, userName} = params;
        if(userName === null){
        	Actions.LoginPage({title:'Login', type: 'replace'})
        }
    }
  	componentDidMount(){
  		const { userCheck, userName} = this.props;
  		if(userName !== null){
	  		fetch(`${config.serverAdress}/api/classname`).
	  		then(response => response.json()).then(data=>this.setState({game:data.game,learn:data.learn}));
	  	}
  	}
	render(){
		const {  certainTapOptionPressed, pressedOption } = this.props;
		const { game, learn } = this.state;
		console.log(this.state);
		// const game = this.state.game ? this.state.game : [];
		// const learn = this.state.learn ? this.state.learn : [];
		return(
			<View style={{ flex: 1 }}>
				<TabNavigator>
		          <TabNavigator.Item
		            title="Game"
		            titleStyle={{ marginTop: 0 }}
		            selectedTitleStyle={{ color: '#fc343b' }}
		            renderIcon={() => <Image source={require('../res/game.png')} />}
		            renderSelectedIcon={() =>  <Image source={require('../res/game.png')} />}
		    		selected={pressedOption === gameTab}
		    		onPress={() => certainTapOptionPressed(gameTab)}
		            >
		           <GamePageList data={game} />
		          </TabNavigator.Item>

		          <TabNavigator.Item
		            title="Learning"
		            titleStyle={{ marginTop: 0 }}
		            selectedTitleStyle={{ color: '#fc343b' }}
		            renderIcon={() => <Image source={require('../res/learn.png')} />}
		            renderSelectedIcon={() => <Image source={require('../res/learn.png')} />}
		    		selected={pressedOption === learnTab}
		    		onPress={() => (certainTapOptionPressed(learnTab))}
		            >
		           <LearnPageList/>
		          </TabNavigator.Item>
		          <TabNavigator.Item
		            title="Setting"
		            titleStyle={{ marginTop: 0 }}
		            selectedTitleStyle={{ color: '#fc343b' }}
		            renderIcon={() => <Image source={require('../res/set.png')} />}
		            renderSelectedIcon={() =>  <Image source={require('../res/set.png')} />}
		    		selected={pressedOption === setTab}
		    		onPress={() => certainTapOptionPressed(setTab)}
		            >
		           <SettingPage/>
		          </TabNavigator.Item>
				</TabNavigator>
			</View>
		)
	}

}
export default connect(
	(state)=>({pressedOption: state.tapOption.pressedOption,
			   userName:state.user.userName}),
	(dispatch)=>({
		certainTapOptionPressed:(pressedTapOption) => {
			dispatch(tapOptionPressed(pressedTapOption));
			Actions.refresh({title: titleDict[pressedTapOption]});
		},
		userCheck:userCheckAction
	})
 )(TapNavigator);
