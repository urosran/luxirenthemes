import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import bgChart from '~/public/images/hosting/chart_bg.png';

const featureStyles = makeStyles(theme => ({
  last: {},
  mainFeature: {
    textAlign: 'center',
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(5),
    },
    '& figure': {
      background: fade(theme.palette.secondary.light, 0.5),
      width: 120,
      height: 120,
      margin: '0 auto',
      borderRadius: '50%',
      marginBottom: theme.spacing(6),
    },
    '& img': {
      position: 'relative',
      height: 160,
      left: '-50%',
      top: '-50%',
      transform: 'translate(25%, 25%)',
    },
    '& h6': {
      marginBottom: theme.spacing(2),
      fontWeight: theme.typography.fontWeightBold,
    },
    '& $item': {
      opacity: 1
    }
  },
  grid: {
    marginTop: theme.spacing(5)
  },
  divider: {},
  moreFeature: {
    position: 'relative',
    '& figure': {
      margin: 0
    },
    '& $divider': {
      border: 'none',
      display: 'block',
      background: 'none',
      margin: theme.spacing(5, 0),
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(10, 0),
      },
      '&:before': {
        content: '""',
        background: theme.palette.divider,
        width: 80,
        height: 8,
        borderRadius: 8,
        left: '50%',
        marginLeft: -40,
        position: 'absolute',
        [theme.breakpoints.up('md')]: {
          marginLeft: -60,
        }
      },
      '&:after': {
        content: '""',
        background: theme.palette.divider,
        width: 20,
        height: 8,
        left: '50%',
        marginLeft: 25,
        borderRadius: 8,
        position: 'absolute',
        [theme.breakpoints.down('xs')]: {
          display: 'none'
        }
      }
    }
  },
  chartDeco: {
    width: '100%',
    height: 420,
    bottom: 0,
    position: 'absolute',
    background: `url(${bgChart}) no-repeat center bottom`,
    backgroundSize: 'cover',
  },
  item: {
    position: 'relative',
    padding: theme.spacing(0, 3),
    '&$last': {
      '& figure': {
        marginTop: theme.spacing(10)
      }
    },
    '& p': {
      marginBottom: theme.spacing(3),
    }
  },
  text: {
    margin: theme.spacing(8, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0)
    }
  },
  illustration: {
    '& img': {
      display: 'block',
      margin: '0 auto',
      maxWidth: '100%',
      [theme.breakpoints.only('sm')]: {
        maxWidth: 400,
      },
      [theme.breakpoints.only('xs')]: {
        maxWidth: 300,
        width: '100%'
      }
    }
  }
}));

export default featureStyles;
