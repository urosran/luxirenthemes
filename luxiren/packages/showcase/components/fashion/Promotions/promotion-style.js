import { makeStyles } from '@material-ui/core/styles';

const arrowNav = {
  width: 60,
  top: 225,
  position: 'absolute',
  display: 'block',
};

const promotionStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    marginTop: -200,
    zIndex: 12,
    '& > div': {
      [theme.breakpoints.down('md')]: {
        padding: 0
      }
    }
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 0.2,
    '& figure': {
      margin: 0
    }
  },
  desc: {
    padding: theme.spacing(),
  },
  innerBg: {
    width: '100%'
  },
  arrowIcon: {
    fill: 'rgba(0, 0, 0, 0.87)',
    position: 'absolute',
    display: 'block',
    width: 60,
    height: 60,
    left: 0,
    bottom: 170,
  },
  sliderWrap: {
    display: 'block',
    '& a[class*="previousButton"]': {
      background: theme.palette.secondary.light,
      left: 20,
      height: 450,
      [theme.breakpoints.up('sm')]: {
        height: 420,
      },
      ...arrowNav,
    },
    '& a[class*="nextButton"]': {
      background: theme.palette.primary.light,
      right: 20,
      height: 450,
      [theme.breakpoints.up('sm')]: {
        height: 420,
      },
      ...arrowNav,
    },
    '& a': {
      [theme.breakpoints.down('xs')]: {
        visibility: 'hidden'
      }
    },
    '& > div': {
      height: 450,
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(0, 10),
      },
      '& div[class="track"]': {
        position: 'relative',
        display: 'block',
        overflow: 'hidden',
        width: '100%',
        height: '100%'
      },
      '& $item:nth-child(odd)': {
        '& $innerBg': {
          background: theme.palette.primary.dark,
        },
        '& $desc': {
          '& span': {
            background: theme.palette.secondary.main
          }
        },
      },
      '& $item:nth-child(even)': {
        '& $innerBg': {
          background: theme.palette.secondary.dark,
        },
        '& $desc': {
          '& span': {
            background: theme.palette.primary.main
          }
        },
      }
    }
  },
  item: {
    display: 'flex',
    padding: 0,
    height: 450,
    '&:before': {
      display: 'none'
    },
  },
  text: {
    flex: 1,
    padding: theme.spacing(4, 3),
    color: theme.palette.common.white,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 450,
    '& h2': {
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(3),
      '& span': {
        display: 'block',
        fontWeight: theme.typography.fontWeightRegular,
      }
    },
    '& h4': {
      marginBottom: theme.spacing(3)
    }
  },
  button: {
    marginTop: theme.spacing(3),
    color: theme.palette.common.white,
    border: '1px solid #fff',
    width: 200
  },
  iconBtn: {
    marginLeft: theme.spacing()
  },
  image: {
    height: '100%',
    '& figure': {
      margin: 0,
      height: '100%',
      '& img': {
        minWidth: '100%',
        minHeight: '100%'
      }
    }
  },
}));

export default promotionStyles;
