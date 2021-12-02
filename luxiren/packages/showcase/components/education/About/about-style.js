import { makeStyles } from '@material-ui/core/styles';
import pattern from '~/public/images/education/bg-pattern.png';

const aboutStyles = makeStyles(theme => ({
  root: {
    background: `url(${pattern}) repeat ${theme.palette.primary.dark}`,
    backgroundSize: '8%',
    position: 'relative',
    color: theme.palette.common.white,
    padding: theme.spacing(15, 0),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(8, 0),
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center',
      padding: theme.spacing(6, 0)
    },
    '& p': {
      marginBottom: theme.spacing(5)
    }
  },
  white: {
    width: 180,
    fontSize: 18,
    background: theme.palette.common.white,
    color: theme.palette.primary.dark,
    [theme.breakpoints.down('sm')]: {
      fontSize: 16
    }
  },
  title: {
    marginBottom: theme.spacing(3),
    '& h3': {
      marginBottom: theme.spacing(),
      position: 'relative',
      fontWeight: theme.typography.fontWeightBold,
      display: 'inline-block',
      '& span': {
        position: 'relative',
      },
      '&:before': {
        content: '""',
        height: 15,
        backgroundColor: theme.palette.secondary.main,
        width: '90%',
        position: 'absolute',
        bottom: 4,
        left: 0,
        zIndex: 0
      }
    }
  },
  illuWrap: {
    position: 'static',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  illustration: {
    boxShadow: '0 0px 18px 0 rgba(0, 0, 0, 0.17)',
    position: 'absolute',
    border: `15px solid ${theme.palette.primary.main}`,
    background: theme.palette.primary.main,
    borderRadius: 25,
    transform: 'rotate(45deg)',
    overflow: 'hidden',
    '& img': {
      height: '105%',
      transform: theme.direction === 'ltr' ? 'translateX(-20%)rotate(-45deg) scale(1.3)' : 'translateX(20%)rotate(-45deg) scale(1.3)'
    }
  },
  one: {
    borderRadius: 15,
    width: 60,
    height: 60,
    top: -10,
    left: 80
  },
  two: {
    width: 180,
    height: 180,
    top: -10,
    left: 280
  },
  three: {
    width: 160,
    height: 160,
    top: 130,
    left: 40
  },
  four: {
    width: 210,
    height: 210,
    bottom: -30,
    left: 230
  },
  five: {
    borderRadius: 15,
    width: 60,
    height: 60,
    bottom: -30,
    right: 10
  }
}));

export default aboutStyles;
