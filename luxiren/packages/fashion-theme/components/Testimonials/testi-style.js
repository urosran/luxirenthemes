import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const testiStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    display: 'flex',
    height: 490,
    overflow: 'hidden',
  },
  item: {
    position: 'relative',
    overflow: 'hidden',
    '&:focus': {
      outline: 'none'
    }
  },
  imgSlider: {
    background: theme.palette.primary.dark,
    width: '50%',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& $item': {
      height: 490,
      '& img': {
        minWidth: '100%',
        height: '100%',
      }
    }
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontFamily: 'Roboto Condensed',
    color: theme.palette.common.white,
  },
  icon: {
    position: 'absolute',
    top: 10,
    right: 0,
    height: 180,
    width: 180,
    opacity: 0.27,
    fill: theme.palette.common.black,
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  divider: {
    width: 135,
    margin: `${theme.spacing(5)}px auto`,
    background: theme.palette.primary.main,
  },
  textSlider: {
    position: 'relative',
    paddingTop: theme.spacing(10),
    background: theme.palette.primary.dark,
    textAlign: 'center',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50%'
    },
    '& $item': {
      color: theme.palette.common.white,
      '& p': {
        padding: theme.spacing(0, 5),
      },
      '& h6': {
        fontWeight: theme.typography.fontWeightBold,
      }
    },
    '& nav': {
      position: 'absolute',
      left: 0,
      bottom: 0,
      background: theme.palette.common.black,
      [theme.breakpoints.up('md')]: {
        background: fade(theme.palette.common.black, 0.27),
      },
    }
  },
  navButton: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    '& svg': {
      fill: theme.palette.primary.main
    }
  },
  carousel: {
    display: 'block',
    marginTop: theme.spacing(6)
  },
  parallaxProps: {
    height: 490,
  }
}));

export default testiStyles;
