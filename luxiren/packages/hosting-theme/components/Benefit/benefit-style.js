import { makeStyles } from '@material-ui/core/styles';
import img from '~/public/images/imgAPI';

const benefitStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: theme.palette.primary.dark,
    '& > div > img': {
      opacity: 0.25,
    }
  },
  parallaxImg: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.3,
    left: 0,
    [theme.breakpoints.up('md')]: {
      top: '-70%',
    },
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${img.hosting[3]})`,
      backgroundRepeat: 'no-repeat',
    },
    '& figure': {
      margin: 0,
      '& img': {
        filter: 'blur(8px)'
      }
    }
  },
  wrapper: {
    position: 'relative',
    paddingTop: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
    }
  },
  desc: {
    padding: theme.spacing(0, 0, 8, 3),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 3, 8, 3),
      '& button': {
        width: '100%'
      }
    }
  },
  list: {
    display: 'block',
    listStyle: 'disc',
    paddingLeft: theme.spacing(2),
    marginBottom: theme.spacing(5),
    color: theme.palette.common.white,
    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
    },
    [theme.breakpoints.down('xs')]: {
      padding: 0
    },
    '& li': {
      lineHeight: '38px',
    }
  },
  img: {
    margin: theme.spacing(3, 0, 0, 0),
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
      textAlign: 'right',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      height: '100%'
    },
    '& img': {
      maxWidth: '100%',
      display: 'block',
      [theme.breakpoints.down('sm')]: {
        width: '80%',
      }
    }
  }
}));

export default benefitStyles;
