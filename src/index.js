import React , { Component } from 'react';
import {  Navigator , View , Text , TabBarIOS} from 'react-native';
import { Provider } from 'react-redux';
import { MenuContext } from 'react-native-popup-menu';
import Router from './Router';
import createStore from './redux/create';


const App = () => (

    <MenuContext>
      <Provider store={createStore()}>
        <Router />
      </Provider>
    </MenuContext>
);
export default App;