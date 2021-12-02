import { makeStyles } from '@material-ui/core/styles';

const newProductsStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      textAlign: 'center'
    }
  },
}));

export default newProductsStyles;
