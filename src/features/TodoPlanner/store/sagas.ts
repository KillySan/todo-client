import { take, put, call, fork, all, ActionPattern } from 'redux-saga/effects';
import { io } from 'socket.io-client';
import { todoActions } from './slice';
import { TODO_EVENTS, eventsToActionsCreators } from './constants';
import { wsEmitterSaga, wsListener } from 'src/store/websockets/sagas';

const {
  fetchTodosRequest,
  fetchTodosError,
  createTodoRequest,
  createTodoError,
  updateTodoRequest,
  removeAllTodosRequest,
  removeAllTodosError,
} = todoActions;

export function* wsTodoSaga(): Generator {
  const wsService = io('ws://localhost:3000/');
  const socketChannel = yield call(wsListener, wsService);

  yield all([
    fork(
      wsEmitterSaga,
      TODO_EVENTS.FIND_ALL,
      fetchTodosRequest.toString(),
      wsService,
      fetchTodosError
    ),
    fork(
      wsEmitterSaga,
      TODO_EVENTS.CREATE,
      createTodoRequest.toString(),
      wsService,
      createTodoError
    ),
    fork(
      wsEmitterSaga,
      TODO_EVENTS.UPDATE,
      updateTodoRequest.toString(),
      wsService,
      removeAllTodosError
    ),
    fork(
      wsEmitterSaga,
      TODO_EVENTS.REMOVE_ALL,
      removeAllTodosRequest.toString(),
      wsService,
      removeAllTodosError
    ),
  ]);

  while (true) {
    const payload = yield take(socketChannel as ActionPattern);
    const { event, data } = payload as {
      event: string;
      data: any;
    };

    const action = eventsToActionsCreators[event];
    yield put(action(data));
  }
}
