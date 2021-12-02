import { makeStyles } from '@material-ui/core/styles';

const titleBase = {
  fontWeight: 900,
  textTransform: 'capitalize',
  marginBottom: 40,
  position: 'relative'
};

const titleStyles = makeStyles(theme => ({
  default: {
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 4)
    }
  },
  primary: {
    fontSize: 48,
    lineHeight: '62px',
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
      lineHeight: '50px'
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginBottom: theme.spacing(4),
      color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.primary.dark
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
      lineHeight: '42px'
    },
    ...titleBase,
  },
  secondary: {
    color: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.dark,
    fontSize: 48,
    lineHeight: '62px',
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
      lineHeight: '50px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 32,
      lineHeight: '42px'
    },
    ...titleBase
  },
  bgImg: {},
  deco: {
    position: 'relative',
    display: 'inline-block',
    '& h3': {
      overflow: 'hidden',
      color: theme.palette.common.white,
      padding: theme.spacing(4),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      position: 'relative',
      textTransform: 'capitalize',
      fontSize: 48,
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.up('md')]: {
        borderRadius: '50%',
        width: 300,
        height: 300,
        backgroundColor: theme.palette.primary.main,
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'left center',
        '&$bgImg': {
          '&:before': {
            content: '""',
            height: '100%',
            width: '100%',
            background: '#3B3B3B',
            opacity: 0.38,
            position: 'absolute',
            top: 0,
            left: 0,
          }
        },
        '& span': {
          position: 'relative'
        }
      },
      [theme.breakpoints.down('md')]: {
        fontSize: 38,
        lineHeight: '50px'
      },
      [theme.breakpoints.down('sm')]: {
        background: 'none !important',
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
        width: 'auto',
        textAlign: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 32,
        lineHeight: '42px'
      },
    },
    '&:before': {
      content: '""',
      width: 400,
      height: 400,
      top: -50,
      left: -50,
      borderRadius: '50%',
      border: `1px solid ${theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark}`,
      position: 'absolute',
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
    }
  },
  iconDeco: {
    [theme.breakpoints.up('lg')]: {
      width: 350,
    },
    '& h3': {
      color: theme.palette.type === 'dark' ? theme.palette.common.white : theme.palette.primary.dark,
      textTransform: 'capitalize',
      width: 200,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 48,
      lineHeight: '62px',
      position: 'relative',
      [theme.breakpoints.down('md')]: {
        fontSize: 38,
        lineHeight: '50px',
        width: '100%',
        textAlign: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 32,
        lineHeight: '42px',
      }
    }
  },
  icon: {
    position: 'relative',
    fontSize: '80px !important',
    color: 'transparent',
    '-webkit-text-stroke': `2px ${theme.palette.primary.main}`,
    display: 'block',
    margin: theme.spacing(18, 0, 3),
    textAlign: 'left',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  capsul: {
    width: 900,
    height: 500,
    borderRadius: 500,
    position: 'absolute',
    opacity: 0.75,
    top: 80,
    backgroundImage: theme.palette.type === 'light' ? `linear-gradient(144deg, ${theme.palette.primary.light} 0%, ${theme.palette.secondary.light} 100%)` : `linear-gradient(144deg, ${theme.palette.primary.dark} 0%, ${theme.palette.secondary.dark} 100%)`,
    right: -250,
    transform: theme.direction === 'rtl' ? 'rotate(30deg)' : 'rotate(-30deg)'
  },
  circle: {
    width: 700,
    height: 700,
    top: 50,
    right: 10,
    borderRadius: '50%',
    border: `1px solid ${theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark}`,
    position: 'absolute',
  }
}));

export default titleStyles;
