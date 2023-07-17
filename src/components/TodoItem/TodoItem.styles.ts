import { styled, ListItem } from '@mui/material';

const PREFIX = 'TodoItem';

export const classes = {
  root: `${PREFIX}-root`,
  listIcon: `${PREFIX}-listIcon`,
  checkbox: `${PREFIX}-checkbox`,
};

export const TodoItemStyled = styled(ListItem)(() => ({
  [`&.${classes.root}`]: {
    padding: 0,
  },

  [`& .${classes.listIcon}`]: {
    minWidth: 45,
  },

  [`& .${classes.checkbox}`]: {
    padding: 0,
  },
}));
