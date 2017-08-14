import { takeEvery, delay } from 'redux-saga';
import { call, put, select, race, take } from 'redux-saga/effects';
import { RSULTIMG, UnSetResult } from '../modules/ImgResult';
import { nextImage } from '../modules/ind';
import { resetTimer } from '../modules/Timer';
import { Actions } from 'react-native-router-flux';
const wait = ms => (
  new Promise(resolve => {
    setTimeout(() => resolve(), ms)
  })
)
const sagas = function* (){
	function* handle1(action){

		while(true){
			const rel = yield race({
		        stopped: take('STOP'),
		        tick: call(wait, 2000)
			})
			if(!rel.stopped){
				const state =  yield select();

				if(state.ind.ind >= (state.imgList.length - 1) ){
					yield Actions.ScorePage({type: 'replace'});
					return;
				}
				yield put(nextImage(1));
				yield put(UnSetResult());
				yield put(resetTimer(30000));
				break;
			}
		}
	}
	function* handleWrong(action){
		yield delay(2000);
		yield put(UnSetResult());
	}
	yield [
        takeEvery( action => action.type===RSULTIMG && action.payload.isRight , handle1),
        takeEvery( action => action.type===RSULTIMG && !action.payload.isRight, handleWrong)        
    ];
}
export default sagas