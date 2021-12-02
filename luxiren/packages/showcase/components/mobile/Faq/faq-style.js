import { makeStyles } from '@material-ui/core/styles';

const faqStyles = makeStyles(theme => ({
  root: {
    position: 'relative'
  },
  text: {
    position: 'relative',
    zIndex: 20,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  illustration: {
    position: 'relative',
    margin: theme.spacing(6),
    '& img': {
      position: 'relative',
      display: 'block',
      width: 280
    }
  },
  decoPrimary: {
    fill: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.primary.light,
    width: 450,
    height: 450,
    position: 'absolute',
    top: -20,
    left: 0,
    transform: 'scale(0.6)',
    transformOrigin: 'left center'
  },
  accordion: {
    position: 'relative',
  },
  item: {
    marginBottom: theme.spacing(3),
  },
  paper: {
    borderRadius: `${theme.rounded.medium} !important`,
    overflow: 'hidden',
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(1, 2, 1, 0),
    fontSize: 18,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
    }
  },
  content: {
    '& $icon': {
      position: 'absolute',
      top: theme.spacing(2.5),
      right: theme.spacing(2)
    }
  },
  expanded: {
    backgroundImage: `linear-gradient(30deg, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main}, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main})`,
    '& > div': {
      background: 'none'
    },
    '& $heading': {
      color: theme.palette.common.white,
      paddingTop: 0,
      paddingBottom: 0
    },
    '& $icon': {
      color: theme.palette.common.white,
      transform: 'rotate(180deg)'
    }
  },
  detail: {
    background: theme.palette.background.paper,
    paddingTop: theme.spacing(3),
    '& p': {
      fontSize: 18
    }
  },
  icon: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
  }
}));

export default faqStyles;
