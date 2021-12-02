import { makeStyles } from '@material-ui/core/styles';

const overlay = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  display: 'flex',
  padding: 40,
  top: 0,
  left: 0,
  fontSize: 28
};

const trendingStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  overlay: {},
  grid25: {
    position: 'relative',
    overflow: 'hidden',
    height: 300,
    [theme.breakpoints.up('sm')]: {
      borderRadius: theme.rounded.big,
      width: '31%',
      margin: '0 1%'
    },
    [theme.breakpoints.up('lg')]: {
      height: 350,
      margin: '0 1%',
      width: '23%'
    },
    '&:hover': {
      '& img': {
        transform: 'translateX(0px)'
      }
    },
    '& img': {
      transition: 'all 0.3s',
      transform: 'translateX(-10px)',
      minHeight: '100%',
      width: 'calc(100% + 20px)',
    },
    '& $overlay': {
      ...overlay,
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        opacity: 0.5,
        backgroundImage: `linear-gradient(-44deg, ${theme.palette.primary.main} 6%, ${theme.palette.secondary.main} 100%)`
      }
    },
    '& h5': {
      textTransform: 'uppercase',
      position: 'absolute',
      textAlign: 'center',
      bottom: 50,
      width: '100%',
      left: 0,
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
      padding: theme.spacing(5),
      whiteSpace: 'normal'
    }
  },
  grid50: {
    position: 'relative',
    overflow: 'hidden',
    height: 300,
    background: theme.palette.secondary.main,
    [theme.breakpoints.up('sm')]: {
      borderRadius: theme.rounded.big,
      width: '33%',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '50%',
      height: 350,
    },
    '&:hover': {
      '& img': {
        transform: 'scale(1.1)'
      }
    },
    '& img': {
      transition: 'all 0.3s',
      height: '100%',
      minWidth: '100%',
      opacity: 0.45,
    },
    '& $overlay': {
      backgroundImage: 'linear-gradient(270deg, rgba(0, 0, 0, 0.64), transparent)',
      alignItems: 'flex-end',
      justifyContent: 'center',
      flexDirection: 'column',
      [theme.breakpoints.down('sm')]: {
        alignItems: 'center'
      },
      ...overlay
    },
    '& h3': {
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: '1.7em',
      lineHeight: '48px',
      '& i': {
        marginRight: theme.spacing(2)
      },
      '& span': {
        textTransform: 'none',
        display: 'block',
        letterSpacing: 1.6
      }
    }
  }
}));

export default trendingStyles;
