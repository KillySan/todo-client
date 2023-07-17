import { fork, all } from 'redux-saga/effects';
import { wsTodoSaga } from '../features/TodoPlanner/store/sagas';

export default function* rootSaga() {
  yield all([fork(wsTodoSaga)]);
}
