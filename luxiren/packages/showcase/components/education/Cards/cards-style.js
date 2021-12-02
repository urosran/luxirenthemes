import { makeStyles } from '@material-ui/core/styles';

const cardsStyles = makeStyles(theme => ({
  property: {},
  title: {},
  text: {},
  icon: {},
  /* General Card */
  generalCard: {
    position: 'relative',
    width: 250,
    height: 400,
    padding: 3,
    '& figure': {
      margin: 0,
      width: '100%',
      height: 170,
      borderRadius: 6,
      overflow: 'hidden',
      '& img': {
        width: '100%',
        minHeight: '100%'
      }
    },
    '& $property': {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: theme.spacing(2),
      '& strong': {
        fontWeight: theme.typography.fontWeightBold
      }
    }
  },
  desc: {
    padding: theme.spacing(2),
    '& p': {
      marginBottom: 20,
      overflow: 'hidden',
      height: 50
    }
  },
  button: {
    width: '100%',
    borderWidth: '2px !important'
  },
  rating: {
    '& svg': {
      color: '#FFC107'
    }
  },
  /* Category Card */
  figure: {},
  categoryCard: {
    borderRadius: 16,
    marginBottom: theme.spacing(3),
    overflow: 'hidden',
    position: 'relative',
    background: theme.palette.secondary.light,
    textAlign: 'center',
    display: 'flex',
    alignItems: 'flex-start',
    height: 250,
    [theme.breakpoints.down('xs')]: {
      height: 120,
    },
    '& $figure': {
      margin: 0,
      width: '100%',
      display: 'block',
      '& img': {
        width: '100%',
        position: 'relative',
      }
    },
    '& $title': {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 24,
      whiteSpace: 'nowrap',
      position: 'relative',
      display: 'block',
      textOverflow: 'ellipsis',
      [theme.breakpoints.down('xs')]: {
        overflow: 'hidden',
        fontSize: 14,
        textAlign: 'center',
        lineHeight: '28px'
      },
      '&:after': {
        content: '""',
        height: 2,
        background: theme.palette.primary.main,
        width: '0%',
        position: 'absolute',
        bottom: -10,
        zIndex: 0,
        left: '50%',
        transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)',
        transitionDelay: '0.3s'
      }
    },
    '& $property': {
      transition: 'all 0.3s cubic-bezier(0, .81, 1, .97)',
      position: 'absolute',
      width: '100%',
      height: '25%',
      padding: theme.spacing(2, 6),
      bottom: 0,
      borderRadius: 16,
      textAlign: 'left',
      left: 0,
      color: theme.palette.common.white,
      backdropFilter: 'saturate(100%) blur(10px)',
      background: 'rgba(0, 0, 0, 0.32)',
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2),
        bottom: 0,
        '& $descCategory': {
          display: 'none'
        }
      },
      [theme.breakpoints.down('xs')]: {
        padding: theme.spacing(0.5, 2),
        borderRadius: 8
      }
    },
    '&:hover': {
      [theme.breakpoints.up('lg')]: {
        '& $property': {
          padding: theme.spacing(4, 6),
          '& $title': {
            '&:after': {
              width: '80%',
              left: 0
            }
          },
          [theme.breakpoints.up('lg')]: {
            height: '80%',
            bottom: 0,
            opacity: 1,
            '& $descCategory': {
              opacity: 1,
              bottom: 0,
              height: 70
            }
          }
        },
      }
    }
  },
  descCategory: {
    marginTop: theme.spacing(5),
    fontSize: 22,
    fontWeight: theme.typography.fontWeightRegular,
    whiteSpace: 'normal',
    height: 0,
    opacity: 0,
    display: 'block',
    overflow: 'hidden'
  },
  cardWrap: {
    position: 'relative'
  },
  fold: {
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      borderRadius: 16,
      border: `1px solid ${theme.palette.divider}`,
      background: theme.palette.background.paper,
      height: 80,
      left: '50%',
      transform: 'translate(-50%)',
      boxShadow: theme.palette.type === 'light' ? '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)' : '0px 1px 3px 0px rgba(64, 64, 64, 1), 0px 1px 1px 0px rgba(42, 42, 42, 1), 0px 2px 1px -1px rgba(20, 20, 20, 1)'
    },
    '&:before': {
      width: '80%',
      bottom: -25
    },
    '&:after': {
      width: '90%',
      bottom: -15
    }
  },
  /* Testimonial Card */
  testimonial: {
    height: 260,
    background: theme.palette.background.paper,
    borderRadius: theme.spacing(),
    overflow: 'visible',
    border: `3px solid ${theme.palette.divider}`,
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(8),
    },
    position: 'relative',
    '& $icon': {
      borderRadius: 20,
      background: theme.palette.primary.main,
      transform: 'rotate(45deg)',
      width: 70,
      height: 70,
      top: -30,
      left: 32,
      position: 'absolute',
      textAlign: 'center',
      lineHeight: '100px',
      [theme.breakpoints.down('xs')]: {
        display: 'none'
      },
      '& svg': {
        transform: 'translateY(-15px) rotate(-45deg)',
        width: 70,
        height: 70,
        verticalAlign: 'middle',
        fill: theme.palette.common.white,
      }
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
    },
    '& $text': {
      marginBottom: theme.spacing(4),
      overflow: 'hidden',
      display: '-webkit-box',
      '-webkit-line-clamp': 3,
      '-webkit-box-orient': 'vertical',
      height: theme.spacing(9),
    },
  },
  caption: {
    color: theme.palette.text.secondary
  },
  /* Blog Card */
  blogCard: {
    display: 'flex',
    marginBottom: theme.spacing(6),
    alignItems: 'center',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(3),
    },
    '&:before': {
      borderRadius: 15,
      content: '""',
      width: 100,
      height: 100,
      transform: 'rotate(45deg)',
      background: theme.palette.secondary.main,
      opacity: 0.1,
      position: 'absolute',
      top: -10,
      left: -25
    },
    '& $text': {
      '& a': {
        padding: 0,
        position: 'relative',
        textTransform: 'none',
        zIndex: 1,
        whiteSpace: 'inherit',
        color: theme.palette.text.primary,
        lineHeight: '36px',
        '&:hover': {
          background: 'none'
        }
      },
      '& > a': {
        fontWeight: theme.typography.fontWeightRegular,
        color: theme.palette.text.secondary,
      },
      '& h4': {
        lineHeight: 'normal',
        '&:before': {
          borderRadius: 10,
          content: '""',
          width: 50,
          height: 50,
          transform: 'rotate(45deg)',
          background: theme.palette.type === 'light' ? theme.palette.secondary.light : theme.palette.secondary.dark,
          position: 'absolute',
          top: -6,
          left: -25
        },
        '& a': {
          display: 'block',
          fontSize: 24,
          fontWeight: theme.typography.fontWeightMedium,
          transition: 'all 0.3s ease',
          height: 80,
          [theme.breakpoints.down('xs')]: {
            fontSize: 16,
            lineHeight: '22px'
          },
          '&:hover': {
            color: theme.palette.primary.main
          }
        }
      }
    }
  },
  date: {
    textAlign: 'center',
    marginLeft: theme.spacing(3),
    color: theme.palette.text.hint,
    '& > *': {
      display: 'block',
      fontWeight: theme.typography.fontWeightRegular
    },
    '& h3': {
      fontSize: 28,
      textTransform: 'uppercase',
      [theme.breakpoints.down('xs')]: {
        fontSize: 20
      }
    },
    '& h2': {
      fontSize: 46,
      [theme.breakpoints.down('xs')]: {
        fontSize: 32
      }
    },
    '& h4': {
      fontSize: 22,
      [theme.breakpoints.down('xs')]: {
        fontSize: 16
      }
    }
  }
}));

export default cardsStyles;
