import { makeStyles } from '@material-ui/core/styles';

const parallaxStyles = makeStyles(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 0,
    transform: 'scale(0.8)',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  innerParallax: {
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& figure': {
      height: 500,
      width: '100%',
      display: 'block',
      position: 'absolute',
    },
    '& figure > div': {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      '& svg': {
        position: 'absolute'
      }
    }
  },
  plus: {
    fill: '#ECA426',
    left: -20,
    top: 0,
    width: 100,
    height: 100,
    transform: 'scale(0.5)',
  },
  circle: {
    fill: theme.palette.secondary.main,
    right: 70,
    top: 20,
    width: 120,
    height: 120,
    transform: 'scale(0.5)',
  },
  zigzag: {
    fill: theme.palette.primary.main,
    left: 0,
    bottom: 20,
    width: 250,
    height: 75,
    transform: 'scale(0.5)',
  },
}));

export default parallaxStyles;
