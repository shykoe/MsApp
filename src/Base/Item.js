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
    paddingTop: 20,
    paddingBottom: 7,
    backgroundColor: '#ffffff'
  },
  innerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
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
    Actions.MainPage();
    gameStart(this.props.title);
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
              <View style={{ flex: 0.5 }}/>
            </View>
            <View style={styles.innerRow}>
              <View style={{ flex: 0.5 }}/>
              <View style={{ flex: 4 }}>
              </View>
              <View style={{ flex: 0.5 }}/>
            </View>
          </View>
        </TouchableHighlight>
        <View style={styles.separator} />
      </View>
    );
  }
}
export default connect(null,{gameStart:GameStartAction})(ListItem);