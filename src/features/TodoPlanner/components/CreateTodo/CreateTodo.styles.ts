import { styled } from '@mui/material';

const PREFIX = 'CreateTodo';

export const classes = {
  root: `${PREFIX}-root`,
  addButton: `${PREFIX}-addButton`,
};

export const CreateTodoStyled = styled('div')(() => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    maxWidth: 265,
    columnGap: 8,
  },

  [`& .${classes.addButton}`]: {
    padding: '0px 26px',
  },
}));
