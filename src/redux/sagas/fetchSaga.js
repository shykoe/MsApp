import { takeEvery } from 'redux-saga';
import { call, put, select, race, take } from 'redux-saga/effects';
import { GAMESTART } from '../modules/Actions';
import { setImgList } from '../modules/imgList';
import { nextImage } from '../modules/ind';
const getImgList = ()=>(
	fetch('http://172.18.32.202:8000/imgelist')
	.then((response)=>response.json()).then( data => data)
	)
const sagas = function* (){
	function* handle(action){
		let response = yield call(getImgList);
		yield put(setImgList(response));
		yield put(nextImage(0));
	}
	yield [
        takeEvery(GAMESTART, handle),       
    ];
}
export default sagas