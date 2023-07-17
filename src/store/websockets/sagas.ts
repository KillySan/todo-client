import { take, put, call } from 'redux-saga/effects';
import { eventChannel, END } from 'redux-saga';
import { Socket } from 'socket.io-client';
import { Action } from '@reduxjs/toolkit';

export function* wsEmitterSaga(
  eventToSend: string,
  actionToListen: string,
  serviceWebSocket: Socket,
  actionOnError: (error: Error) => Action<string>
) {
  while (true) {
    const { payload } = yield take(actionToListen);
    try {
      yield call([serviceWebSocket, 'emit'], eventToSend, payload);
    } catch (error) {
      yield put(actionOnError(error as Error));
    }
  }
}

export function wsListener(serviceWebSocket: Socket) {
  return eventChannel((emitter) => {
    serviceWebSocket.onAny((event, data) => {
      emitter({ event, data });
    });
    serviceWebSocket.on('error', () => emitter(END));
    serviceWebSocket.on('close', () => emitter(END));

    return () => serviceWebSocket.close();
  });
}
