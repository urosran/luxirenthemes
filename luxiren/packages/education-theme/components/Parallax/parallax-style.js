import { makeStyles } from '@material-ui/core/styles';

const parallaxStyles = makeStyles(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    zIndex: 0,
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
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute',
    },
    '& figure > div': {
      height: 800,
      width: '100%',
      display: 'block',
      position: 'absolute',
      top: 0,
    }
  },
  dotsWrap: {
    top: -200,
    left: -200
  },
  crossWrap: {
    zIndex: 10,
    top: -100,
    right: -120,
    left: 'auto'
  },
  parallaxDot: {
    fill: theme.palette.text.hint,
    width: 1015,
    height: 800,
    opacity: 0.2,
    top: 90,
    left: 0,
    transform: 'scale(0.5)',
    transformOrigin: 'top left',
    position: 'absolute',
  },
  parallaxBox: {
    width: '100%',
    height: 350,
    top: -2400,
    right: 0,
    position: 'absolute'
  },
}));

export default parallaxStyles;
