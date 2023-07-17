import { styled, ListItem } from '@mui/material';

const PREFIX = 'TodoList';

export const classes = {
  root: `${PREFIX}-root`,
  title: `${PREFIX}-title`,
  list: `${PREFIX}-list`,
  item: `${PREFIX}-item`,
  delimiter: `${PREFIX}-delimiter`,
};

export const TodoListStyled = styled(ListItem)(() => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    boxSizing: 'borderBox',
    paddingTop: 25,
  },

  [`& .${classes.title}`]: {
    marginLeft: 8,
  },

  [`& .${classes.item}`]: {},

  [`& .${classes.delimiter}`]: {
    width: '100%',
  },
}));
