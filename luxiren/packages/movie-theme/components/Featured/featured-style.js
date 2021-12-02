import { makeStyles } from '@material-ui/core/styles';

const newProductsStyles = makeStyles(theme => ({
  decoration: {
    position: 'absolute',
    width: 1280,
    height: 960,
    top: 200,
    '& svg': {
      width: 1280,
      height: '100%',
      fill: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      opacity: 0.2,
      [theme.breakpoints.up('lg')]: {
        transform: 'scale(1.7, 1)',
      },
      [theme.breakpoints.up('xl')]: {
        display: 'none'
      },
      [theme.breakpoints.down('xs')]: {
        transform: 'scale(0.5)',
        transformOrigin: 'center left'
      }
    }
  },
  root: {
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
}));

export default newProductsStyles;
