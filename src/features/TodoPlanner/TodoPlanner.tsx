import { useState, useCallback, useEffect } from 'react';
import { classes, TodoPlannerStyled } from './TodoPlanner.styles';
import { Typography, Link, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { TodoList } from 'src/components/TodoList';
import { CreateTodo } from './components/CreateTodo';
import {
  todoActions,
  selectFinishedSorted,
  selectUnfinishedSorted,
} from 'src/features/TodoPlanner/store/slice';
import { filterTodosBySearch, getLast10Todos } from './TodoPlanner.model';
import { TodoEntity } from './store/types';

export const TodoPlanner = () => {
  const [searchEntry, setSearchEntry] = useState('');
  const finishedTodos = useSelector(selectFinishedSorted);
  const unfinishedTodos = useSelector(selectUnfinishedSorted);
  const dispatch = useDispatch();

  const finishedTodosFiltered = getLast10Todos(
    filterTodosBySearch(finishedTodos, searchEntry)
  );
  const unfinishedTodosFiltered = filterTodosBySearch(
    unfinishedTodos,
    searchEntry
  );

  useEffect(() => {
    dispatch(todoActions.fetchTodosRequest());
  }, [dispatch]);

  const handleSearch = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchEntry(event.target.value);
    },
    []
  );

  const handleDeleteAllTodos = useCallback(() => {
    dispatch(todoActions.removeAllTodosRequest());
  }, [dispatch]);

  const handleUpdateTodo = useCallback(
    (todo: TodoEntity) => {
      dispatch(todoActions.updateTodoRequest(todo));
    },
    [dispatch]
  );

  return (
    <TodoPlannerStyled className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.title} variant="h2">
          Marvelous v2.0
        </Typography>
        <Link onClick={handleDeleteAllTodos}>
          <Typography className={classes.delete}>Delete all tasks</Typography>
        </Link>
      </div>

      <div className={classes.container}>
        <div className={classes.line}>
          <CreateTodo />
          <TextField className={classes.search} onChange={handleSearch} />
        </div>
      </div>

      <div className={classes.line}>
        <TodoList
          title="To Do"
          todos={unfinishedTodosFiltered}
          onChange={handleUpdateTodo}
        />
        <TodoList
          title="Done"
          todos={finishedTodosFiltered}
          onChange={handleUpdateTodo}
        />
      </div>
    </TodoPlannerStyled>
  );
};
