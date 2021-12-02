import { makeStyles } from '@material-ui/core/styles';

const contactStyles = makeStyles(theme => ({
  formWrap: {
    marginTop: theme.spacing(10),
    position: 'relative',
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '& h3': {
      fontFamily: 'Roboto Condensed',
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      [theme.breakpoints.down('md')]: {
        fontSize: 36
      }
    }
  },
  logoHeader: {},
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(5),
    '&$logoHeader': {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    },
    '& img': {
      width: 64
    },
    '& p, span': {
      display: 'block',
      fontSize: 24,
      paddingBottom: 4,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  desc: {
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
      padding: theme.spacing(0, 10),
    }
  },
  input: {
    width: '100%'
  },
  form: {
    textAlign: 'left',
    position: 'relative',
    marginTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 15, 10),
    }
  },
  btnArea: {
    marginTop: theme.spacing(5),
    '& label': {
      position: 'relative',
      textAlign: 'left'
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      '& button': {
        marginTop: theme.spacing(5)
      }
    },
    '& span': {
      '& a': {
        color: theme.palette.primary.main
      }
    }
  },
  decoration: {
    position: 'fixed',
    width: '100%',
    height: '120%',
    top: 0,
    left: 0,
    overflow: 'hidden',
  },
  primary: {
    background: theme.palette.primary.main,
    position: 'absolute',
    opacity: 0.08,
    transform: 'rotate(45deg)',
  },
  secondary: {
    background: theme.palette.secondary.main,
    position: 'absolute',
    opacity: 0.1,
    transform: 'rotate(45deg)',
  },
  decoTop: {
    '& $primary': {
      borderRadius: 80,
      width: 405,
      height: 405,
      top: -200,
      right: -50,
    },
    '& $secondary': {
      borderRadius: 40,
      width: 205,
      height: 205,
      top: 24,
      right: -100,
    }
  },
  decoBottom: {
    '& $primary': {
      borderRadius: 40,
      width: 205,
      height: 205,
      bottom: 180,
      left: -110,
    },
    '& $secondary': {
      borderRadius: 80,
      width: 405,
      height: 405,
      bottom: -100,
      left: -100,
    }
  },
  rightIcon: {
    marginLeft: theme.spacing()
  },
  backtohome: {
    width: 80,
    height: 80,
    position: 'absolute',
    left: 60,
    top: -60,
    [theme.breakpoints.down('sm')]: {
      left: 'calc(50% - 40px)',
      top: -120,
    },
    '& i': {
      fontSize: 36,
      color: theme.palette.text.disabled
    },
    '& > span i:first-child': {
      opacity: 1,
      transition: 'opacity 0.3s ease'
    },
    '& > span i:last-child': {
      position: 'absolute',
      right: 0,
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      '& > span i:first-child': {
        opacity: 0,
      },
      '& > span i:last-child': {
        right: 28,
        opacity: 1,
      },
    }
  }
}));

export default contactStyles;
