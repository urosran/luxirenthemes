import { makeStyles } from '@material-ui/core/styles';
import footerDecoLight from '~/public/images/movie/footer-deco-light.svg';
import footerDecoDark from '~/public/images/movie/footer-deco-dark.svg';

const footerStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1, 1.5),
  },
  invert: {},
  footer: {
    position: 'relative',
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
    color: theme.direction === 'ltr' ? theme.palette.common.white : theme.palette.text.primary,
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.text.primary
    },
    '&$invert': {
      color: theme.palette.text.primary,
      '& $logo': {
        '& h6': {
          color: theme.palette.text.primary
        }
      }
    },
    '& ul': {
      margin: 0,
      padding: 0,
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      '& a': {
        fontSize: 14,
        textDecoration: 'none !important',
        color: theme.palette.text.primary,
        '&:hover': {
          opacity: 0.7
        }
      }
    },
    '& $accordionRoot': {
      margin: '0 auto',
      marginTop: theme.spacing(2),
    },
  },
  title: {
    color: theme.palette.text.primary,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold,
  },
  logo: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    '& img': {
      width: 64
    },
    '& h6': {
      '[dir="ltr"] &': {
        color: theme.palette.common.white
      },
      [theme.breakpoints.down('sm')]: {
        color: theme.palette.text.primary + '!important'
      }
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14,
    marginBottom: theme.spacing(2)
  },
  socmed: {
    display: 'flex',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center'
    },
    '& button': {
      margin: theme.spacing(),
      background: 'rgba(0, 0, 0, 0.12)',
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.common.white
      }
    },
    '& i': {
      fontSize: 24,
    }
  },
  icon: {
    '& + div': {
      background: 'none !important',
      padding: theme.spacing(1.5, 1.5, 1.5, 4),
      width: 'calc(100% - 32px)',
    }
  },
  selectLang: {
    width: 212,
    display: 'inherit',
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      margin: '16px auto 48px'
    },
    '& $icon': {
      top: 21,
      position: 'relative',
    },
    '& svg': {
      color: theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.common.white,
    },
    '& fieldset': {
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.common.white} !important`,
      color: theme.palette.type === 'light' ? theme.palette.secondary.main : theme.palette.common.white,
      '& legend': {
        top: 6,
        position: 'relative',
        borderTop: `1px solid ${theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.secondary.main}`
      }
    }
  },
  siteMapItem: {
    [theme.breakpoints.down('md')]: {
      paddingBottom: '0 !important',
      paddingTop: '0 !important',
    }
  },
  accordionRoot: {
    background: 'none',
    boxShadow: 'none',
    color: theme.palette.common.white,
    maxWidth: 480,
    '& svg': {
      fill: theme.palette.common.white,
      [theme.breakpoints.down('sm')]: {
        fill: theme.palette.text.primary
      }
    },
    [theme.breakpoints.down('sm')]: {
      color: theme.palette.text.primary
    },
  },
  accordionContent: {
    margin: 0
  },
  accordionIcon: {
    padding: 0
  },
  footerDeco: {
    position: 'relative',
    top: 0,
    backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
    paddingTop: theme.spacing(40),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(30),
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(20),
    },
    '&:before': {
      background: `url(${theme.palette.type === 'dark' ? footerDecoDark : footerDecoLight}) top left no-repeat`,
      backgroundSize: '100% auto',
      top: -3,
      left: 0,
      content: '""',
      width: '100%',
      height: 270,
      position: 'absolute',
      zIndex: 10
    }
  },
  decoration: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    display: theme.direction === 'rtl' ? 'none' : 'block',
    clip: 'rect(0, auto, auto, 0)',
    '& svg': {
      position: 'fixed',
    }
  },
  lineDeco: {
    left: 'auto',
    right: 0,
    width: 180,
    height: '100%',
    position: 'absolute',
    background: `linear-gradient(145deg, ${theme.palette.secondary.main} 40%, ${theme.palette.primary.main} 80%)`,
    '@media screen and (min-width: 1400px)': {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  leftDeco: {
    top: 0,
    fill: theme.palette.primary.main,
    left: -150,
    width: 1200,
    height: 1500,
    transform: 'scale(0.5)',
    transformOrigin: 'top left',
    display: theme.direction === 'rtl' ? 'none' : 'inherit',
    '@media screen and (min-width: 1400px) &': {
      left: 0
    },
    [theme.breakpoints.down('md')]: {
      left: -200
    },
    [theme.breakpoints.down('sm')]: {
      left: -200
    },
  },
  rightDecoBefore: {
    top: -540,
    right: -50,
    left: 'auto',
    fill: theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
    height: 1500,
    transform: 'scale(0.55, 0.6) rotate(180deg)',
    transformOrigin: 'center center'
  },
  rightDeco: {
    top: -10,
    fill: theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
    left: theme.direction === 'rtl' ? -150 : 'auto',
    right: theme.direction === 'rtl' ? 'auto' : 0,
    height: 1500,
    transform: 'scale(0.5, 0.6)',
    transformOrigin: 'top right',
  },
  action: {
    textAlign: 'center',
    padding: theme.spacing(0, 2),
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(6)
    }
  }
}));

export default footerStyles;
