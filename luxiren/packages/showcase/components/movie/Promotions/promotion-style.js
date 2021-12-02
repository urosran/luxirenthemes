import { makeStyles } from '@material-ui/core/styles';

const arrowNav = {
  width: 74,
  height: 74,
  top: '50%',
  position: 'absolute',
  display: 'block',
  borderRadius: '50%',
  textAlign: 'center',
  textIndent: '1px',
  zIndex: 0,
  padding: '0 24px'
};

const height = 450;
const heightMobile = 600;

const promotionStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    marginTop: -130,
    zIndex: 12,
    maxWidth: 1000,
    [theme.breakpoints.up('md')]: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '& > div': {
      [theme.breakpoints.down('md')]: {
        padding: 0
      },
    }
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      top: '-70%',
      opacity: 0.2
    },
    '& figure': {
      [theme.breakpoints.up('sm')]: {
        filter: 'blur(20px)'
      },
      margin: 0,
      '& img': {
        width: '100%'
      }
    }
  },
  desc: {
    maxHeight: 130,
    minHeight: 100,
    overflow: 'hidden',
    padding: theme.spacing(1, 0),
    marginBottom: theme.spacing(2),
    '& h6': {
      fontWeight: theme.typography.fontWeightMedium
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  row: {},
  innerBg: {
    width: '100%',
    background: theme.palette.background.paper,
    padding: theme.spacing(6),
    '& $row': {
      zIndex: 2,
      position: 'relative'
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0
    }
  },
  sliderWrap: {
    display: 'block',
    '& a[class*="previousButton"]': {
      left: 20,
      right: 'auto',
      [theme.breakpoints.up('lg')]: {
        left: -40
      },
      [theme.breakpoints.down('md')]: {
        visibility: 'hidden'
      },
      background: theme.palette.type === 'light' ? '#EBEBEB' : theme.palette.common.black,
      ...arrowNav,
    },
    '& a[class*="nextButton"]': {
      right: 20,
      left: 'auto',
      [theme.breakpoints.up('lg')]: {
        right: -40
      },
      [theme.breakpoints.down('md')]: {
        visibility: 'hidden'
      },
      background: theme.palette.type === 'light' ? '#EBEBEB' : theme.palette.common.black,
      ...arrowNav,
    },
    '& > div': {
      zIndex: 1,
      overflow: 'visible',
      height,
      [theme.breakpoints.down('xs')]: {
        height: heightMobile
      },
      '& div[class="track"]': {
        [theme.breakpoints.up('md')]: {
          boxShadow: theme.palette.type === 'light' ? '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)' : '0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)',
          borderRadius: 32
        },
        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        width: '100%',
        height: '100%'
      }
    }
  },
  arrowIcon: {
    color: theme.palette.type === 'light' ? theme.palette.text.primary : theme.palette.common.white,
    display: 'block',
    fontSize: 50,
    lineHeight: '74px',
    transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none',
    marginRight: theme.direction === 'rtl' ? -4 : 0
  },
  item: {
    display: 'flex',
    padding: 0,
    height,
    [theme.breakpoints.down('xs')]: {
      height: heightMobile
    },
    '&:before': {
      display: 'none'
    },
  },
  text: {
    flex: 1,
    textAlign: 'left',
    padding: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height,
    [theme.breakpoints.down('xs')]: {
      height: heightMobile,
      marginTop: 120,
      padding: '200px 16px 16px 16px',
      backgroundImage: theme.palette.type === 'light' ? 'linear-gradient(0deg, rgba(255,255,255,1) 65%, rgba(255,255,255,0) 100%)' : 'linear-gradient(0deg, rgba(48,48,48,1) 65%, rgba(48,48,48,0) 100%)'
    },
    '& h4': {
      fontSize: '2.28rem',
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(),
      width: '100%',
      [theme.breakpoints.down('xs')]: {
        fontSize: 24
      },
      '& span': {
        display: 'block',
        fontWeight: theme.typography.fontWeightMedium,
      }
    }
  },
  property: {
    width: '100%',
    display: 'flex',
    marginBottom: theme.spacing(2)
  },
  star: {
    marginTop: -3,
    marginRight: theme.spacing(2),
    '& span': {
      color: '#FF9500'
    }
  },
  divider: {
    background: 'none',
    border: 'none',
    borderLeft: `1px solid ${theme.palette.text.secondary}`,
    height: 12,
    margin: theme.spacing(0.5, 2),
    display: 'inline-block',
  },
  btnArea: {
    zIndex: 10,
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      flexDirection: 'column',
      '& > *': {
        margin: theme.spacing(0, 0, 2)
      }
    },
    '& > *': {
      marginRight: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing()
      }
    }
  },
  btnText: {
    color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main
  },
  image: {
    textAlign: 'center',
    lineHeight: '360px',
    verticalAlign: 'middle',
    '& figure': {
      width: 250,
      height: 360,
      overflow: 'hidden',
      margin: '0 auto',
      boxShadow: theme.shadows[3],
      borderRadius: theme.rounded.big,
      '& img': {
        width: '100%'
      }
    }
  },
}));

export default promotionStyles;
