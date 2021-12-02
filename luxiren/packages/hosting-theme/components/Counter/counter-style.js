import { makeStyles } from '@material-ui/core/styles';

const counterStyles = makeStyles(theme => ({
  counterWrap: {
    position: 'relative',
    margin: theme.spacing(10, 0),
    textAlign: 'center',
    '& h3': {
      color: theme.palette.primary.light,
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('xs')]: {
        fontSize: 36
      }
    },
    '& p': {
      color: theme.palette.common.white
    }
  },
}));

export default counterStyles;
