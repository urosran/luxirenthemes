import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  errorWrap: {
    width: '100%',
    minHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(20, 0, 10),
    '& > div': {
      [theme.breakpoints.up('md')]: {
        marginTop: theme.spacing(10)
      }
    }
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  deco: {
    position: 'relative',
    background: theme.palette.divider,
    width: 260,
    height: 260,
    textAlign: 'center',
    borderRadius: '50%',
    '& h3': {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.type === 'light' ? theme.palette.primary.dark : theme.palette.primary.light,
      fontSize: 106,
      textTransform: 'capitalize',
      lineHeight: '260px',
      position: 'relative',
      zIndex: 1,
    },
  },
  text: {
    [theme.breakpoints.up('md')]: {
      borderLeft: `1px solid ${theme.palette.divider}`,
      paddingLeft: theme.spacing(5),
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      marginTop: theme.spacing(4)
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4)
    },
    '& p': {
      marginBottom: theme.spacing(2),
      fontSize: 22,
      color: theme.palette.text.secondary
    }
  },
  button: {
    marginTop: theme.spacing(4)
  }
}));

export default useStyles;
