import { makeStyles } from '@material-ui/core/styles';
import decoWaveLight from '~/public/images/mobile/deco-wave-light.png';
import decoWaveDark from '~/public/images/mobile/deco-wave-dark.png';
import decoLineLight from '~/public/images/mobile/deco-line-light.png';
import decoLineDark from '~/public/images/mobile/deco-line-dark.png';

const bannerStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'block'
  },
  background: {
    position: 'absolute',
    height: 720,
    top: 0,
    right: 0,
    width: '55%',
    [theme.breakpoints.up('lg')]: {
      width: '55%',
    },
    [theme.breakpoints.down('sm')]: {
      height: 260,
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    '& img': {
      position: 'absolute',
      right: 0,
      top: 0,
    }
  },
  decoInner: {
    position: 'absolute',
    top: 0,
    right: 0,
    opacity: 0.2,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  gradient: {
    backgroundImage: `linear-gradient(30deg, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 140%)`,
    width: '100%',
    height: '100%',
    '& img': {
      display: 'block'
    }
  },
  text: {
    height: 680,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 10,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
      paddingTop: theme.spacing(20),
      height: 560
    },
    '& h3': {
      marginTop: theme.spacing(12),
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(3),
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: 0,
        textAlign: 'center'
      },
      '& strong': {
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
      }
    },
    '& h5': {
      color: theme.palette.text.secondary,
      margin: theme.spacing(4, 0),
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center'
      },
    },
  },
  btnArea: {
    textAlign: 'center',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-around'
    },
    '& a': {
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.down('xs')]: {
        margin: 4
      },
      '& img': {
        width: 160,
        [theme.breakpoints.down('xs')]: {
          width: '100%',
        },
      }
    }
  },
  decoration: {
    position: 'relative',
    height: '100%',
  },
  decoWave: {
    position: 'absolute',
    top: 40,
    left: -1,
    width: '102%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    background: `url(${theme.palette.type === 'dark' ? decoWaveDark : decoWaveLight}) no-repeat 0 0`,
    backgroundSize: '100% 720px',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '100% 240px',
    }
  },
  decoLine: {
    position: 'absolute',
    left: -20,
    top: 10,
    opacity: 0.56,
    width: '100%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    background: `url(${theme.palette.type === 'dark' ? decoLineDark : decoLineLight}) no-repeat 0 0`,
    backgroundSize: '100% 700px',
  },
  phoneIllustration: {
    position: 'relative',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      right: theme.spacing(-10),
      opacity: theme.palette.type === 'dark' ? 0.4 : 0.8
    },
    [theme.breakpoints.down('sm')]: {
      right: 0,
      top: 200
    },
    [theme.breakpoints.down('xs')]: {
      right: theme.spacing(-20),
      opacity: theme.palette.type === 'dark' ? 0.2 : 0.4
    },
    '& img': {
      position: 'absolute',
    }
  },
  phone: {
    width: 600,
    right: -40,
    bottom: 0
  },
  widgetTop: {
    width: 150,
    bottom: 330,
    left: 130,
    '&[class*="fragment-fadeUp"]': {
      transitionDelay: '0.2s'
    }
  },
  widgetLeft: {
    width: 170,
    bottom: 180,
    left: 110,
    '&[class*="fragment-fadeUp"]': {
      transitionDelay: '0.3s'
    }
  },
  widgetRight: {
    width: 170,
    bottom: 240,
    right: 80,
    '&[class*="fragment-fadeUp"]': {
      transitionDelay: '0.4s'
    }
  },
  hide: {
    visibility: 'hidden'
  }
}));

export default bannerStyles;
