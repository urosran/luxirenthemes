import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  title: {},
  button: {},
  /* Default Card */
  defaultCard: {
    direction: 'ltr',
    borderRadius: 12,
    position: 'relative',
    width: 240,
    height: 380,
    margin: theme.spacing(3, 2),
    '& figure': {
      borderRadius: '0 0 50px 0',
      overflow: 'hidden',
      height: 170,
      margin: 0,
      marginBottom: theme.spacing(3),
      '& img': {
        height: '100%',
        minWidth: '100%'
      }
    },
    '& $button': {
      padding: 0,
      width: '50%',
      marginLeft: '50%',
      height: 43,
      lineHeight: '44px',
      position: 'absolute',
      right: 0,
      bottom: 0,
      boxShadow: theme.shadows[10],
      borderRadius: '20px 0 0 0'
    },
    '& h6': {
      marginBottom: theme.spacing(2),
    },
    '& p': {
      height: 70,
      overflow: 'hidden',
      marginBottom: theme.spacing(3)
    }
  },
  text: {
    padding: theme.spacing(0, 2.5)
  },
  /* Testimonial Card */
  testiCard: {
    direction: 'ltr',
    position: 'relative',
  },
  paper: {
    padding: theme.spacing(6, 2, 0, 0),
    width: 300,
    height: 300,
    borderRadius: '0 50% 50% 50%',
    [theme.breakpoints.down('xs')]: {
      width: 280,
      height: 280
    },
    '& p': {
      height: 100,
      padding: theme.spacing(3),
      overflow: 'hidden',
      marginBottom: theme.spacing(2)
    }
  },
  rating: {
    marginLeft: theme.spacing(3)
  },
  starIcon: {
    color: '#FFC107'
  },
  starIconDisable: {
    color: theme.palette.divider
  },
  avatar: {
    border: '1px solid #FFF',
    boxSizing: 'content-box',
    marginLeft: theme.spacing(1),
    borderRadius: '50% 50% 0 50% !important',
    boxShadow: theme.shadows[8]
  },
  person: {
    display: 'flex',
    marginTop: theme.spacing(-10),
    justifyContent: 'flex-end',
    marginRight: theme.spacing(5),
    position: 'relative',
    '& $avatar': {
      width: 70,
      height: 70,
    },
    '& $title': {
      fontWeight: theme.typography.fontWeightRegular
    },
  },
  name: {
    textAlign: 'right',
    marginLeft: theme.spacing(2),
    '& h6': {
      fontSize: 16,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  /* Profile Card */
  divider: {},
  photo: {},
  nameCard: {},
  profile: {
    overflow: 'visible',
    margin: '0.5rem 0 1rem 0',
    '& $divider': {
      borderBottom: 'none',
      borderColor: theme.palette.divider,
      background: 'none',
      margin: theme.spacing(0, 2)
    }
  },
  personBlock: {
    display: 'flex',
    '& $photo': {
      width: 80,
      height: 80,
      position: 'relative',
      borderRadius: '0 50% 50% 50%',
      top: -8,
      left: -8,
      '& img': {
        width: '100%'
      }
    },
    '& $nameCard': {
      padding: theme.spacing(1)
    },
    '& h4': {
      fontSize: 22,
      margin: 0,
      fontWeight: theme.typography.fontWeightRegular
    },
    '& p': {
      fontSize: 16,
      marginBottom: theme.spacing(2),
      color: theme.palette.text.secondary
    }
  },
  action: {
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    '& $button': {
      height: 36,
      [theme.breakpoints.up('sm')]: {
        width: 100
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
        marginTop: theme.spacing(2)
      }
    }
  },
  property: {
    '& span': {
      color: theme.palette.text.disabled,
      fontSize: 14,
      display: 'inline-block',
      marginRight: theme.spacing(4),
      '& i': {
        fontSize: 24
      }
    }
  },
  /* Address Card */
  paperAddress: {
    padding: theme.spacing(2, 0, 3)
  },
  icon: {
    color: theme.palette.primary.main,
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    top: 4,
    position: 'relative'
  }
}));

export default useStyles;
