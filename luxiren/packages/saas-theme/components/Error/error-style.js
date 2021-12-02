import { makeStyles } from '@material-ui/core/styles';
import errorDeco from '~/public/images/saas/error-deco.png';

const useStyles = makeStyles(theme => ({
  errorWrap: {
    width: '100%',
    minHeight: 640,
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(-15)
  },
  flex: {
    display: 'flex',
    justifyContent: 'center'
  },
  deco: {
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(25, 0, 10)
    },
    '& h3': {
      color: theme.palette.primary.dark,
      fontSize: 106,
      textTransform: 'capitalize',
      fontWeight: 700,
      paddingTop: 40,
      paddingLeft: 20,
      position: 'relative',
      zIndex: 1,
    },
    '&:before': {
      content: '""',
      width: 320,
      height: 230,
      background: `url(${errorDeco}) no-repeat`,
      position: 'absolute',
      top: theme.spacing(-3),
      left: theme.spacing(-5),
      [theme.breakpoints.down('xs')]: {
        transform: 'scale(0.9)',
        left: theme.spacing(-6),
      }
    }
  },
  text: {
    color: theme.palette.common.white,
    [theme.breakpoints.up('md')]: {
      paddingLeft: theme.spacing(5),
      borderLeft: `1px solid ${theme.palette.divider}`,
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center',
      margin: theme.spacing(5, 0, 20),
    },
    '& h4': {
      color: theme.palette.common.white,
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(4)
    },
  },
  button: {
    marginTop: theme.spacing(4)
  }
}));

export default useStyles;
