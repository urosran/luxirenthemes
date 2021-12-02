import { makeStyles } from '@material-ui/core/styles';

const aboutStyles = makeStyles(theme => ({
  illustration: {},
  root: {
    position: 'relative',
    color: theme.palette.common.white,
    padding: theme.spacing(10, 0),
    backgroundImage: `linear-gradient(${theme.direction === 'rtl' ? '-90deg' : '90deg'}, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main} 70%, ${theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper} 70%)`,
    [theme.breakpoints.down('sm')]: {
      background: theme.palette.secondary.main,
    },
    '& $illustration': {
      zIndex: 10,
      height: 415,
      position: 'absolute',
      top: -20,
      right: 0,
      [theme.breakpoints.down('md')]: {
        height: '100%',
      }
    },
  },
  bgDeco: {
    position: 'absolute',
    top: 20,
    right: -100,
    width: 600,
    height: 700,
    '& img': {
      transform: 'scale(1.8)',
      opacity: 0.1,
      [theme.breakpoints.down('md')]: {
        transform: 'scale(1.2)'
      }
    }
  },
  illusWrap: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  }
}));

export default aboutStyles;
