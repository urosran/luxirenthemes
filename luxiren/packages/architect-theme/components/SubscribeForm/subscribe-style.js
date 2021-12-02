import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const subscribeStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    textAlign: 'center',
  },
  parallaxWrap: {
    height: 570,
    width: '100%'
  },
  form: {
    backdropFilter: 'saturate(90%) blur(10px)',
    background: fade(theme.palette.background.paper, 0.8),
    maxWidth: 700,
    margin: '0 auto',
    marginTop: theme.spacing(-45),
    width: '100%',
    display: 'block',
    borderBottom: `7px solid ${theme.palette.primary.main}`,
    color: theme.palette.text.secondary,
    position: 'relative',
    bottom: theme.spacing(-10),
    padding: theme.spacing(5, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 10),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5),
    },
    '& h4': {
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(3)
    }
  },
  field: {
    margin: theme.spacing(3, 0, 4)
  },
  button: {
    margin: '0 auto',
    minWidth: 185
  }
}));

export default subscribeStyles;
