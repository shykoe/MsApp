import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import TabNavigator from 'react-native-tab-navigator';
import LearnPageList from 'Page/LearnPage';
import { tapOptionPressed } from '../redux/modules/tapOption';
const learnTab = 'Learn';
const gameTab = 'Game';
const setTab = 'Set';
const titleDict = {
  learnTab: '学习',
  gameTab: '游戏',
  setTab: '设置'
};
class TapNavigator extends Component {
  static propTypes = {
    pressedOption: PropTypes.string,
  };
	render(){
		const {  certainTapOptionPressed, pressedOption } = this.props;
		return(
			<View style={{ flex: 1 }}>
				<TabNavigator>
		          <TabNavigator.Item
		            title="学习"
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
		            title="游戏"
		            titleStyle={{ marginTop: 0 }}
		            selectedTitleStyle={{ color: '#fc343b' }}
		            renderIcon={() => <Image source={require('../res/game.png')} />}
		            renderSelectedIcon={() =>  <Image source={require('../res/game.png')} />}
		    		selected={pressedOption === gameTab}
		    		onPress={() => certainTapOptionPressed(gameTab)}
		            >
		           <LearnPageList/>
		          </TabNavigator.Item>

		          <TabNavigator.Item
		            title="设置"
		            titleStyle={{ marginTop: 0 }}
		            selectedTitleStyle={{ color: '#fc343b' }}
		            renderIcon={() => <Image source={require('../res/set.png')} />}
		            renderSelectedIcon={() =>  <Image source={require('../res/set.png')} />}
		    		selected={pressedOption === setTab}
		    		onPress={() => certainTapOptionPressed(setTab)}
		            >
		           <LearnPageList/>
		          </TabNavigator.Item>
				</TabNavigator>
			</View>
		)
	}

}
export default connect(
	(state)=>({pressedOption: state.tapOption.pressedOption}),
	(dispatch)=>({
		certainTapOptionPressed:(pressedTapOption) => {
			dispatch(tapOptionPressed(pressedTapOption));
			Actions.refresh({title: titleDict[pressedTapOption]});
		}
	})
 )(TapNavigator);
