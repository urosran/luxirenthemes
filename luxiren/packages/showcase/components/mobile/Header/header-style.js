import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';
import flag from '~/public/images/flag-logo.png';

const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ara"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zho"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="eng"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="deu"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="ind"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="prt"]': {
    backgroundPosition: '0 -79px'
  },
};

const headerStyles = makeStyles(theme => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  fixed: {},
  header: {
    position: 'fixed',
    color: theme.palette.common.white,
    background: 'none',
    boxShadow: 'none',
    transition: 'all 0.5s ease-out',
    '& > *': {
      [theme.breakpoints.down('md')]: {
        padding: 0
      }
    },
    '&$fixed': {
      background: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      '& $logo': {
        '& a': {
          color: 'transparent',
          fontSize: 0,
        },
        '& img': {
          marginBottom: 0,
          [theme.breakpoints.up('sm')]: {
            height: 48,
            width: 48
          }
        }
      },
      '& nav': {
        padding: theme.spacing(1, 0),
        '& $button': {
          padding: theme.spacing(0.5, 2)
        }
      },
      '& $socialBtn': {
        background: theme.palette.type === 'dark' ? fade(theme.palette.primary.light, 0.12) : fade(theme.palette.primary.main, 0.12),
        '& i': {
          color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
        }
      },
      '& $setting': {
        '& svg': {
          fill: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
        }
      }
    },
    '&$openDrawer': {
      zIndex: 1600,
      boxShadow: 'none',
    },
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      alignItems: 'center',
      padding: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2, 0),
      },
      display: 'flex'
    }
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      display: 'block',
      fontSize: 16,
      color: theme.palette.type === 'dark' ? theme.palette.text.primary : theme.palette.primary.main,
      alignItems: 'center',
      transition: 'color 0.5s ease-out',
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: 'center'
    },
    '& img': {
      display: 'block',
      margin: '0 auto',
      transition: 'all 0.3s ease-out',
      marginBottom: theme.spacing(),
      height: 48,
      width: 48,
      [theme.breakpoints.up('sm')]: {
        width: 64,
        height: 64,
      }
    }
  },
  active: {},
  button: {
    width: theme.spacing(20)
  },
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 1),
      },
    },
    '& a': {
      marginTop: theme.spacing(0.5),
      fontSize: 16,
      fontWeight: theme.typography.fontWeightMedium,
      boxShadow: 'none',
      position: 'relative',
      margin: theme.spacing(0, 1),
    },
    '& ul': {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
      '& li': {
        margin: theme.spacing(0, 1),
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'capitalize',
          minWidth: 0,
          padding: '6px',
          background: 'none !important',
          '&:after': {
            content: '""',
            height: 6,
            width: 6,
            transform: 'scale(0)',
            position: 'absolute',
            borderRadius: '50%',
            margin: '0 auto',
            bottom: -5,
            background: theme.palette.primary.main,
            transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)'
          },
          '&:hover': {
            transition: 'all 0.3s ease-out',
            color: fade(theme.palette.text.primary, 0.5),
            '&:after': {
              transform: 'scale(1)',
            }
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
            '&:after': {
              transform: 'scale(1)',
            },
          }
        }
      }
    },
    '&$invert': {
      '& $socialBtn': {
        background: fade(theme.palette.primary.main, 0.24),
        '& i': {
          color: theme.palette.primary.main
        }
      },
    }
  },
  margin: {},
  langMenu: {
    textTransform: 'capitalize',
    '& i': {
      ...flagIcon
    }
  },
  socialBtn: {
    background: fade(theme.palette.common.white, 0.24),
    width: 35,
    height: 35,
    padding: theme.spacing(0.5),
    [theme.breakpoints.down('md')]: {
      margin: '0 6px'
    },
    '& i': {
      color: theme.palette.common.white,
      fontSize: 22,
    }
  },
  icon: {},
  invert: {},
  setting: {
    margin: theme.spacing(0, 1),
    '& $icon': {
      transition: 'all 0.3s ease',
      color: theme.palette.common.white,
      '&$invert': {
        '& svg': {
          fill: theme.palette.text.secondary
        }
      }
    },
    '& svg': {
      fill: theme.palette.common.white,
      width: 30,
      height: 30,
      [theme.breakpoints.down('xs')]: {
        fill: theme.palette.text.secondary
      },
    },
    '& $active': {
      transform: 'rotate(30deg)'
    }
  },
  modeMenu: {
    textTransform: 'capitalize'
  },
  bar: {
    backgroundColor: theme.palette.text.secondary,
    '&:after, &:before': {
      backgroundColor: theme.palette.text.secondary
    }
  },
  menu: {},
  openDrawer: {},
  paperNav: {
    width: '100%',
    background: theme.palette.background.paper,
    [theme.breakpoints.up(680)]: {
      width: 300,
    },
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
  },
  mobileNav: {
    background: theme.palette.background.paper,
    height: '100%',
    '& $menu': {
      padding: theme.spacing(0, 5),
      overflow: 'auto',
      top: 90,
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 90px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      },
    }
  },
  menuList: {
    textTransform: 'capitalize',
    '& span': {
      fontSize: 24
    }
  },
}));

export default headerStyles;
