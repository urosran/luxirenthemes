import { makeStyles } from '@material-ui/core/styles';

const featureStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  decoration: {
    position: 'absolute',
    width: 1280,
    height: '100%',
    left: -10,
    top: 100,
    '& svg': {
      width: '100%',
      height: 1700,
      fill: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      opacity: 0.2,
      transform: 'scale(1.3)',
      [theme.breakpoints.up(1400)]: {
        transform: 'scale(2.5, 1)',
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      },
      [theme.breakpoints.down('xs')]: {
        transform: 'scale(0.5)',
        transformOrigin: 'center left'
      }
    }
  },
  btn: {},
  figure: {},
  last: {},
  item: {
    position: 'relative',
    minHeight: 320,
    marginBottom: theme.spacing(20),
    '&$last': {
      marginBottom: theme.spacing(10)
    },
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(15)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
    },
    '& h6': {
      marginBottom: theme.spacing(5),
    },
    '& section': {
      [theme.breakpoints.up('md')]: {
        position: 'absolute',
      },
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(3, 0)
      },
      '& > div': {
        perspective: 1000
      }
    },
    '& $figure': {
      transformStyle: 'preserve-3d',
      overflow: 'hidden',
      boxShadow: theme.shadows[2],
      borderRadius: theme.rounded.medium,
      background: theme.palette.common.white,
      padding: theme.spacing(1),
      paddingTop: theme.spacing(3),
      margin: theme.spacing(3),
      '& img': {
        width: '100%',
      },
    }
  },
  screen: {
    position: 'relative',
    '& img': {
      width: '90%',
      display: 'block'
    }
  },
  graphic: {
    position: 'relative',
    '& img': {
      width: '90%',
      display: 'block'
    }
  },
  tabContent: {
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(8, 4, 0),
    },
    '& section': {
      position: 'relative'
    }
  },
  selected: {},
  tabLabel: {
    fontSize: 18,
    borderBottom: `1px solid ${theme.palette.text.disabled}`,
    [theme.breakpoints.down('xs')]: {
      fontSize: 14
    },
    '&$selected': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
    }
  },
  illustrationLeft: {
    position: 'relative',
    '& $screen': {
      [theme.breakpoints.up('md')]: {
        marginTop: -50,
        transform: 'rotateY( 30deg )'
      }
    },
    '& $graphic': {
      top: 100,
      left: 70,
      width: 360,
      [theme.breakpoints.up('md')]: {
        transform: 'rotateY( 30deg ) rotateX(-5deg) rotateZ(-2deg)'
      }
    },
  },
  illustrationRight: {
    position: 'relative',
    '& $screen': {
      [theme.breakpoints.up('md')]: {
        left: 20,
        top: -40,
        transform: 'rotateY( -30deg )',
      }
    },
    '& $graphic': {
      right: -60,
      top: 100,
      width: 400,
      [theme.breakpoints.up('md')]: {
        transformStyle: 'preserve-3d',
        transform: 'rotateY( -30deg ) rotateX(-4deg) rotateZ(0deg)',
      }
    },
  },
  illustrationCenter: {
    '& $screen': {
      display: 'block',
      textAlign: 'center',
      marginTop: -50,
      maxWidth: 700,
      margin: '0 auto',
      transform: 'rotateY( 0 ) rotateX(35deg) rotateZ(0deg)',
      '& img': {
        margin: '0 auto',
        width: '100%'
      }
    },
  },
}));

export default featureStyles;
