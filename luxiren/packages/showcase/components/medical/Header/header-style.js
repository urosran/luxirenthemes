import { makeStyles } from '@material-ui/core/styles';
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
  openDrawer: {},
  header: {
    color: theme.palette.text.primary,
    background: 'none',
    boxShadow: 'none',
    transition: 'all 0.5s ease-out',
    position: 'fixed',
    '& > *': {
      [theme.breakpoints.down('md')]: {
        padding: 0
      }
    },
    '& nav': {
      transition: 'all 0.5s ease-out',
    },
    '&$fixed': {
      position: 'fixed',
      top: 0,
      boxShadow: theme.shadows[4],
      background: theme.palette.background.paper,
      zIndex: 1000,
      '& $logo': {
        '& a': {
          color: theme.palette.text.primary,
        },
        '& img': {
          height: 32,
          width: 32,
        }
      },
      '& $bar': {
        [theme.breakpoints.down('sm')]: {
          backgroundColor: theme.palette.text.secondary,
          '&:after, &:before': {
            backgroundColor: theme.palette.text.secondary
          }
        }
      },
      '& nav': {
        padding: theme.spacing(1, 0),
      },
      '& $vDivider': {
        minHeight: theme.spacing(3)
      },
      '& $icon': {
        '& svg': {
          fill: theme.palette.text.secondary
        }
      }
    },
    '&$openDrawer': {
      zIndex: 1600,
      boxShadow: 'none',
      '& $logo': {
        '& a': {
          color: theme.palette.text.primary,
        }
      },
    }
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      alignItems: 'center',
      padding: theme.spacing(2),
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2, 0),
      },
    }
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      display: 'flex',
      fontSize: 22,
      color: theme.palette.text.primary,
      alignItems: 'center',
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down('sm')]: {
        color: theme.palette.common.white
      }
    },
    '& img': {
      transition: 'all 0.3s ease-out',
      width: 48,
      height: 48,
      marginRight: theme.spacing(),
      [theme.breakpoints.only('md')]: {
        marginLeft: theme.spacing(2)
      }
    }
  },
  active: {},
  invert: {},
  navLogo: {
    '&$invert': {
      '& $logo': {
        '& a': {
          color: theme.palette.text.primary,
        }
      },
      '& $mobileMenu': {
        '& $bar': {
          [theme.breakpoints.down('sm')]: {
            backgroundColor: theme.palette.text.secondary,
            '&:after, &:before': {
              backgroundColor: theme.palette.text.secondary
            },
          }
        }
      },
    }
  },
  navMenu: {
    '& > *': {
      margin: 0,
      [theme.breakpoints.up('lg')]: {
        margin: theme.spacing(0, 1),
      }
    },
    '&$invert': {
      '& ul': {
        '& li': {
          '& a': {
            transition: 'all 0.3s ease-out',
            color: theme.palette.text.primary,
          }
        }
      }
    },
    '& ul': {
      listStyle: 'none',
      '& li': {
        [theme.breakpoints.up('lg')]: {
          margin: theme.spacing(0, 2),
        },
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          marginTop: theme.spacing(0.5),
          textTransform: 'capitalize',
          fontSize: 18,
          fontWeight: theme.typography.fontWeightMedium,
          background: 'none !important',
          boxShadow: 'none',
          position: 'relative',
          padding: '6px',
          margin: theme.spacing(0, 1),
          minWidth: 0,
          '&:after': {
            content: "''",
            height: 5,
            borderRadius: 5,
            background: theme.palette.type === 'light' ? theme.palette.primary.main : theme.palette.primary.light,
            width: 0,
            position: 'absolute',
            bottom: 0,
            left: '50%',
            transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)'
          },
          '&:hover': {
            transition: 'all 0.3s ease-out',
            '&:after': {
              width: '60%',
              left: 8,
              borderBottomColor: theme.palette.primary.light
            }
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.type === 'light' ? theme.palette.primary.dark : theme.palette.primary.light,
            '&:after': {
              width: '60%',
              left: 8,
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
  vDivider: {
    margin: theme.spacing(0, 1),
    borderLeft: `1px solid ${theme.palette.divider}`,
    height: '100%',
    transition: 'all 0.5s ease-out',
    minHeight: theme.spacing(6)
  },
  icon: {},
  setting: {
    '& $icon': {
      fontSize: 32,
      transition: 'all 0.3s ease',
      [theme.breakpoints.down('sm')]: {
        color: theme.palette.common.white
      }
    },
    '& $active': {
      transform: 'rotate(30deg)'
    }
  },
  titleMenu: {
    textTransform: 'capitalize'
  },
  bar: {},
  menu: {},
  menuOpen: {},
  paperNav: {
    width: '100%',
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
        backgroundColor: theme.palette.text.secondary,
        '&:after, &:before': {
          backgroundColor: theme.palette.text.secondary
        }
      }
    }
  },
  mobileNav: {
    background: theme.palette.background.paper,
    '& $menu': {
      padding: theme.spacing(0, 2),
      overflow: 'auto',
      top: theme.spacing(15),
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
    '& span': {
      fontSize: 24
    }
  }
}));

export default headerStyles;
