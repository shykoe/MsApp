import { fork } from 'redux-saga/effects';
import ResultSaga from './ResultSaga';
import TimerSaga from './TimerSaga';
import fetchSaga from './fetchSaga';
const  root = function* rootSaga() {
    yield [
    ResultSaga,
    TimerSaga,
    fetchSaga
    ].map(fork);
};
export default root