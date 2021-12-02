import { makeStyles } from '@material-ui/core/styles';
import imgAPI from '~/public/images/imgAPI';

const timelineStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      background: `url(${theme.palette.type === 'dark' ? imgAPI.profile[9] : imgAPI.profile[2]}) no-repeat bottom right`,
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(5)
    }
  },
  nameDeco: {
    margin: 0,
    padding: 0,
    transform: 'rotate(-90deg)',
    transformOrigin: 'top center',
    letterSpacing: -10,
    position: 'absolute',
    fontWeight: theme.typography.fontWeightRegular,
    textTransform: 'uppercase',
    color: theme.palette.common.black,
    top: theme.spacing(30),
    left: theme.spacing(-5),
    fontSize: 72,
    opacity: 0.1,
    zIndex: 20,
  },
  title: {
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
  },
  time: {},
  history: {
    borderLeft: '2px solid',
    position: 'relative',
    padding: theme.spacing(5, 4, 10),
    borderImageSource: `linear-gradient(190deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
    borderImageSlice: 1,
    borderTop: 0,
    borderRight: 0,
    borderBottom: 0,
    [theme.breakpoints.down('md')]: {
      border: 'none'
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 0, 5)
    },
    '& h3': {
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('xs')]: {
        width: '100%'
      },
    },
    '& p': {
      [theme.breakpoints.down('xs')]: {
        display: 'inline-block',
        marginRight: theme.spacing(2)
      }
    },
    '& ul': {
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        marginBottom: theme.spacing(5),
        position: 'relative',
        [theme.breakpoints.down('sm')]: {
          paddingLeft: 45
        },
        '&:last-child': {
          marginBottom: 0
        },
        '&:before': {
          content: '""',
          borderRadius: '50%',
          width: 24,
          height: 24,
          background: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark,
          border: `4px solid ${theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper}`,
          position: 'absolute',
          left: -45,
          top: 4,
          [theme.breakpoints.down('sm')]: {
            left: 0
          }
        },
        '& $time': {
          color: theme.palette.text.secondary,
        },
      }
    }
  },
  progress: {
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5, 0, 10)
    },
    '& ul': {
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        marginBottom: theme.spacing(5),
        '&:last-child': {
          marginBottom: 0
        },
        '& h6': {
          fontWeight: theme.typography.fontWeightBold
        }
      }
    }
  },
  textIcon: {
    marginBottom: theme.spacing(1),
    display: 'flex',
    alignItems: 'center',
    '& i': {
      color: theme.palette.text.secondary,
      fontSize: 28
    },
    '& h6': {
      marginLeft: theme.spacing()
    }
  },
  progressBg: {
    borderRadius: 10,
    background: theme.palette.divider,
    height: 10
  },
  bar: {
    borderRadius: 10,
    backgroundImage: `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main});`,
  },
}));

export default timelineStyles;
