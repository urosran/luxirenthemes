import { makeStyles } from '@material-ui/core/styles';

const parallaxStyles = makeStyles(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    },
  },
  innerParallax: {
    height: 1500,
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
  triangle: {
    stroke: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    opacity: 0.2,
    width: 60,
    height: 60,
  },
  circle: {
    stroke: theme.palette.secondary.main,
    width: 150,
    height: 150,
    opacity: 0.2
  },
  square: {
    fill: theme.palette.primary.light,
    width: 110,
    height: 110,
    opacity: 0.2,
  },
  dot: {
    fill: theme.palette.primary.light,
    width: 140,
    height: 140,
    top: -15,
    left: -10
  },
  dotMany: {
    fill: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    width: 510,
    height: 510,
    top: 0,
    left: 120,
    transform: 'rotate(30deg)',
    transformOrigin: 'left center',
    opacity: 0.4
  },
  dotManySmall: {
    fill: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    width: 510,
    height: 510,
    top: 0,
    left: -120,
    transform: 'rotate(30deg)',
    transformOrigin: 'left center',
    opacity: 0.4
  },
  squareDot: {
    position: 'absolute',
  },
  large: {
    '& $triangle': {
      left: -40,
      top: 40
    },
    '& $circle': {
      left: '70%',
      bottom: 0,
    },
    '& $squareDot': {
      left: 50,
      bottom: 0
    },
  },
  medium: {
    '& $triangle': {
      top: 0,
      left: -100,
    },
    '& $circle': {
      top: -100,
      right: -80,
      transform: 'scale(0.8)'
    },
    '& $squareDot': {
      left: 0,
      top: -50,
      '& $dotMany': {
        fill: theme.palette.primary.light
      }
    },
  },
  small: {
    '& $triangle': {
      top: -80,
      left: -10,
      transform: 'scale(0.8)'
    },
    '& $circle': {
      top: -100,
      left: '50%',
      transform: 'scale(0.8)'
    },
    '& $squareDot': {
      left: 0,
      top: -10
    },
  },
  extraSmall: {
    '& $triangle': {
      top: -80,
      left: 10,
      transform: 'scale(0.8)'
    },
    '& $circle': {
      top: 100,
      left: 220,
      transform: 'scale(0.8)'
    },
    '& $squareDot': {
      left: 30,
      top: -10,
      transform: 'scale(0.7)'
    },
  }
}));

export default parallaxStyles;
