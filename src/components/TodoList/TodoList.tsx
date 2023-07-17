import { List, Typography, FormGroup } from '@mui/material';
import { TodoListStyled, classes } from './TodoList.styles';
import { TodoItem } from 'src/components/TodoItem';
import { TodoEntity } from 'src/features/TodoPlanner/store/types';

interface ITodoListProps {
  todos: Partial<TodoEntity>[];
  title: string;
  onChange: (todo: any) => void;
}

export const TodoList = ({ todos, title, onChange }: ITodoListProps) => {
  return (
    <TodoListStyled className={classes.root}>
      <Typography className={classes.title} variant="h6">
        {title}
      </Typography>

      <hr className={classes.delimiter} />

      <List dense className={classes.list}>
        <FormGroup>
          {todos.map((todo, index) => {
            return (
              <TodoItem
                className={classes.item}
                onChange={onChange}
                todo={todo}
                key={index}
              />
            );
          })}
        </FormGroup>
      </List>
    </TodoListStyled>
  );
};
