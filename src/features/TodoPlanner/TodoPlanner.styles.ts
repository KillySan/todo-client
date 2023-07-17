import { styled } from '@mui/material';
import { Color } from 'src/theme';

const PREFIX = 'TodoPlanner';

export const classes = {
  root: `${PREFIX}-root`,
  header: `${PREFIX}-header`,
  title: `${PREFIX}-title`,
  delete: `${PREFIX}-delete`,
  addPanel: `${PREFIX}-addPanel`,
  container: `${PREFIX}-container`,
  search: `${PREFIX}-search`,
  addButton: `${PREFIX}-addButton`,
  line: `${PREFIX}-line`,
};

export const TodoPlannerStyled = styled('div')(() => ({
  [`&.${classes.root}`]: {
    maxWidth: 670,
    minHeight: 350,
    paddingLeft: 35,
    paddingRight: 20,
    boxSizing: 'border-box',
    border: '1px solid black',
    backgroundColor: Color.DIMMED,
  },

  [`& .${classes.header}`]: {
    paddingTop: 8,
    paddingBotton: 8,
    display: 'flex',
    alignItems: 'end',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 35,
  },

  [`& .${classes.title}`]: {},

  [`& .${classes.delete}`]: {
    cursor: 'pointer',
    fontSize: 12,
    lineHeight: 2,
  },

  [`& .${classes.container}`]: {
    marginTop: 60,
  },

  [`& .${classes.addPanel}`]: {
    marginLeft: 20,
  },

  [`& .${classes.search}`]: {
    maxWidth: 150,
    marginRight: 20,
  },

  [`& .${classes.line}`]: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));
