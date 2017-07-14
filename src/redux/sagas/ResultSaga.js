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
	function* handle(action){
		while(true){
			const rel = yield race({
		        stopped: take('STOP'),
		        tick: call(wait, 1000)
			})
			if(!rel.stopped){
				yield put(nextImage(4));
				yield put(UnSetResult());
				// yield put(resetTimer(10000));
				break;
			}
		}
	}
	yield [
        takeEvery(RSULTIMG, handle),        
    ];
}
export default sagas