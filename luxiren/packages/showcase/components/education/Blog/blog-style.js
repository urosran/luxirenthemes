import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const featuredStyles = makeStyles(theme => ({
  root: {},
  deco: {
    position: 'absolute',
    width: '80%',
    height: theme.spacing(75),
    left: 0,
    top: theme.spacing(35),
    border: `2px solid ${theme.palette.secondary.main}`,
    borderLeft: 'none',
    borderRadius: '0 100px 100px 0',
    transform: theme.direction === 'rtl' ? 'scale(-1)' : 'none'
  },
  blogList: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(6),
    },
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(5, 0, 0)
    },
  },
  videoWrap: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    [theme.breakpoints.down('xs')]: {
      maxWidth: 320,
      margin: '0 auto'
    }
  },
  videoCarousel: {
    boxShadow: theme.shadows[15],
    background: theme.palette.text.primary,
    height: 420,
    overflow: 'hidden',
    borderRadius: 30,
    position: 'relative',
    zIndex: 5,
    [theme.breakpoints.up('lg ')]: {
      margin: theme.spacing(0, 4),
    },
    [theme.breakpoints.down('sm')]: {
      height: 360
    },
    [theme.breakpoints.down('xs')]: {
      height: 220
    },
    '& ul[class="slick-dots"]': {
      bottom: theme.spacing(4),
      [theme.breakpoints.down('xs')]: {
        visibility: 'hidden'
      },
      '& li': {
        width: 15,
        height: 15,
        background: theme.palette.common.white,
        border: '1px solid #a2a2a2',
        borderRadius: 15,
        transition: 'all 0.5s ease-out',
        '&[class="slick-active"]': {
          width: 40,
        },
        '&:hover': {
          opacity: 0.5
        }
      },
      '& li button:before': {
        display: 'none'
      }
    },
    '& div[class*="slick-active"]': {
      '& $item': {
        opacity: 1,
        transitionDelay: '0.3s',
        '& $playBtn': {
          display: 'block',
          zIndex: 100
        }
      }
    }
  },
  item: {
    overflow: 'hidden',
    background: theme.palette.common.black,
    opacity: 0,
    transition: 'opacity 0.7s ease-out',
    height: 420,
    [theme.breakpoints.down('sm')]: {
      height: 360
    },
    [theme.breakpoints.down('xs')]: {
      height: 220
    },
    '& img': {
      width: '100%',
      minHeight: '100%',
      display: 'block'
    }
  },
  more: {
    fontSize: 18,
    padding: '0 !important',
    marginLeft: -8
  },
  playBtn: {
    borderRadius: 10,
    background: fade(theme.palette.common.black, 0.1),
    backdropFilter: 'saturate(100%) blur(10px)',
    position: 'absolute',
    width: 80,
    height: 80,
    left: 'calc(50% - 40px)',
    top: 'calc(50% - 40px)',
    padding: 0,
    '& svg': {
      fill: theme.palette.common.white,
      width: 80,
      height: 80,
    }
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none'
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4,
  }
}));

export default featuredStyles;
