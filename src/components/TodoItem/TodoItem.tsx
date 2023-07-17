import clsx from 'clsx';
import { Checkbox, ListItemText, ListItemIcon } from '@mui/material';
import { TodoItemStyled, classes } from './TodoItem.styles';
import { TodoEntity } from 'src/features/TodoPlanner/store/types';

import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { Color } from 'src/theme';
import { useCallback } from 'react';

interface ITodoItemProps {
  todo: Partial<TodoEntity>;
  className: string;
  onChange: (todo: TodoEntity) => void;
}

export const TodoItem = ({ todo, className, onChange }: ITodoItemProps) => {
  
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange({
        ...todo,
        done: event.target.checked,
      } as TodoEntity);
    },
    [onChange, todo]
  );

  return (
    <TodoItemStyled
      disableGutters
      dense={true}
      className={clsx(classes.root, className)}
    >
      <ListItemIcon className={classes.listIcon}>
        <Checkbox
          defaultChecked={todo.done}
          className={classes.checkbox}
          disableRipple={true}
          checkedIcon={<CheckBoxOutlinedIcon />}
          sx={{
            color: Color.BLACK,
            '&.Mui-checked': {
              color: Color.BLACK,
            },
          }}
          onChange={handleChange}
        />
      </ListItemIcon>
      <ListItemText>{todo.title}</ListItemText>
    </TodoItemStyled>
  );
};
