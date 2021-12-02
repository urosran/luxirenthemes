import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import cloudBottomLight from '~/public/images/hosting/cloud_bottom_light.svg';
import cloudBottomDark from '~/public/images/hosting/cloud_bottom_dark.svg';

const bannerStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
  },
  decoWrap: {
    position: 'absolute',
    width: '100%',
    height: 760,
    clip: 'rect(0, auto, auto, 0)',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  cloudDeco: {
    background: `url(${theme.palette.type === 'dark' ? cloudBottomDark : cloudBottomLight}) repeat-x center 80px`,
    width: '100%',
    height: 360,
    position: 'absolute',
    opacity: 0.25,
    bottom: -100
  },
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
    height: 800,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& figure': {
      height: 500,
      margin: 0,
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
  illustration: {
    position: 'fixed',
    width: '100%',
    height: 650,
    bottom: -120,
    left: 0,
    opacity: theme.palette.type === 'dark' ? 0.5 : 1,
    '& img': {
      width: '100%'
    }
  },
  bannerWrap: {
    position: 'relative',
    padding: theme.spacing(25, 0, 20),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(32, 0, 20),
    }
  },
  text: {
    textAlign: 'center',
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      marginBottom: theme.spacing(3),
    },
    '& p': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  searchDomain: {
    position: 'relative',
    marginTop: theme.spacing(3),
    zIndex: 10,
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(6, 10, 0),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(4),
    },
    '& label': {
      textTransform: 'capitalize'
    },
  },
  search: {
    fontSize: 18,
    width: '100%',
    '& input': {
      borderRadius: 10,
      padding: theme.spacing(4, 7, 3, 1),
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(4, 30, 3, 3)
      },
      '&:focus': {
        boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.4rem`
      }
    },
    '& label': {
      left: theme.spacing(3),
      top: theme.spacing(),
      fontWeight: theme.typography.fontWeightBold
    },
    '& label + div': {
      marginTop: 0,
      '&:after, &:before': {
        display: 'none'
      }
    }
  },
  action: {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(2)
  },
  selectDomain: {
    margin: theme.spacing(0, 2),
    borderLeft: `1px solid ${theme.palette.divider}`,
    '&:before, &:after': {
      display: 'none'
    },
    '& > div': {
      padding: theme.spacing(1, 3),
    }
  },
  button: {
    [theme.breakpoints.down('sm')]: {
      padding: 0,
      minWidth: 0,
      width: 'auto',
      background: 'none',
      boxShadow: 'none',
      color: theme.palette.primary.main
    }
  },
  icon: {},
  decoInner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  hide: {
    visibility: 'hidden'
  }
}));

export default bannerStyles;
