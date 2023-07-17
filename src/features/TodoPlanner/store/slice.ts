import {
  createSlice,
  createEntityAdapter,
  createSelector,
  PayloadAction,
} from '@reduxjs/toolkit';
import { LOADING_STATUS, TodoEntity, TodoState } from './types';

export const TODO_FEATURE_KEY = 'todo';

export const todoAdapter = createEntityAdapter<TodoEntity>();

export const initialTodoState: TodoState = todoAdapter.getInitialState({
  loadingStatus: LOADING_STATUS.pending,
  error: null,
});

const todoSlice = createSlice({
  name: TODO_FEATURE_KEY,
  initialState: initialTodoState,
  reducers: {
    // FETCH ALL
    fetchTodosRequest: (state) => {
      state.loadingStatus = LOADING_STATUS.request;
    },
    fetchTodosError: (state, action) => {
      state.loadingStatus = LOADING_STATUS.error;
      state.error = action.payload;
    },
    fetchTodosSuccess: todoAdapter.addMany,

    // CREATE
    createTodoRequest: (state, _: PayloadAction<{ title: string }>) => {
      state.loadingStatus = LOADING_STATUS.request;
    },
    createTodoError: (state, action) => {
      state.loadingStatus = LOADING_STATUS.error;
      state.error = action.payload;
    },
    createTodoSuccess: todoAdapter.addOne,

    // UPDATE
    updateTodoRequest: (state, _: PayloadAction<TodoEntity>) => {
      state.loadingStatus = LOADING_STATUS.request;
    },
    updateTodoError: (state, action) => {
      state.loadingStatus = LOADING_STATUS.error;
      state.error = action.payload;
    },
    updateTodoSuccess: (state, action: PayloadAction<TodoEntity>) => {
      const { payload } = action;
      todoAdapter.updateOne(state, {
        id: payload.id,
        changes: payload,
      });
    },

    // REMOVE ALL
    removeAllTodosRequest: (state) => {
      state.loadingStatus = LOADING_STATUS.request;
    },
    removeAllTodosError: (state, action) => {
      state.loadingStatus = LOADING_STATUS.error;
      state.error = action.payload;
    },
    removeAllTodosSuccess: todoAdapter.removeAll,
  },
});

// ACTIONS
export const todoActions = todoSlice.actions;

// REDUCER
export const todoReducer = todoSlice.reducer;

// SELECTORS & HELPERS
const { selectAll } = todoAdapter.getSelectors();

export const getTodoState = (rootState: {
  [TODO_FEATURE_KEY]: TodoState;
}): TodoState => rootState[TODO_FEATURE_KEY];

export const selectAllTodos = createSelector(getTodoState, selectAll);

const sortAlphabetically = (todos: TodoEntity[]) => {
  return [...todos].sort(function (a, b) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
  });
};

const getFinished = (todos: TodoEntity[] = []) => {
  if (!todos || !todos.length) return todos;

  return todos.filter((todo) => todo.done);
};

const getUnfinished = (todos: TodoEntity[] = []) => {
  return todos.filter((todo) => todo.done === false);
};

export const selectFinishedTodos = createSelector(selectAllTodos, getFinished);

export const selectUnfinishedTodos = createSelector(
  selectAllTodos,
  getUnfinished
);

export const selectFinishedSorted = createSelector(
  selectFinishedTodos,
  sortAlphabetically
);

export const selectUnfinishedSorted = createSelector(
  selectUnfinishedTodos,
  sortAlphabetically
);
