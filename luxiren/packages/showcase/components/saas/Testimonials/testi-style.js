import { makeStyles } from '@material-ui/core/styles';

const testiStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(8)
    },
    [theme.breakpoints.down('sm')]: {
      background: `linear-gradient(-45deg, ${theme.palette.primary.main} 20%, ${theme.palette.primary.dark} 70%)`
    },
    [theme.breakpoints.down('xs')]: {
      paddingBottom: theme.spacing(10)
    },
  },
  decoration: {
    position: 'absolute',
    top: 0,
    width: 830,
    height: 600,
    left: -200,
    [theme.breakpoints.down('md')]: {
      left: -360
    },
    '& svg': {
      fill: theme.palette.primary.main,
      transform: 'scale(1.2)',
      width: '100%',
      height: '100%'
    }
  },
  title: {
    position: 'relative',
    margin: theme.spacing(0, 3, 8),
    paddingTop: theme.spacing(7),
    color: theme.palette.common.white,
    '& strong': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  sliderWrap: {
    position: 'relative'
  },
  icon: {
    fontSize: 140,
    position: 'absolute',
    color: theme.palette.common.white,
    opacity: 0.15,
    top: theme.spacing(25),
    [theme.breakpoints.up('sm')]: {
      left: theme.spacing(30),
    }
  },
  carousel: {
    [theme.breakpoints.up('lg')]: {
      margin: theme.spacing(0, 2),
    },
    '& div[class*="slick-active"]': {
      '& p': {
        opacity: 1,
        transition: 'all 0.5s cubic-bezier(0.45, 0.05, 0.55, 0.95)',
        transform: 'translate3d(0, 0, 0)',
      }
    },
  },
  item: {
    position: 'relative',
  },
  inner: {
    color: theme.palette.common.white,
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
    '& p': {
      opacity: 0,
      transform: 'translate3d(-10%, 0, 0)',
      marginTop: theme.spacing(5),
      [theme.breakpoints.up('lg')]: {
        marginTop: theme.spacing(10),
      },
      [theme.breakpoints.up('sm')]: {
        width: '60%',
      },
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical',
        height: 75,
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }
  },
  profile: {
    textAlign: 'center',
    padding: theme.spacing(3),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(4, 6)
    }
  },
  avatar: {
    width: 85,
    height: 85,
    margin: '0 auto',
    marginBottom: theme.spacing(3)
  },
  name: {
    fontSize: 18,
    fontWeight: theme.typography.fontWeightMedium,
    '& span': {
      marginTop: theme.spacing(0.5),
      fontSize: 14,
      display: 'block'
    },
  },
  logoWrap: {
    position: 'relative',
  },
  active: {},
  figureBtn: {
    display: 'inline-block',
    padding: theme.spacing(3),
    lineHeight: '150px',
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '30%',
    height: 150,
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2)
    },
    '& img': {
      transition: 'all 0.3s ease-out',
      display: 'block',
      width: '100%',
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
    },
    '& $active, &:hover': {
      '& img': {
        filter: 'none'
      }
    }
  }
}));

export default testiStyles;
