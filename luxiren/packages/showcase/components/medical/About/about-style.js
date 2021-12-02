import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    '& blockquote': {
      fontSize: 20,
      fontStyle: 'italic',
      color: theme.palette.text.secondary,
      borderLeft: '4px solid',
      borderLeftColor: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.12)' : '#D8D8D8',
      paddingLeft: theme.spacing(2),
      margin: theme.spacing(5, 4, 0),
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(2),
        margin: 0,
        fontSize: 20,
        lineHeight: '32px'
      }
    },
    '& h4': {
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        marginTop: theme.spacing(-3)
      }
    }
  }
}));

export default useStyles;
