import { makeStyles } from '@material-ui/core/styles';
import { lighten, darken } from '@material-ui/core/styles/colorManipulator';
import buildingDecoLight from '~/public/images/hosting/building_deco_light.png';
import buildingDecoDark from '~/public/images/hosting/building_deco_dark.png';

const promotionStyles = makeStyles(theme => ({
  cloudTop: {
    width: '100%',
    height: 240,
    position: 'absolute',
    top: -250,
    transform: 'scale(1.1)',
    left: 0,
    '& svg': {
      height: '100%',
      width: '100%',
      fill: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.3) : lighten(theme.palette.primary.light, 0.6),
    }
  },
  root: {
    background: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.3) : lighten(theme.palette.primary.light, 0.6),
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 3),
    },
    '&:before': {
      content: '""',
      background: theme.palette.type === 'dark' ? darken(theme.palette.primary.dark, 0.3) : lighten(theme.palette.primary.light, 0.6),
      position: 'absolute',
      left: '-10%',
      borderRadius: '50%',
      top: -70,
      width: '120%',
      height: 350,
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      }
    },
    '&:after': {
      background: `url(${theme.palette.type === 'dark' ? buildingDecoDark : buildingDecoLight}) repeat-x bottom center`,
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: -20,
      width: '100%',
      height: 150,
    }
  },
  sliderWrap: {
    position: 'relative',
    top: theme.spacing(-8),
    '& a[class="previousButton"]': {
      left: 10,
      '&:hover': {
        left: 0
      }
    },
    '& a[class="nextButton"]': {
      right: 10,
      '&:hover': {
        right: 0
      }
    },
    '& > div': {
      height: theme.spacing(35),
      [theme.breakpoints.down('xs')]: {
        height: 200
      },
      '& > a': {
        zIndex: 11,
        background: 'none !important',
        position: 'absolute',
        transition: 'all 0.3s ease',
        top: '40%',
        '& svg': {
          width: 40,
          height: 40,
          position: 'absolute',
          left: 0,
          top: 0,
          fill: theme.palette.text.secondary
        }
      }
    },
    '& [class="slider-wrapper"]': {
      '& a': {
        [theme.breakpoints.down('sm')]: {
          display: 'none'
        }
      }
    }
  },
  text: {},
  time: {},
  promoImage: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  item: {
    height: theme.spacing(35),
    zIndex: 10,
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(-1, 2, 0),
    },
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    },
    '& figure': {
      opacity: 0,
      margin: '20px auto',
      transform: 'scale(0.7)',
      background: theme.palette.secondary.light,
      borderRadius: '50%',
      width: 200,
      height: 200,
      lineHeight: '200px',
      textAlign: 'center',
      '& img': {
        verticalAlign: 'middle',
        maxWidth: 200,
        maxHeight: 200,
      }
    },
    '& $text': {
      padding: theme.spacing(2, 8, 1, 2),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(1)
      }
    },
    '& h1': {
      color: theme.palette.secondary.main,
      lineHeight: '36px',
      marginBottom: theme.spacing(3),
      '& button': {
        fontSize: 28,
        lineHeight: '36px',
        fontFamily: 'Montserrat',
        fontWeight: theme.typography.fontWeightBold,
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
          textAlign: 'center',
          fontSize: 20,
          lineHeight: '28px',
        }
      },
      [theme.breakpoints.down('xs')]: {
        whiteSpace: 'normal',
        lineHeight: '32px'
      },
    },
    '& p': {
      marginBottom: theme.spacing(2)
    },
    '& $time': {
      '& span': {
        color: theme.palette.text.secondary
      }
    },
    '&:before': {
      display: 'none'
    }
  }
}));

export default promotionStyles;
