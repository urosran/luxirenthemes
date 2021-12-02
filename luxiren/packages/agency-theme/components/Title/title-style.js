import { makeStyles } from '@material-ui/core/styles';

const titleBase = {
  fontFamily: 'Roboto Condensed',
  textTransform: 'capitalize',
  fontWeight: 'bold',
  marginBottom: 64,
  position: 'relative'
};

const titleStyles = makeStyles(theme => ({
  default: {
    padding: theme.spacing(0, 4),
  },
  primary: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
    fontSize: 48,
    lineHeight: '62px',
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
      lineHeight: '50px'
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginBottom: theme.spacing(4)
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
  deco: {
    position: 'relative',
    '& h3': {
      fontFamily: 'Roboto Condensed',
      color: theme.palette.common.white,
      width: 120,
      position: 'relative',
      textTransform: 'capitalize',
      paddingLeft: 20,
      fontSize: 48,
      fontWeight: 700,
      lineHeight: '62px',
      [theme.breakpoints.up('lg')]: {
        height: 160,
        marginLeft: theme.spacing(3),
      },
      [theme.breakpoints.up('md')]: {
        paddingTop: 40,
        marginTop: theme.spacing(10),
      },
      [theme.breakpoints.only('md')]: {
        marginLeft: theme.spacing(7)
      },
      [theme.breakpoints.down('md')]: {
        fontSize: 38,
        lineHeight: '50px'
      },
      [theme.breakpoints.down('sm')]: {
        paddingLeft: 0,
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
      width: 210,
      height: 210,
      background: theme.palette.primary.main,
      borderRadius: 24,
      transform: 'rotate(45deg)',
      position: 'absolute',
      top: 0,
      left: 0,
      [theme.breakpoints.down('md')]: {
        left: theme.spacing(3)
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      },
    }
  },
  extend: {},
  iconDeco: {
    [theme.breakpoints.up('lg')]: {
      width: 350,
    },
    '&:before': {
      content: '""',
      width: 480,
      height: 480,
      background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
      borderRadius: 24,
      transform: 'rotate(45deg)',
      position: 'absolute',
      top: theme.spacing(15),
      right: theme.spacing(10),
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    '&$extend': {
      '&:before': {
        boxShadow: `-30px 20px 0px 0px ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light}`
      }
    },
    '& h3': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      fontWeight: 700,
      textTransform: 'capitalize',
      width: 200,
      fontFamily: 'Roboto Condensed',
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
    fontSize: '100px !important',
    color: theme.palette.secondary.light,
    display: 'block',
    margin: theme.spacing(20, 0, 3),
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  }
}));

export default titleStyles;
