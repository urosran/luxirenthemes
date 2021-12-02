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
  invert: {},
  openDrawer: {},
  header: {
    position: 'absolute',
    color: theme.palette.common.white,
    background: 'none',
    boxShadow: 'none',
    transition: 'background 0.3s ease',
    '& > *': {
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0
      }
    },
    '&$fixed': {
      position: 'fixed',
      background: 'rgba(0, 0, 0, 0.6)',
      backdropFilter: 'saturate(180%) blur(20px)',
      '& $navMenu': {
        '& svg': {
          fill: theme.palette.common.white
        },
        '& a': {
          color: theme.palette.common.white
        }
      },
      '& $mobileMenu': {
        '& $bar': {
          backgroundColor: theme.palette.common.white,
          '&:after, &:before': {
            backgroundColor: theme.palette.common.white
          },
        }
      },
    },
    '&$openDrawer': {
      zIndex: 1600,
      boxShadow: 'none',
      background: 'none',
      filter: 'none'
    },
    '&$invert': {
      '& $navMenu': {
        '& svg': {
          fill: theme.palette.text.primary
        },
        '& a': {
          color: theme.palette.text.primary,
        }
      },
      '& $divider': {
        borderColor: theme.palette.divider
      },
      '& $mobileMenu': {
        '& $bar': {
          backgroundColor: `${theme.palette.text.primary}`,
          '&:after, &:before': {
            backgroundColor: `${theme.palette.text.primary}`
          }
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
      display: 'flex'
    }
  },
  logo: {
    marginRight: theme.spacing(),
    '& a': {
      textDecoration: 'none',
      display: 'block',
      fontSize: 16,
      color: theme.palette.common.white,
      alignItems: 'center',
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: 'center'
    },
    '& img': {
      display: 'block',
      margin: '0 auto',
      width: 64,
      height: 64,
      [theme.breakpoints.down('xs')]: {
        height: 48,
        width: 48,
      }
    }
  },
  active: {},
  button: {},
  navLogo: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 2),
    },
    [theme.breakpoints.up('lg')]: {
      flex: 1,
    },
  },
  navMenu: {
    '& ul': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
      '& li': {
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'capitalize',
          minWidth: 0,
          padding: theme.spacing(0, 2),
          fontWeight: theme.typography.fontWeightMedium,
          transition: 'all 0.3s ease-out',
          color: theme.palette.common.white,
          fontSize: 16,
          boxShadow: 'none',
          position: 'relative',
          margin: theme.spacing(0.5, 1),
          '&:hover': {
            background: 'rgba(255, 255, 255, 0.2)'
          },
          [theme.breakpoints.down('md')]: {
            margin: theme.spacing(0, 3),
          },
          [theme.breakpoints.down('xs')]: {
            margin: 0
          },
        },
        '&[class="active"]': {
          '& a': {
            boxShadow: '0 1.5px 32px -8px rgba(0, 0, 0, 0.22)',
            color: `${theme.palette.common.white} !important`,
            background: theme.palette.primary.main,
          }
        }
      }
    }
  },
  navAuth: {
    justifyContent: 'space-evenly',
    '& a': {
      color: theme.palette.common.white,
      padding: theme.spacing(0.5, 4),
      margin: theme.spacing(0, 0.5),
      fontSize: 16,
    },
    '& $button': {
      background: theme.palette.secondary.light,
      color: theme.palette.secondary.main + '!important',
      fontWeight: theme.typography.fontWeightBold
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
  paperNav: {
    width: '100%',
    background: 'rgba(0, 0, 0, 0.6)',
    backdropFilter: 'saturate(180%) blur(20px)',
    [theme.breakpoints.up(680)]: {
      width: 300,
    },
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
    '& $bar': {
      backgroundColor: `${theme.palette.common.white}`,
      '&:after, &:before': {
        backgroundColor: `${theme.palette.common.white}`
      }
    },
    '&[class*="is-active"]': {
      '& $bar': {
        backgroundColor: `${theme.palette.common.white} !important`,
        '&:after, &:before': {
          backgroundColor: `${theme.palette.common.white} !important`
        }
      },
    }
  },
  mobileNav: {
    '& $menu': {
      padding: theme.spacing(0, 5),
      overflow: 'auto',
      top: theme.spacing(10),
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
  },
  divider: {
    background: 'none',
    borderLeft: '1px solid rgba(255, 255, 255, 0.5)',
    height: 20
  },
  dividerSidebar: {
    background: 'rgba(255, 255, 255, 0.2)',
    margin: '1rem 0'
  }
}));

export default headerStyles;
