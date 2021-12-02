import { makeStyles } from '@material-ui/core/styles';

const teamStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    '& > *': {
      position: 'relative',
    }
  },
  deco: {
    position: 'absolute',
    top: theme.spacing(-10),
    left: 0,
    height: 560,
    background: `linear-gradient(${theme.direction === 'rtl' ? '-160deg' : '160deg'}, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light} 50%, ${theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper} 50%)`,
    width: '70%',
    [theme.breakpoints.down('md')]: {
      height: 720,
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    }
  },
  teamWrap: {
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(10),
    }
  }
}));

export default teamStyles;
