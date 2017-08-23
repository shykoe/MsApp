import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
class Ranking extends Component {

__renderList = (no, name, score, isSelf)=>{
	if(name === '...'){
		return(
	          <View key={no} style={{ justifyContent: 'center', alignItems: 'center', flexDirection:'row',marginLeft:20}} >
	          <View style={{ width:140,justifyContent: 'center', alignItems: 'center'}} >
	          <Text style={{ fontSize: 20,fontWeight: 'bold' }} >...</Text>
	          </View>
	          <View style={{ width:140,justifyContent: 'center', alignItems: 'center'}}>
	          <Text style={{ fontSize: 20,fontWeight: 'bold' }} >{name}</Text>
	          </View>
	          <View style={{ width:140,justifyContent: 'center', alignItems: 'center'}}>
	          <Text style={{ fontSize: 20,fontWeight: 'bold' }} >{score}</Text>
	          </View>
	          </View>
	          )
	}
	if(isSelf === '1'){
		return(
	          <View key={no} style={{ justifyContent: 'center', alignItems: 'center', flexDirection:'row',marginLeft:20}} >
	          <View style={{ width:140,justifyContent: 'center', alignItems: 'center'}} >
	          <Text style={{ fontSize: 20,fontWeight: 'bold',color:'red' }} >{no}</Text>
	          </View>
	          <View style={{ width:140,justifyContent: 'center', alignItems: 'center'}}>
	          <Text style={{ fontSize: 20,fontWeight: 'bold',color:'red' }} >{name}</Text>
	          </View>
	          <View style={{ width:140,justifyContent: 'center', alignItems: 'center'}}>
	          <Text style={{ fontSize: 20,fontWeight: 'bold',color:'red' }} >{score}</Text>
	          </View>
	          </View>
	          )
	}
		return(
	          <View key={no} style={{ justifyContent: 'center', alignItems: 'center', flexDirection:'row',marginLeft:20}} >
	          <View style={{ width:140,justifyContent: 'center', alignItems: 'center'}} >
	          <Text style={{ fontSize: 20,fontWeight: 'bold' }} >{no}</Text>
	          </View>
	          <View style={{ width:140,justifyContent: 'center', alignItems: 'center'}}>
	          <Text style={{ fontSize: 20,fontWeight: 'bold' }} >{name}</Text>
	          </View>
	          <View style={{ width:140,justifyContent: 'center', alignItems: 'center'}}>
	          <Text style={{ fontSize: 20,fontWeight: 'bold' }} >{score}</Text>
	          </View>
	          </View>
	          )
	}

  render() {
    const { title, data } = this.props;
    if (data === undefined || data.length === 0){
    	return null;
    }
    return (
          <View
          style={{ justifyContent: 'center', alignItems: 'center', flexDirection:'column',  flexWrap: 'wrap'}}
          >
          <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection:'row',marginLeft:20}} >
          <View style={{ width:140,justifyContent: 'center', alignItems: 'center'}} >
          <Text style={{ fontSize: 20,fontWeight: 'bold',marginLeft:5 }} > NO.</Text>
          </View>
          <View style={{ width:140,justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ fontSize: 20,fontWeight: 'bold' }} >UserName</Text>
          </View>
          <View style={{ width:140,justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{ fontSize: 20,fontWeight: 'bold' }} >Score</Text>
          </View>
          </View>
          

          {data.map((value,ind)=>this.__renderList(value.no, value.UserName, value.score, value.self))}


          </View>
    );
  }
}
export default Ranking;