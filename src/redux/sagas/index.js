import { fork } from 'redux-saga/effects';
import ResultSaga from './ResultSaga';
import TimerSaga from './TimerSaga';
const  root = function* rootSaga() {
    yield [
    ResultSaga,
    TimerSaga
    ].map(fork);
};
export default root