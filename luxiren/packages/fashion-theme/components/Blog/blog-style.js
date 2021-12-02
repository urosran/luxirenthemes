import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const blogStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    overflow: 'hidden',
    height: 490,
    [theme.breakpoints.down('xs')]: {
      height: 400
    }
  },
  item: {
    position: 'relative',
    overflow: 'hidden',
    '&:focus': {
      outline: 'none'
    }
  },
  imgSlider: {
    width: '100%',
    background: theme.palette.secondary.dark,
    [theme.breakpoints.down('sm')]: {
      position: 'absolute',
      top: 0,
      left: 0
    },
    [theme.breakpoints.up('md')]: {
      width: '50%'
    },
    '& $item': {
      height: 490,
      '& img': {
        minWidth: '100%',
        height: '100%',
      }
    }
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: 'Roboto Condensed',
    color: theme.palette.common.white,
    marginTop: 100,
    [theme.breakpoints.down('xs')]: {
      marginTop: 50,
      fontSize: 28
    }
  },
  textSlider: {
    position: 'relative',
    background: fade(theme.palette.secondary.dark, 0.6),
    color: theme.palette.common.white,
    width: '100%',
    padding: theme.spacing(0, 3),
    [theme.breakpoints.down('md')]: {
      zIndex: 22
    },
    [theme.breakpoints.up('md')]: {
      width: '50%'
    },
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 10)
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
    },
    '& nav': {
      position: 'absolute',
      right: 0,
      bottom: 0,
      background: theme.palette.common.black,
      [theme.breakpoints.up('md')]: {
        background: fade(theme.palette.common.black, 0.27),
      },
    }
  },
  navButton: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    '& svg': {
      fill: theme.palette.secondary.light
    }
  },
  button: {
    color: theme.palette.secondary.light,
    textDecoration: 'underline',
    marginTop: theme.spacing(3),
    padding: 0
  },
  carousel: {
    display: 'block',
    marginTop: theme.spacing(6)
  },
  parallaxProps: {
    height: 490,
  }
}));

export default blogStyles;
