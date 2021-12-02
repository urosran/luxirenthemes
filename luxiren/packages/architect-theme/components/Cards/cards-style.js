import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import crossDeco from '~/public/images/architect/cross-deco-light.png';

const cardsStyles = makeStyles(theme => ({
  generalCard: {
    position: 'relative',
    width: 270,
    height: 345,
    '& figure': {
      margin: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      '& img': {
        width: '100%',
        minHeight: '100%'
      }
    }
  },
  desc: {
    width: 235,
    position: 'absolute',
    bottom: theme.spacing(-3),
    left: 20,
    padding: theme.spacing(2.5),
    backdropFilter: 'saturate(90%) blur(10px)',
    background: fade(theme.palette.background.paper, 0.7),
    shadow: theme.shadows[8],
    '& h6': {
      marginBottom: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold
    }
  },
  button: {
    bottom: -36,
    margin: '0 auto',
    width: 120,
    display: 'inherit',
  },
  profileCard: {
    color: theme.palette.text.secondary,
    textTransform: 'capitalize',
    margin: `0 auto ${theme.spacing(5)}px`,
    [theme.breakpoints.up('sm')]: {
      width: 275,
      marginBottom: theme.spacing(10),
    },
    '& h5': {
      marginTop: theme.spacing(2),
      color: theme.palette.text.primary
    }
  },
  paper: {
    background: `url(${theme.palette.type === 'dark' ? '/images/architect/bg-team-dark.jpg' : '/images/architect/bg-team.jpg'}) repeat`,
    position: 'relative',
    display: 'flex',
    alignItems: 'flex-end',
    height: 270,
    [theme.breakpoints.up('sm')]: {
      width: 215,
    },
    [theme.breakpoints.down('xs')]: {
      overflow: 'hidden',
      height: 180,
    },
    '& img': {
      position: 'relative',
      zIndex: 10,
      [theme.breakpoints.up('sm')]: {
        height: 315,
        marginLeft: theme.spacing(5),
      },
      [theme.breakpoints.down('xs')]: {
        height: '100%',
        margin: '0 auto',
        top: theme.spacing()
      }
    },
    '&:after': {
      content: '""',
      width: 190,
      height: 215,
      background: `url(${crossDeco}) repeat transparent 15px -15px`,
      position: 'absolute',
      bottom: 0,
      right: theme.spacing(-10),
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    }
  },
}));

export default cardsStyles;
