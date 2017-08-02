import { takeEvery } from 'redux-saga';
import { call, put, select, race, take } from 'redux-saga/effects';
import { RSULTIMG, UnSetResult } from '../modules/ImgResult';
import { nextImage } from '../modules/ind';
import { resetTimer } from '../modules/Timer';
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
		        tick: call(wait, 1000)
			})
			if(!rel.stopped){
				yield put(nextImage(1));
				yield put(UnSetResult());
				yield put(resetTimer(10000));
				break;
			}
		}
	}
	yield [
        takeEvery(RSULTIMG, handle1),        
    ];
}
export default sagas