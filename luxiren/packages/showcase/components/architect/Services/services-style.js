import { makeStyles } from '@material-ui/core/styles';

const featureStyles = makeStyles(theme => ({
  root: {
    '& img': {
      width: '100%',
      height: '100%'
    },
    '& h5': {
      fontWeight: theme.typography.fontWeightBold,
      color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark,
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('xs')]: {
        marginBottom: theme.spacing(2),
        fontSize: '1.2rem',
      }
    },
    '& p': {
      color: theme.palette.text.secondary,
    }
  },
  figure: {
    width: 180,
    height: 180,
    margin: '0 auto',
    position: 'relative',
    transform: 'scale(0.8)',
    [theme.breakpoints.down('xs')]: {
      transform: 'scale(0.5)',
      margin: '-36px auto -24px'
    },
    '& svg': {
      width: 180,
      height: 180,
    }
  },
  outline: {
    stroke: theme.palette.secondary.main
  },
  fill: {
    fill: theme.palette.primary.main,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  grid: {
    textAlign: 'center'
  }
}));

export default featureStyles;
