import { makeStyles } from '@material-ui/core/styles';

const featureStyles = makeStyles(theme => ({
  root: {
    display: 'block',
    textAlign: 'center',
    marginBottom: theme.spacing(5),
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(10),
    }
  },
  carouselContainer: {
    maxWidth: 1100
  },
  [theme.breakpoints.down('xs')]: {
    marginBottom: theme.spacing(10)
  },
  carouselWrap: {
    position: 'relative',
    '& ul[class="slick-dots"]': {
      bottom: theme.spacing(-5),
      opacity: 0.48,
      '& li': {
        background: theme.palette.text.disabled,
        width: 25,
        height: 4,
        transition: 'width 0.3s ease',
        '&:before': {
          display: 'none'
        },
        '&[class="slick-active"]': {
          width: 80,
        }
      }
    }
  },
  item: {
    '&:focus': {
      outline: 'none'
    }
  },
  nav: {
    background: theme.palette.background.paper,
    width: 50,
    height: 40,
    textAlign: 'center',
    lineHeight: '30px',
    position: 'absolute',
    top: 'calc(50% - 20px)',
    zIndex: 90,
    boxShadow: '0 0 20px 2px rgba(0, 0, 0, 0.2)',
    '& svg': {
      verticalAlign: 'middle',
      transform: theme.direction === 'rtl' ? 'scale(-1)' : 'none'
    },
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  prev: {
    left: theme.spacing(-5),
  },
  next: {
    right: theme.spacing(-5),
  },
}));

export default featureStyles;
