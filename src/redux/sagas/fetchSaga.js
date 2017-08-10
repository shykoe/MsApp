import { takeEvery,delay } from 'redux-saga';
import { call, put, select, race, take } from 'redux-saga/effects';
import { GAMESTART, SUBMIT, Right } from '../modules/Actions';
import { INDADD }  from '../modules/ind';
import { setImgList } from '../modules/imgList';
import { nextImage, ResetImage } from '../modules/ind';
import { RSULTIMG, UnSetResult } from '../modules/ImgResult';
import { resetTimer } from '../modules/Timer';
import { initAttrs } from '../modules/Attrs';	
const getImgList = (className)=>(
	fetch('http://172.18.32.202:8000/api/imglist?class='+className)
	.then((response)=>response.json()).then( data => data)
	)
const getAttrs = (className)=>(
	fetch('http://172.18.32.202:8000/api/attrs?class=' + className)
	.then(response=>response.json()).then(data=>data)
	)
const obj2Str = (obj, className)=>{
	const url = 'http://172.18.32.202:8000/api/submit?';
	var request = ['class='+className];
	Object.keys(obj).map((item)=>request.push(item+'='+obj[item]));
	const req = url + request.join("&");
	return req;
}
const sagas = function* (){
	function* handle2(action){
		const { payload } = action;
		let response = yield call(getImgList, payload);
		yield put(UnSetResult());
		yield put(setImgList(response));
		yield put(ResetImage());
		yield put(nextImage(0));
		yield put(resetTimer(30000));
	};
	function* handle3(action){
		const state = yield select();
		const img = yield state.imgList[state.ind.ind];
		const className = yield img.split('_')[0];
		const attrs = yield getAttrs(className);
		yield put(initAttrs(attrs));
	}
	function* handle4(action){
		const state = yield select();
		const attrs = yield state.attrs;
		const img = yield state.imgList[state.ind.ind];
		const className = yield img.split('_')[0];
		const Url = yield obj2Str(attrs, className);
		const result = yield fetch(Url).then(data=> data);
		if(className === result){
			yield put(Right(className))
		}else{

		}
	}
	yield [
        takeEvery(GAMESTART, handle2),
        takeEvery(INDADD,handle3),
        takeEvery(SUBMIT, handle4)    
    ];
}
export default sagas