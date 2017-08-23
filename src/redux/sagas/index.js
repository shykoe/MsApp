import { fork } from 'redux-saga/effects';
import ResultSaga from './ResultSaga';
import TimerSaga from './TimerSaga';
import fetchSaga from './fetchSaga';
import authSaga from './authSaga';
const  root = function* rootSaga() {
    yield [
    ResultSaga,
    TimerSaga,
    fetchSaga,
    authSaga
    ].map(fork);
};
export default root