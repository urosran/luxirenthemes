import { makeStyles } from '@material-ui/core/styles';

const titleStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
}));

export default titleStyles;
