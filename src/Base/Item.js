import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { GameStart as GameStartAction } from '../redux/modules/Actions';
const styles = StyleSheet.create({
  row: {
    height: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 40  ,
    paddingBottom: 0,
    backgroundColor: '#ffffff'
  },
  innerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
    fontWeight :'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center'
  },
  rowText: {
    fontSize: 16,
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#999999',
  },
});

class ListItem extends Component {

  _handleClick = () => {
    const { gameStart } = this.props;
    gameStart(this.props.title);
    Actions.MainPage();
    
  };

  render() {
    const { title } = this.props;
    return (
      <View>
        <TouchableHighlight onPress={this._handleClick} underlayColor={'transparent'}>
          <View style={styles.row}>
            <View style={styles.innerRow}>
              <View style={{ flex: 0.5 }}/>
              <View style={{ flex: 6.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.titleText}>
                  { title }
                </Text>
              </View>
             
            </View>

          </View>
        </TouchableHighlight>
        <View style={styles.separator} />
      </View>
    );
  }
}
export default connect(null,{gameStart:GameStartAction})(ListItem);