import { takeEvery,delay } from 'redux-saga';
import { call, put, select, race, take } from 'redux-saga/effects';
import { Actions } from 'react-native-router-flux';
import { USERCHECK, LOGIN, LOGINSUCESS } from '../modules/Auth';
const sagas = function* (){
	function* handleLogin(action){
		const state = yield select();
		const { user, passwd } = action.payload;
		yield put({type:LOGINSUCESS,payload:user})
		yield Actions.Navigator({type: 'replace'});

	}
	yield [
        takeEvery(LOGIN, handleLogin),        
    ];
}
export default sagas