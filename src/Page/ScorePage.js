import React, { Component } from 'react';
import {
	StyleSheet, 
	View, 
	Text, 
	Image,
	TouchableHighlight 
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import ListItem from 'Base/Item';
import { connect } from 'react-redux';
import {
  MKColor,
  MKSlider,
  MKRangeSlider,
  setTheme,
  MKButton,
} from 'react-native-material-kit';
import { GameStart as GameStartAction } from '../redux/modules/Actions';
import { scoreReset as scoreResetAction } from '../redux/modules/score';
import Ranking  from 'Base/Ranking';
import config from '../config';
const Re2Menu = new MKButton.Builder()
				.withBackgroundColor(MKColor.Orange)
				.withText('Menu')
				.build();
const NextTurn = new MKButton.Builder()
				.withBackgroundColor(MKColor.Teal)
				.withText('NextTurn')
				.build();
class ScroePage extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      data:[]
    };
  }
  componentDidMount(){
    const { userName, score } = this.props;
    if(userName !== null && score !== 0){
      fetch(`${config.serverAdress}/api/randing?userName=${userName}&score=${score.score}`).
      then(response => response.json()).then(data=>this.setState({data:data}));
    }

  }
  __NextTurn = () => {

    Actions.MainPage({type: 'replace'});

    this.props.gameStart('Animal');
  };
  render() {
  	const { score } = this.props;
    const { data } = this.state;
    return (
      <Image  style={{ flex: 1, width: undefined, height: undefined ,resizeMode: 'stretch' }} source={require('../res/mainImg2.jpg')} >
          <View style={{ flex: 0.7,justifyContent: 'center', alignItems: 'center',
                marginBottom:0 }}>
          <View
          style={{flex: 0.3, justifyContent: 'center', alignItems: 'center', flexDirection:'row',  flexWrap: 'wrap'}}
          >
          <Text style={{ fontSize: 35,fontWeight: 'bold' }} >you scored
          <Text style={{ fontSize: 35,fontWeight: 'bold',color:'cornflowerblue' }} > {score.score} </Text>
          points!
          </Text>
          </View>
          <Ranking data={data}/>
          </View>
          <View
          style={{flex: 0.3, justifyContent: 'center', alignItems: 'center', flexDirection:'row',  flexWrap: 'wrap'}}
          >
          <Re2Menu
          style={{alignItems: 'center',width: 90,height: 40, justifyContent: 'center'}}
          onPress={()=>{ Actions.Navigator({type: 'popAndReplace'});}}
          />
          <NextTurn
          style={{alignItems: 'center',width: 90,height: 40, justifyContent: 'center'}}
          onPress={()=>(this.__NextTurn())}
          />
          </View>
      </Image>
    )
  }
}
export default connect((state,props)=>({score:state.score,userName:state.user.userName}),
  {gameStart:GameStartAction, scoreReset:scoreResetAction})(ScroePage);