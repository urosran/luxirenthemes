import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  parallaxBottom: {
    '& > div': {
      top: -100,
      overflow: 'visible'
    }
  },
  block: {
    position: 'relative',
    '& > *': {
      [theme.breakpoints.only('sm')]: {
        padding: theme.spacing(4, 2),
        display: 'inline-block',
        width: '49%'
      }
    }
  },
  map: {
    background: '#dedede',
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    height: 700,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(-6),
      height: 320
    }
  }
}));

export default useStyles;
