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
  openDrawer: {},
  header: {
    position: 'fixed',
    color: theme.palette.common.white,
    background: 'none',
    boxShadow: `0 0 10px ${fade(theme.palette.primary.main, 0.4)}`,
    top: 0,
    transition: 'all 0.3s ease',
    '& > *': {
      [theme.breakpoints.down('md')]: {
        paddingLeft: 0
      }
    },
    '&$fixed': {
      '& $navigation': {
        background: theme.palette.background.paper
      },
      [theme.breakpoints.up('md')]: {
        top: theme.spacing(-7),
      }
    },
    '&$openDrawer': {
      zIndex: 1600,
      boxShadow: 'none',
    }
  },
  logo: {
    display: 'flex',
    '& a': {
      textDecoration: 'none',
      fontSize: 26,
      alignItems: 'center',
      display: 'flex',
      color: theme.palette.text.secondary
    },
    '& img': {
      position: 'relative',
      height: 48,
      marginRight: theme.spacing(),
    },
  },
  headerTop: {
    background: theme.palette.background.paper,
    padding: theme.spacing(2, 1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0.5, 1),
    },
    '& > *': {
      justifyContent: 'space-between',
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
        padding: 0
      },
    }
  },
  userMenu: {
    fontSize: 16,
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.primary,
    '& > *': {
      margin: theme.spacing(0, 1.5)
    }
  },
  divider: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    marginLeft: theme.spacing(3),
    height: 28
  },
  dividerSidebar: {
    borderTop: `1px solid ${theme.palette.divider}`,
    margin: theme.spacing(3, 0),
  },
  navigation: {
    display: 'flex',
    background: fade(theme.palette.background.paper, 0.7),
    '& nav': {
      alignItems: 'center',
      padding: theme.spacing(),
      display: 'flex'
    }
  },
  active: {},
  button: {
    width: theme.spacing(15)
  },
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 1),
      },
    },
    '& a': {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightMedium,
      boxShadow: 'none',
      position: 'relative',
      '&$icon': {
        color: theme.palette.text.secondary,
      }
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
          textTransform: 'capitalize',
          minWidth: 0,
          padding: '6px',
          background: 'none !important',
          '&:hover': {
            transition: 'all 0.3s ease-out',
            opacity: 0.5,
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.primary.main,
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
  icon: {
    color: theme.palette.text.secondary,
  },
  setting: {
    '& $icon': {
      transition: 'all 0.3s ease',
    },
    '& $active': {
      transform: 'rotate(30deg)'
    }
  },
  bar: {},
  menu: {},
  paperNav: {
    width: '100%',
    [theme.breakpoints.up(680)]: {
      width: 300,
    },
  },
  mobileMenu: {
    margin: theme.spacing(0, 1),
    '& $bar': {
      backgroundColor: theme.palette.text.secondary,
      '&:after, &:before': {
        backgroundColor: theme.palette.text.secondary
      }
    }
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
    '& span': {
      fontSize: 24
    }
  }
}));

export default headerStyles;
