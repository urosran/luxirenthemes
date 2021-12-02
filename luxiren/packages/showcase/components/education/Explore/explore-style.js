import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(10, 0),
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(5, 0)
    },
    [theme.breakpoints.up('md')]: {
      backgroundImage: theme.palette.type === 'light' ? `linear-gradient(to left, rgba(255, 255, 255, 0) 20%, ${fade(theme.palette.secondary.light, 0.3)} 10%)` : `linear-gradient(to left, rgba(255, 255, 255, 0) 20%, ${fade(theme.palette.secondary.dark, 0.3)} 10%)`
    },
    '& > *': {
      position: 'relative'
    }
  },
  massonry: {
    marginTop: theme.spacing(5)
  },
  parallaxWrap: {
    position: 'absolute',
    right: 20,
    left: 'auto',
    top: 300,
    height: 500,
    overflow: 'visible',
    width: 500,
    zIndex: 0
  },
  allCategoryCard: {
    boxShadow: 'none',
    borderRadius: 16,
    marginBottom: theme.spacing(3),
    overflow: 'hidden',
    position: 'relative',
    textTransform: 'none !important',
    background: theme.palette.secondary.light,
    textAlign: 'center',
    display: 'flex',
    height: 250,
    [theme.breakpoints.down('xs')]: {
      height: 120,
    },
    '&:hover': {
      '& $property': {
        '& $title': {
          '&:after': {
            width: '100%'
          }
        },
        '& svg': {
          right: -16
        }
      }
    }
  },
  figure: {
    margin: 0,
    display: 'inline-block',
    '& img': {
      width: '100%',
      position: 'relative'
    }
  },
  property: {
    transition: 'all 0.5s cubic-bezier(.01, 1.17, .59, 1.04)',
    background: fade(theme.palette.primary.dark, 0.9),
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: theme.spacing(2, 6),
    bottom: 0,
    textAlign: 'left',
    left: 0,
    color: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      textAlign: 'center',
      bottom: 0,
      '& svg': {
        display: 'none'
      }
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2)
    },
    '& svg': {
      position: 'relative',
      fontSize: 48,
      transition: 'all 0.3s ease-out',
      right: 0,
      transform: theme.dir === 'rtl' ? 'scale(-1)' : 'none'
    },
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 32,
    textTransform: 'uppercase',
    whiteSpace: 'normal',
    position: 'relative',
    display: 'inline-block',
    [theme.breakpoints.down('xs')]: {
      fontSize: 18
    },
    '&:after': {
      content: '""',
      height: 4,
      background: theme.palette.common.white,
      width: '50%',
      position: 'absolute',
      bottom: -10,
      zIndex: 0,
      left: 0,
      transition: 'all 0.3s ease-out',
    }
  },
  cardWrap: {
    position: 'relative'
  },
  fold: {
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      borderRadius: 16,
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
      height: 80,
      left: '50%',
      transform: 'translate(-50%)',
      boxShadow: theme.palette.type === 'light' ? '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)' : '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)'
    },
    '&:before': {
      width: '80%',
      bottom: -25
    },
    '&:after': {
      width: '90%',
      bottom: -15
    }
  }
}));

export default useStyles;
