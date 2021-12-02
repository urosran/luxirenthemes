import { makeStyles } from '@material-ui/core/styles';

const titleStyles = makeStyles(theme => ({
  left: {
    textAlign: 'left',
    '& h4': {
      paddingLeft: theme.spacing(2)
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(5),
    }
  },
  right: {
    textAlign: 'right',
    '& h4': {
      paddingRight: theme.spacing(2)
    },
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(5),
    }
  },
  center: {
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  title: {
    fontWeight: theme.typography.fontWeightBold,
    marginBottom: theme.spacing(3),
    display: 'inline-block',
    minWidth: 200,
    fontSize: 36,
    lineHeight: '56px',
    '& h4': {
      [theme.breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '48px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 24,
        lineHeight: '36px',
      }
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  primary: {
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(0.5),
  },
  secondary: {
    fontWeight: theme.typography.fontWeightBold,
    padding: theme.spacing(0.5),
    background: theme.palette.secondary.main,
    color: theme.palette.common.white
  },
}));

export default titleStyles;
