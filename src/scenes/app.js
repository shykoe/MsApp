import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import HomePage from 'Page/HomePage';
import ScorePage from 'Page/ScorePage';
import MainPage from 'Page/MainPage';
import TapNavigator from 'Page/Navigator';
import LoginPage from 'Page/LoginPage';
const scenes = Actions.create(
    <Scene key="app">
        <Scene key="HomePage" component={HomePage}  initial={true} hideNavBar={true} />
        <Scene key="Navigator" component={TapNavigator}  />
        <Scene key="ScorePage" component={ScorePage}   hideNavBar={true} title="Score" />
        <Scene key="MainPage" component={MainPage} hideNavBar={true}/>
        <Scene key="LoginPage" component={LoginPage} hideNavBar={false} title="登陆" />
    </Scene>
);

export default scenes;