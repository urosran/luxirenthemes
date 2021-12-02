import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const subscribeStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    textAlign: 'center',
    '& p': {
      color: theme.palette.common.white
    }
  },
  form: {
    position: 'relative',
    marginTop: theme.spacing(2)
  },
  field: {
    '& input': {
      width: '100%',
      boxShadow: theme.shade.light,
      background: 'rgba(255, 255, 255, 0.2)',
      padding: theme.spacing(2.5, 30, 2.5, 2.5),
      borderRadius: 10,
      color: theme.palette.common.white,
      [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2, 6, 2, 2),
      },
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.1rem`
      },
    },
    '& ::-webkit-input-placeholder': { /* Chrome/Opera/Safari */
      color: 'rgba(255,255,255,1)'
    },
    '& ::-moz-placeholder': { /* Firefox 19+ */
      color: 'rgba(255,255,255,1)'
    },
    '& :-ms-input-placeholder': { /* IE 10+ */
      color: 'rgba(255,255,255,1)'
    },
    '& :-moz-placeholder': { /* Firefox 18- */
      color: 'rgba(255,255,255,1)'
    },
    '& > div': {
      marginTop: 0,
      '&:after, &:before': {
        display: 'none'
      }
    }
  },
  button: {
    position: 'absolute',
    right: theme.spacing(),
    top: theme.spacing(),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0.5, 3),
      minWidth: 0,
      width: 'auto'
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0.5, 1),
    },
    '& svg': {
      fill: theme.palette.common.white
    }
  }
}));

export default subscribeStyles;
