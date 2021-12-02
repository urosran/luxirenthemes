import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
      lineHeight: '36px',
    },
  },
  root: {
    display: 'flex',
    margin: theme.spacing(5, 0, 0),
    justifyContent: 'center',
    position: 'relative',
    overflow: 'auto',
    zIndex: 23,
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
    },
    '& img': {
      height: 64,
      margin: theme.spacing(4),
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      opacity: theme.palette.type === 'dark' ? 0.5 : 1,
      transition: 'all 0.3s ease-out',
      '&:hover': {
        filter: 'none'
      }
    }
  }
}));

export default useStyles;
