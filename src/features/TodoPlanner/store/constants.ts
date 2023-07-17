import { todoActions } from './slice';

export const TODO_EVENTS = {
  FIND_ALL: 'todos:findAll',
  CREATE: 'todos:create',
  UPDATE: 'todos:update',
  REMOVE_ALL: 'todos:removeAll',
};

export const eventsToActionsCreators = {
  [TODO_EVENTS.FIND_ALL]: todoActions.fetchTodosSuccess,
  [TODO_EVENTS.CREATE]: todoActions.createTodoSuccess,
  [TODO_EVENTS.UPDATE]: todoActions.updateTodoSuccess,
  [TODO_EVENTS.REMOVE_ALL]: todoActions.removeAllTodosSuccess,
};
