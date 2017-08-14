import { takeEvery,delay } from 'redux-saga';
import { call, put, select, race, take } from 'redux-saga/effects';
import { GAMESTART, SUBMIT, MsgPost } from '../modules/Actions';
import { INDADD }  from '../modules/ind';
import { setImgList } from '../modules/imgList';
import { nextImage, ResetImage } from '../modules/ind';
import { RSULTIMG, UnSetResult, SetResult } from '../modules/ImgResult';
import { resetTimer } from '../modules/Timer';
import { initAttrs } from '../modules/Attrs';
import { scoreAdd, failureAdd, initCurrScore, scoreReset } from '../modules/score';	
const getImgList = (className)=>(
	fetch('http://172.18.32.202:8000/api/imglist?class='+className)
	.then((response)=>response.json()).then( data => data)
	)
const getAttrs = (className)=>(
	fetch('http://172.18.32.202:8000/api/attrs?class=' + className)
	.then(response=>response.json()).then(data=>data)
	)
const postReq = (Url)=>(
	fetch(Url).then(response=>response.json()).then(data=>data)
	)
const obj2Str = (obj, className)=>{
	const url = 'http://172.18.32.202:8000/api/submit?';
	var request = ['class='+className];
	Object.keys(obj).map((item)=>request.push(item+'='+obj[item]));
	const req = url + request.join("&");
	return req;
}
const countAttrs = (attrs)=>{
	return Object.keys(attrs).reduce((p,i)=>{if(attrs[i]>0){p = p-1;} return p},10);
}
const sagas = function* (){
	function* handle2(action){
		const { payload } = action;
		let response = yield call(getImgList, payload);
		yield put(UnSetResult());
		yield put(scoreReset());
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
		const remain = state.Timer/1000;
		const failure = state.score.current.failure;
		const attrscr = yield call(countAttrs, attrs)
		const className = yield img.split('_')[0];
		const Url = yield obj2Str(attrs, className);
		const result = yield fetch(Url).then(data=>data.text()).then(text=>text);
		if(result === className){
			const score = (remain/3 - failure + 10).toFixed(0);
			yield put(SetResult(true));
			yield put(MsgPost(result,score));
			yield put(scoreAdd(score));
			yield put(initCurrScore());

		}else{
			yield put(SetResult(false));
			yield put(MsgPost(result));
			yield put(failureAdd())
		}


	}
	yield [
        takeEvery(GAMESTART, handle2),
        takeEvery(INDADD,handle3),
        takeEvery(SUBMIT, handle4)    
    ];
}
export default sagas