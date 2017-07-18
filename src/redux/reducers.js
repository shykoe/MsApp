import { combineReducers } from 'redux';
import indReducer from './modules/ind';
import scoreReducer from './modules/score';
import imglistReducer from './modules/imgList';
import PicAction from './modules/Actions';
import ImgResultReducer from './modules/ImgResult';
import Timer from './modules/Timer';
import tapOptionReducer from './modules/tapOption';
const combinedReducer = combineReducers({
  // Add reducers below
  ind:indReducer,
  score:scoreReducer,
  imgList:imglistReducer,
  PicAction:PicAction,
  ImgResult:ImgResultReducer,
  Timer:Timer,
  tapOption: tapOptionReducer,
});
export default combinedReducer;
