import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  deco: {
    backgroundColor: theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
    width: 1000,
    height: 1000,
    borderRadius: '50%',
    position: 'absolute',
    left: -300,
    top: -50,
    opacity: 0.2
  },
  root: {
    position: 'relative',
    zIndex: 10,
    [theme.breakpoints.down('sm')]: {
      '& > div': {
        padding: 0
      }
    },
    '& nav': {
      [theme.breakpoints.down('sm')]: {
        display: 'flex',
        overflow: 'auto',
      }
    }
  },
  sideFilter: {
    '& nav': {
      margin: '0.5rem 0 1rem 0',
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0, 3)
      }
    }
  },
  filter: {
    borderRadius: 40,
    textTransform: 'capitalize',
    marginBottom: theme.spacing(),
    padding: theme.spacing(0.5, 2),
    width: '90%',
    [theme.breakpoints.up('sm')]: {
      overflow: 'hidden'
    },
    [theme.breakpoints.down('sm')]: {
      '& > div': {
        textAlign: 'center'
      }
    }
  },
  active: {
    background: `${theme.palette.primary.light} !important`,
    color: theme.palette.primary.dark,
  },
  massonry: {
    position: 'relative',
    margin: theme.spacing(0, 4),
    '& button': {
      width: '100%'
    }
  },
}));

export default useStyles;
