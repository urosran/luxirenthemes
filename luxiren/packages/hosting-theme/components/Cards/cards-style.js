import { makeStyles } from '@material-ui/core/styles';

const cardsStyles = makeStyles(theme => ({
  pricing: {
    display: 'block',
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(),
    boxShadow: 'none',
    border: `3px solid ${theme.palette.divider}`,
    transition: 'border 0.3s ease',
    [theme.breakpoints.down('sm')]: {
      minWidth: 300,
    },
    '&:hover': {
      borderColor: theme.palette.primary.main
    }
  },
  highlighted: {
    border: `3px solid ${theme.palette.secondary.light}`,
    '& $title': {
      background: theme.palette.secondary.light,
      '& h5, & h6, & span': {
        color: theme.palette.secondary.dark
      },
    },
    '&:hover': {
      borderColor: theme.palette.secondary.main
    }
  },
  desc: {
    textAlign: 'center',
    margin: theme.spacing(2, 0),
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.87)'
  },
  title: {
    textAlign: 'center',
    padding: theme.spacing(4, 1, 1),
    fontWeight: theme.typography.fontWeightMedium,
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
      textTransform: 'uppercase'
    },
    '& img': {
      height: 80,
      margin: `${theme.spacing(3)}px auto`
    },
    '& h5': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 42,
      '& span': {
        color: theme.palette.text.secondary,
        fontSize: 22
      }
    },
  },
  icon: {
    display: 'block',
    position: 'relative',
    marginRight: theme.spacing(),
    verticalAlign: 'middle',
    float: 'left',
    height: 25,
  },
  feature: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(3)
    },
    '& li': {
      padding: theme.spacing(),
      '& $icon': {}
    },
    '& > li:nth-child(odd)': {
      background: theme.palette.background.default
    }
  },
  success: {
    '& i': {
      color: '#35c14d'
    }
  },
  error: {
    '& i': {
      color: '#FF3B30'
    }
  },
  btnArea: {
    padding: theme.spacing(),
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(3)
    }
  },
  button: {},
  testimonial: {
    height: 260,
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(),
    border: `3px solid ${theme.palette.divider}`,
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8),
    },
    position: 'relative',
    '& $icon': {
      borderRadius: '50%',
      background: theme.palette.primary.main,
      width: 100,
      height: 100,
      top: -56,
      left: 32,
      position: 'absolute',
      textAlign: 'center',
      lineHeight: '100px',
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
      '& svg': {
        width: 100,
        height: 100,
        verticalAlign: 'middle',
        fill: theme.palette.common.white,
      }
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
    },
  },
  text: {
    marginBottom: theme.spacing(4),
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-line-clamp': 3,
    '-webkit-box-orient': 'vertical',
    height: theme.spacing(9),
  },
  caption: {
    color: theme.palette.text.secondary
  }
}));

export default cardsStyles;
