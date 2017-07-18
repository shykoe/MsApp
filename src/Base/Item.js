import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import { Actions } from 'react-native-router-flux';

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

export default class ListItem extends Component {

  _handleClick = () => {
    const { url, postHash, loadPost } = this.props;
  };

  render() {
    const { title, url, clicks, date } = this.props;
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
              <View style={{ flex: 2.5, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <Text style={styles.rowText}>
                  点击数: { clicks }
                </Text>
              </View>
              <View style={{ flex: 4 }}>
                <Text style={[styles.rowText, { textAlign: 'right' }]}>
                  { date }
                </Text>
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
