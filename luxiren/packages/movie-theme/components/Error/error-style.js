import { makeStyles } from '@material-ui/core/styles';

const errorDeco = '/images/movie/error-deco.svg';

const useStyles = makeStyles(theme => ({
  errorWrap: {
    width: '100%',
    minHeight: 640,
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(15),
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  deco: {
    position: 'relative',
    width: 280,
    height: 280,
    background: `url(${errorDeco}) no-repeat center center`,
    backgroundSize: 'contain',
    [theme.breakpoints.up('md')]: {
      marginTop: -60,
    },
    '& h3': {
      color: theme.palette.primary.dark,
      textTransform: 'capitalize',
      fontWeight: theme.typography.fontWeightBold,
      textAlign: 'center',
      lineHeight: '300px',
      fontSize: '6rem'
    },
  },
  text: {
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(5),
      borderLeft: `1px solid ${theme.palette.divider}`,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      margin: theme.spacing(5, 0, 20),
    },
    '& h4': {
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(3)
    },
  },
  button: {
    marginTop: theme.spacing(4),
    width: 205,
    borderColor: theme.palette.type === 'dark' ? '#FFF' : theme.palette.primary.dark,
    color: theme.palette.type === 'dark' ? '#FFF' : theme.palette.primary.dark
  }
}));

export default useStyles;
