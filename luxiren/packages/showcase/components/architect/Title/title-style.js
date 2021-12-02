import { makeStyles } from '@material-ui/core/styles';

const titleStyles = makeStyles(theme => ({
  dark: {},
  desc: {},
  title: {
    display: 'inline-block',
    padding: theme.spacing(0, 2, 0, 4),
    borderLeft: `12px solid ${theme.palette.primary.main}`,
    marginBottom: theme.spacing(3),
    '& h4': {
      color: theme.palette.text.primary,
      marginBottom: theme.spacing(),
    },
    '&$dark': {
      borderLeftColor: theme.palette.common.white,
      '& h4': {
        color: theme.palette.common.white
      },
      '& $desc': {
        color: theme.palette.common.white
      }
    },
    '& $desc': {
      color: theme.palette.text.secondary,
    }
  },
}));

export default titleStyles;
