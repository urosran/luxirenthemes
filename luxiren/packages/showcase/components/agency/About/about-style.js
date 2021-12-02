import { makeStyles } from '@material-ui/core/styles';
import imgApi from '~/public/images/imgAPI';

const useStyles = makeStyles(theme => ({
  root: {
    '& blockquote': {
      fontSize: 28,
      fontStyle: 'italic',
      color: theme.palette.text.secondary,
      borderLeft: '4px solid',
      borderLeftColor: theme.palette.type === 'dark' ? 'rgba(0, 0, 0, 0.38)' : '#D8D8D8',
      paddingLeft: theme.spacing(5),
      margin: theme.spacing(5, 0, 0),
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
  },
  puzzle: {
    position: 'relative',
    left: 60,
    top: -40,
    '& > div': {
      transform: 'rotate(45deg)',
      overflow: 'hidden',
      position: 'absolute',
      background: '#dedede'
    },
    '& span': {
      background: `url(${imgApi.agency[1]}) no-repeat fixed`,
      backgroundSize: 'auto 800px',
      transform: 'rotate(-45deg)',
      width: 560,
      height: 1000,
      display: 'block',
      position: 'relative',
      top: -110,
      left: 0,
    }
  },
  pieceBig: {
    width: 300,
    height: 150,
    top: -175,
    left: 100,
    borderRadius: 32,
  },
  pieceSmallTop: {
    width: 100,
    height: 100,
    borderRadius: 24,
    top: 12,
    left: 170
  },
  pieceSmallBottom: {
    width: 100,
    height: 100,
    borderRadius: 24,
    top: 90,
    left: 90
  },
}));

export default useStyles;
