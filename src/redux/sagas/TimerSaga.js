import { takeEvery } from 'redux-saga';
import { call, put, select, race, take } from 'redux-saga/effects';
import { RSULTIMG, SetResult ,UnSetResult } from '../modules/ImgResult';
import { nextImage } from '../modules/ind';
import { TIMEREND,resetTimer } from '../modules/Timer';
const sagas = function* (){
	function* handle(action){
		yield put(nextImage(1));
		yield put(resetTimer(30000));
	}
	yield [
        takeEvery(TIMEREND, handle),        
    ];
}
export default sagas