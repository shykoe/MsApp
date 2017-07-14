import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import HomePage from 'Page/HomePage';
import ScorePage from 'Page/ScorePage';
import MainPage from 'Page/MainPage';
const scenes = Actions.create(
    <Scene key="app">
        <Scene key="HomePage" component={HomePage}  initial={true} hideNavBar={true} />
        <Scene key="ScorePage" component={ScorePage} title="Score" />
        <Scene key="MainPage" component={MainPage} hideNavBar={true}/>
    </Scene>
);

export default scenes;