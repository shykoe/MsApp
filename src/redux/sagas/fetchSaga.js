import { takeEvery } from 'redux-saga';
import { call, put, select, race, take } from 'redux-saga/effects';
import { GAMESTART } from '../modules/Actions';
import { setImgList } from '../modules/imgList';
import { nextImage } from '../modules/ind';
const getImgList = (className)=>(
	fetch('http://172.18.32.202:8000/api/imglist',
		{
			method:'POST',
			body:JSON.stringify({className:className})
		}
		)
	.then((response)=>response.json()).then( data => data)
	)
const sagas = function* (){
	function* handle2(action){
		const { payload } = action;
		let response = yield call(getImgList, payload);
		yield put(setImgList(response));
		yield put(nextImage(0));
	}
	yield [
        takeEvery(GAMESTART, handle2),       
    ];
}
export default sagas