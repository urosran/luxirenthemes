import { makeStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import waveDecoLight from '~/public/images/saas/deco-wave-light.png';
import waveDecoDark from '~/public/images/saas/deco-wave-dark.png';

const bannerStyles = makeStyles(theme => ({
  '@keyframes move_wave': {
    '0%': {
      backgroundPosition: '0 0',
      transform: 'scale(2, 1)'
    },
    '50%': {
      backgroundPosition: '50% -50%',
      transform: 'scale(2.3, 1.2)'
    },
    '100%': {
      backgroundPosition: '100% 0',
      transform: 'scale(2, 1)'
    }
  },
  root: {
    background: `linear-gradient(-45deg, ${theme.palette.primary.main} 20%, ${theme.palette.primary.dark} 70%)`,
    position: 'relative',
    padding: theme.spacing(25, 0, 15),
    [theme.breakpoints.up('lg')]: {
      height: 780,
      padding: theme.spacing(30, 0, 5),
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(25, 0, 10),
      position: 'relative'
    },
  },
  decoration: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    clip: 'rect(0, auto, auto, 0)',
    '& svg': {
      fill: theme.palette.secondary.main,
      opacity: 0.15,
      position: 'fixed',
      top: 0,
    }
  },
  leftDeco: {
    left: theme.direction === 'rtl' ? 'auto' : 0,
    right: theme.direction === 'rtl' ? '-50%' : 'auto',
    width: 1200,
    height: 1500,
    transform: 'scale(0.5)',
    transformOrigin: 'top left',
  },
  rightDeco: {
    left: theme.direction === 'rtl' ? -150 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : 0,
    height: 1500,
    transform: 'scale(0.5)',
    transformOrigin: 'top right',
  },
  sliderWrap: {
    position: 'relative',
    zIndex: 3,
    display: 'flex',
    justifyContent: 'space-between'
  },
  text: {
    maxWidth: 720,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h3': {
      color: theme.palette.common.white,
      [theme.breakpoints.up('lg')]: {
        paddingRight: theme.spacing(5),
      },
      '& strong': {
        fontWeight: theme.typography.fontWeightBold
      }
    },
    '& p': {
      color: theme.palette.common.white,
      margin: theme.spacing(4, 0),
      [theme.breakpoints.up('lg')]: {
        paddingRight: theme.spacing(15),
      }
    }
  },
  btnArea: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column-reverse',
      '& > *': {
        marginBottom: theme.spacing(4),
        height: 56,
      }
    },
  },
  icon: {},
  playBtn: {
    textTransform: 'uppercase',
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    fontSize: 16,
    background: 'none',
    marginRight: theme.spacing(4),
    '& $icon': {
      borderRadius: '50%',
      transition: 'all 0.3s ease-out',
      width: 40,
      height: 40,
      textAlign: 'center',
      lineHeight: '47px',
      verticalAlign: 'middle',
      marginRight: theme.spacing(),
      background: theme.palette.primary.main,
    },
    '& i': {
      color: theme.palette.common.white,
      lineHeight: '22px',
      marginLeft: theme.spacing(0.5),
      fontSize: 24,
    },
    '&:hover': {
      '& $icon': {
        background: lighten(theme.palette.primary.main, 0.3),
        paddingLeft: 6,
      },
    }
  },
  illustration: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& img': {
      display: 'block',
      [theme.breakpoints.up('md')]: {
        maxWidth: 400,
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: 480,
      }
    }
  },
  wave: {
    transform: 'translateZ(0)'
  },
  deco: {
    position: 'absolute',
    height: 110,
    bottom: -35,
    left: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      bottom: -20,
    },
    [theme.breakpoints.up('lg')]: {
      bottom: -10,
    },
    '& $wave': {
      position: 'absolute',
      height: '100%',
      width: '100%',
      bottom: 0,
      left: 0,
      backgroundImage: theme.palette.type === 'dark' ? `url(${waveDecoDark})` : `url(${waveDecoLight})`,
      backgroundRepeat: 'repeat-x',
      transform: 'scale(2.5, 1)',
      [theme.breakpoints.down('xs')]: {
        transform: 'scale(6, 1)',
        bottom: 20
      }
    }
  },
  waveOne: {
    opacity: 0.2,
    backgroundPosition: '0 0',
    backgroundSize: '50% 100px',
    animationName: '$move_wave',
    animation: '25s linear infinite'
  },
  waveTwo: {
    opacity: 0.2,
    backgroundPosition: '0 0',
    backgroundSize: '50% 120px',
    animationName: '$move_wave',
    animation: '20s linear infinite'
  },
  waveCover: {
    backgroundSize: '51% 100px',
    backgroundPosition: '397px 0',
    transform: 'scale(2, 1)',
    [theme.breakpoints.down('sm')]: {
      backgroundPosition: 'center bottom'
    },
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none',
    '& h2': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    [theme.breakpoints.down('md')]: {
      width: '100%',
      '& > *': {
        padding: theme.spacing(),
      },
      '& iframe': {
        width: '100%'
      }
    }
  },
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
