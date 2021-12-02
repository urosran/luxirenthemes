import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import imgAPI from '~/public/images/imgAPI';

const decoCircle = {
  width: 915,
  height: 915,
  position: 'absolute',
  borderRadius: '50%'
};

const useStyles = makeStyles(theme => ({
  decoTop: {},
  decoBottom: {},
  heroContent: {
    position: 'relative',
    '& > div': {
      paddingLeft: 0,
      paddingRight: 0
    },
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(6),
      marginBottom: 0
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: 0,
      paddingBottom: theme.spacing(15)
    },
  },
  bannerText: {
    position: 'relative',
    zIndex: 10,
    color: theme.palette.text.primary,
    padding: theme.spacing(4, 0),
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(4),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4),
      maxWidth: 640,
      margin: '0 auto',
      textAlign: 'center',
      color: theme.palette.common.white,
    }
  },
  title: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(15),
    },
    '& h3': {
      fontWeight: theme.typography.fontWeightBold,
    }
  },
  textHelper: {
    display: 'inline-block',
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(10)
    }
  },
  secondRow: {
    display: 'flex',
    alignItems: 'center'
  },
  subtitle: {
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(8)
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(5),
    }
  },
  icon: {
    marginLeft: theme.spacing(),
    transform: theme.direction === 'rtl' ? 'transform: rotate(180deg)' : 'none'
  },
  mobileCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 0,
    height: '100%',
    background: theme.palette.common.black,
    '& img': {
      minWidth: '100%',
      height: '100%',
      opacity: 0.5
    }
  },
  menuBg: {},
  videoBg: {},
  decoBanner: {
    [theme.breakpoints.up('md')]: {
      opacity: 0.5
    },
    '& $menuBg': {
      top: -670,
      right: -50,
      ...decoCircle,
      backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
      [theme.breakpoints.down('sm')]: {
        top: -270,
        backgroundImage: `url(${imgAPI.medical[13]})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top center',
        overflow: 'hidden',
        '&:after': {
          content: '""',
          position: 'absolute',
          background: 'rgba(0, 0, 0, 0.6)',
          width: '100%',
          height: '100%'
        }
      }
    },
    '& $videoBg': {
      top: -280,
      right: -380,
      ...decoCircle,
      opacity: theme.palette.type === 'light' ? 0.45 : 0.8,
      backgroundImage: theme.palette.type === 'light' ? `linear-gradient(95deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 110%)` : `linear-gradient(95deg,  ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 110%)`,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    }
  },
  parallaxBanner: {
    position: 'absolute',
    top: 100,
    left: -40,
    width: 300,
    height: 400,
    zIndex: 10,
    transform: 'scale(0.4)',
    transformOrigin: 'top left',
    '& > div': {
      top: 100,
      '& svg': {
        opacity: 0.4,
        width: 600,
        height: 900
      }
    }
  },
  videoWrap: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '50%',
    borderTopLeftRadius: 0,
    width: 450,
    height: 450,
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  videoFigure: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  },
  video: {},
  visualContent: {
    [theme.breakpoints.up('md')]: {
      position: 'relative'
    }
  },
  innerFigure: {
    background: theme.palette.primary.main,
    width: '100%',
    height: '100%',
    position: 'relative',
    '& img': {
      display: 'block',
      height: '100%',
      zIndex: 2,
      position: 'relative'
    },
    '& $video': {
      display: 'block',
      width: '100%',
      top: 98,
      position: 'absolute',
      left: 30,
      '& iframe': {
        position: 'relative',
        top: -120,
        left: -180,
        height: 640
      }
    },
    '&:hover': {
      '& $btnPlay': {
        opacity: 1
      }
    }
  },
  btnPlay: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    zIndex: 20,
    width: 80,
    height: 80,
    opacity: 0,
    transition: 'opacity 0.5s ease',
    background: '#FFF !important',
    boxShadow: theme.shadows[3],
    '& svg': {
      width: 50,
      height: 50,
      fill: theme.palette.primary.main
    }
  },
  searchBanner: {
    position: 'relative',
    marginTop: theme.spacing(3),
    fontSize: 18,
    overflow: 'visible',
    borderRadius: 75,
    [theme.breakpoints.up('md')]: {
      width: 700
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(4),
    }
  },
  search: {
    fontSize: 18,
    width: '100%',
    '& input': {
      borderRadius: 75,
      padding: theme.spacing(4, 7, 3, 2),
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
  button: {
    width: 160,
    height: 48,
    [theme.breakpoints.down('xs')]: {
      padding: 2,
      minWidth: 0,
      width: 50,
      boxShadow: 'none',
      background: 'none',
      color: theme.palette.primary.main
    }
  },
}));

export default useStyles;
