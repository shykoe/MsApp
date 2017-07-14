import { Router, Actions } from 'react-native-router-flux';
import React, { Component, PropTypes } from 'react';
import scenes from 'scenes/app';
const getSceneStyle = () => ({
  flex: 1,
  backgroundColor: '#fff',
  shadowColor: 'black',
  shadowOffset: { width: 2, height: 4 },
  shadowOpacity: 0.5,
  shadowRadius: 3,
});
class Container extends Component{
	render() {
    	return (
      		<Router
		        scenes={scenes}
		        getSceneStyle={getSceneStyle}
		    />
    );
  }
}
export default (): Element => (
  <Container />
);