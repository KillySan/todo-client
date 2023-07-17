import { combineReducers } from 'redux';
import {
  TODO_FEATURE_KEY,
  todoReducer,
} from '../features/TodoPlanner/store/slice';

export default combineReducers({
  [TODO_FEATURE_KEY]: todoReducer,
});
