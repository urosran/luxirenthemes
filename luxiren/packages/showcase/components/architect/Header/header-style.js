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
  invert: {
    color: theme.palette.text.primary,
    '& $mobileMenu': {
      '& $bar': {
        backgroundColor: theme.palette.text.secondary,
        '&:after, &:before': {
          backgroundColor: theme.palette.text.secondary
        },
      }
    },
    '& svg': {
      fill: theme.palette.text.primary,
    },
  },
  fixed: {},
  openDrawer: {},
  header: {
    position: 'fixed',
    padding: theme.spacing(2, 0),
    color: theme.palette.common.white,
    transition: 'padding 0.3s ease',
    background: 'none',
    boxShadow: 'none',
    '& > *': {
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0
      }
    },
    '&$fixed': {
      background: fade(theme.palette.secondary.dark, 0.6),
      backdropFilter: 'saturate(90%) blur(10px)',
      padding: theme.spacing(1, 0),
      '& $logo': {
        '& a': {
          color: 'transparent',
          fontSize: 0,
        },
        '& img': {
          height: 48,
          width: 48,
          marginBottom: 0,
        }
      },
      '& nav': {
        '& $button': {
          padding: theme.spacing(0.5, 2)
        },
        '& li a': {
          padding: '0 6px',
          color: theme.palette.common.white,
        }
      },
      '& $setting': {
        '& $icon': {
          '& svg': {
            fill: theme.palette.common.white,
          }
        }
      },
      '& $mobileMenu': {
        '& $bar': {
          backgroundColor: theme.palette.common.white,
          '&:after, &:before': {
            backgroundColor: theme.palette.common.white
          },
        }
      }
    },
    '&$openDrawer': {
      zIndex: 1600,
      boxShadow: 'none',
    },
    '&$invert': {
      '& $logo': {
        '& a': {
          color: theme.palette.text.primary,
        }
      },
      '& ul': {
        '& li': {
          '& a': {
            color: theme.palette.text.primary,
          }
        }
      },
      '& $setting': {
        '& $icon': {
          '& svg': {
            fill: theme.palette.text.primary,
          }
        }
      }
    },
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-end'
    },
    '& nav': {
      alignItems: 'center',
      display: 'flex',
      marginTop: theme.spacing()
    }
  },
  logo: {
    alignItems: 'center',
    height: '100%',
    display: 'flex',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
    },
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    },
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start'
    },
    '& a': {
      textDecoration: 'none',
      display: 'inline-block',
      fontSize: 16,
      color: theme.palette.common.white,
      alignItems: 'center',
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: 'center'
    },
    '& img': {
      display: 'block',
      height: 70,
      margin: '0 auto',
      marginBottom: theme.spacing(),
      [theme.breakpoints.down('sm')]: {
        height: 48,
        width: 48
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
        margin: theme.spacing(0, 3),
      },
    },
    '& a': {
      color: theme.palette.common.white,
      marginBottom: theme.spacing(0.5),
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
        margin: theme.spacing(0, 2),
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'uppercase',
          minWidth: 0,
          padding: '6px',
          margin: '0 4px',
          background: 'none !important',
          transition: 'all 0.3s ease-out',
          '&:after': {
            content: '""',
            display: 'none',
            borderTop: `10px solid ${theme.palette.primary.light}`,
            borderLeft: '15px solid transparent',
            borderRight: '15px solid transparent',
            position: 'absolute',
            top: -28,
            left: 'calc(50% - 15px)'
          },
          '&:hover': {
            color: theme.palette.primary.light
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.primary.light,
            '&:after': {
              display: 'block'
            },
          }
        }
      }
    }
  },
  langMenu: {
    textTransform: 'capitalize',
    '& i': {
      ...flagIcon
    }
  },
  modeMenu: {
    textTransform: 'capitalize',
  },
  icon: {},
  setting: {
    '& $icon': {
      transition: 'all 0.3s ease',
      color: theme.palette.common.white,
    },
    '& $active': {
      transform: 'rotate(30deg)'
    }
  },
  bar: {},
  menu: {},
  menuOpen: {},
  paperNav: {
    width: '100%',
    background: fade(theme.palette.secondary.dark, 0.6),
    backdropFilter: 'saturate(90%) blur(10px)',
    [theme.breakpoints.up(680)]: {
      width: 300,
    },
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
    '& $bar': {
      backgroundColor: theme.palette.common.white,
      '&:after, &:before': {
        backgroundColor: theme.palette.common.white
      },
    },
    '&[class*="is-active"]': {
      '& $bar': {
        '&:after, &:before': {
          backgroundColor: `${theme.palette.common.white} !important`
        }
      },
    },
  },
  mobileNav: {
    background: theme.palette.background.paper,
    '& $menu': {
      padding: theme.spacing(0, 2),
      overflow: 'auto',
      top: 80,
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 80px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      },
    }
  },
  menuList: {
    textTransform: 'capitalize',
    color: theme.palette.common.white,
    '& span': {
      fontSize: 24
    }
  }
}));

export default headerStyles;
