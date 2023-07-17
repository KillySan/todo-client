import clsx from 'clsx';
import { useState, useCallback } from 'react';
import { CreateTodoStyled, classes } from './CreateTodo.styles';
import { TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { todoActions } from 'src/features/TodoPlanner/store/slice';

interface ICreateTodoProps {
  className?: string;
}

export const CreateTodo = ({ className }: ICreateTodoProps) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    },
    []
  );

  const handleCreate = useCallback(() => {
    dispatch(todoActions.createTodoRequest({ title }));
    setTitle('');
  }, [title, dispatch]);

  return (
    <CreateTodoStyled className={clsx(classes.root, className)}>
      <TextField value={title} onChange={handleChange} />
      <Button className={classes.addButton} onClick={handleCreate}>
        Add
      </Button>
    </CreateTodoStyled>
  );
};
