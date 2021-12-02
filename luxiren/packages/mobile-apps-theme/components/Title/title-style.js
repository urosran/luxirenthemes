import { makeStyles } from '@material-ui/core/styles';

const titleStyles = makeStyles(theme => ({
  left: {
    textAlign: 'left',
  },
  right: {
    textAlign: 'right',
  },
  center: {
    textAlign: 'center',
  },
  dark: {},
  title: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 3)
    },
    '& h3': {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 46,
      textTransform: 'capitalize',
      [theme.breakpoints.down('md')]: {
        fontSize: 38,
        lineHeight: '50px',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 32,
        lineHeight: '42px',
      },
      '& span': {
        color: theme.palette.text.secondary
      }
    },
    '&:after': {
      content: '""',
      width: 70,
      height: 12,
      bottom: -32,
      borderRadius: 12,
      backgroundImage: `linear-gradient(-20deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
      position: 'absolute'
    },
    '& strong': {
      color: theme.palette.text.primary,
    },
    '&$left': {
      '&:after': {
        left: 0,
      }
    },
    '&$right': {
      '&:after': {
        right: 0,
      }
    },
    '&$center': {
      '&:after': {
        left: '50%',
        marginLeft: -35,
      }
    },
    '&$dark': {
      '& h3': {
        color: theme.palette.common.white,
      }
    }
  },
  titleSecondary: {
    display: 'block',
    position: 'relative',
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 0, 4)
    },
    '& h4': {
      color: theme.palette.text.primary,
      fontSize: 32,
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down('xs')]: {
        fontSize: 24,
        lineHeight: '36px',
      },
    },
    '&:after': {
      content: '""',
      width: 17,
      height: 17,
      borderRadius: '50%',
      background: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      position: 'absolute'
    },
    '&$left': {
      paddingLeft: theme.spacing(4),
      '&:after': {
        left: 0,
        top: 8,
      }
    },
    '&$right': {
      paddingRight: theme.spacing(4),
      '&:after': {
        right: 0,
        top: 8,
      }
    },
    '&$center': {
      marginBottom: theme.spacing(6),
      '&:after': {
        left: '50%',
        marginLeft: -8,
        bottom: -35
      }
    },
  }
}));

export default titleStyles;
