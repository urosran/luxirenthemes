import { makeStyles } from '@material-ui/core/styles';

const featureStyles = makeStyles(theme => ({
  root: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '& h5': {
      marginBottom: theme.spacing(3)
    },
    '& p': {
      padding: theme.spacing(0, 4)
    }
  },
  icon: {
    width: 80,
    height: 80,
    fontSize: 80,
    margin: '0 auto',
    color: theme.palette.primary.light
  },
  divider: {
    margin: `${theme.spacing(3)}px auto`,
    width: 80,
    height: 5,
    background: theme.palette.primary.light
  },
}));

export default featureStyles;
