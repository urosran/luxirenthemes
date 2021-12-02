import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';
import greenBuble from '~/public/images/medical/green_buble.png';
import blueBuble from '~/public/images/medical/blue_buble.png';
import redBuble from '~/public/images/medical/red_buble.png';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    },
    '& h4': {
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(-3)
      }
    }
  },
  background: {
    fill: theme.palette.type === 'dark' ? darken(theme.palette.primary.light, 0.8) : lighten(theme.palette.primary.light, 0.8),
    width: 560,
    height: 560,
    top: theme.spacing(100),
    left: '20%',
    position: 'absolute',
    transform: 'scale(3)',
    [theme.breakpoints.down('sm')]: {
      top: theme.spacing(80),
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  titleDeco: {
    position: 'relative',
    display: 'inline-block'
  },
  decoration: {
    width: 600,
    height: 600,
    top: -150,
    right: -150,
    borderRadius: '50%',
    position: 'absolute',
    border: `1px solid ${theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark}`,
  },
  desc: {
    lineHeight: '32px',
    padding: theme.spacing(4, 0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(4),
    }
  },
  parallaxWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    '& span': {
      backgroundSize: '100%',
      position: 'absolute',
    },
    '& > div > div': {
      position: 'absolute'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  iconGreen: {
    top: -230,
    left: -100,
    width: 320,
    height: 600,
    background: `url(${greenBuble}) no-repeat`,
  },
  iconRed: {
    width: 560,
    height: 560,
    left: -200,
    top: 150,
    background: `url(${redBuble}) no-repeat`,
  },
  iconBlue: {
    width: 560,
    height: 560,
    left: 140,
    top: 150,
    background: `url(${blueBuble}) no-repeat`,
  },
  runningTag: {
    position: 'relative',
    height: 130,
    padding: theme.spacing(0, 4),
    '& div[class*="slick-active"]': {
      '& $tagItem': {
        background: theme.palette.primary.main,
        color: theme.palette.common.white,
        borderColor: theme.palette.primary.main,
      }
    },
    '& div[class*="slick-current"]': {
      '& $tagItem': {
        background: 'none !important',
        color: `${theme.palette.text.primary} !important`,
        borderColor: `${theme.palette.divider} !important`,
      }
    },
  },
  tagItem: {
    display: 'inline-block',
    borderRadius: 40,
    textTransform: 'capitalize',
    transition: 'all 0.3s ease-in',
    border: `1px solid ${theme.palette.divider}`,
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1.5),
    padding: theme.spacing(0.5),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0.5, 4),
    },
  },
  tagGroup: {
    display: 'block',
    '&:focus': {
      outline: 'none'
    }
  },
}));

export default useStyles;
