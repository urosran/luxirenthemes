import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Hidden from '@material-ui/core/Hidden';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { withTranslation } from '~/i18n';
import brand from '~/public/text/brand';
import routeLink from '~/public/text/link';
import logo from '~/public/images/hosting-logo.svg';
import Settings from './Settings';
import MobileMenu from './MobileMenu';
import useStyles from './header-style';
import navMenu from './menu';

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function Header(props) {
  const [fixed, setFixed] = useState(false);
  let flagFixed = false;
  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 100);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);
  const classes = useStyles();
  const theme = useTheme();
  const {
    onToggleDark,
    onToggleDir,
    invert,
    t
  } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [menuList] = useState([
    createData(navMenu[0], '#' + navMenu[0], 200),
    createData(navMenu[1], '#' + navMenu[1], 70),
    createData(navMenu[2], '#' + navMenu[2]),
    createData(navMenu[3], '#' + navMenu[3], 80),
    createData(navMenu[4], '#' + navMenu[4], 40),
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };
  return (
    <Fragment>
      { isMobile && (<MobileMenu open={openDrawer} toggleDrawer={handleOpenDrawer} />) }
      <AppBar
        component="div"
        position="relative"
        id="header"
        className={clsx(
          classes.header,
          fixed && classes.fixed,
          openDrawer && classes.openDrawer
        )}
      >
        <div className={classes.headerTop}>
          <Container fixed={isDesktop}>
            <div className={classes.logo}>
              { isMobile && (
                <IconButton
                  onClick={handleOpenDrawer}
                  className={clsx('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active')}
                >
                  <span className="hamburger-box">
                    <span className={clsx(classes.bar, 'hamburger-inner')} />
                  </span>
                </IconButton>
              )}
              {invert ? (
                <a href={routeLink.hosting.home}>
                  <img src={logo} alt="logo" />
                  {brand.hosting.name}
                </a>
              ) : (
                <AnchorLink href="#home">
                  <img src={logo} alt="logo" />
                  {brand.hosting.name}
                </AnchorLink>
              )}
            </div>
            <nav className={classes.userMenu}>
              <Hidden mdDown>
                <PhoneIcon />
                +12 345 678 90
                <Divider className={classes.divider} />
                <Button href={routeLink.hosting.login}>
                  {t('common:hosting-landing.header_login')}
                </Button>
              </Hidden>
              <Hidden xsDown>
                <Button href={routeLink.hosting.register} size="small" variant="contained" color="secondary" className={classes.button}>
                  {t('common:hosting-landing.header_register')}
                </Button>
              </Hidden>
              <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} invert={invert} />
            </nav>
          </Container>
        </div>
        <Hidden smDown>
          <div className={classes.navigation}>
            <Container fixed>
              <nav className={classes.navMenu}>
                {invert ? (
                  <IconButton className={classes.icon} href={routeLink.hosting.home}>
                    <HomeIcon />
                  </IconButton>
                ) : (
                  <IconButton className={classes.icon} href="#home">
                    <HomeIcon />
                  </IconButton>
                )}
                {isDesktop && (
                  <Scrollspy
                    items={navMenu}
                    currentClassName="active"
                  >
                    {menuList.map(item => (
                      <li key={item.id.toString()}>
                        {invert ? (
                          <Button offset={item.offset || 0} href={'/' + item.url}>
                            {t('common:hosting-landing.header_' + item.name)}
                          </Button>
                        ) : (
                          <Button component={AnchorLink} offset={item.offset || 0} href={item.url}>
                            {t('common:hosting-landing.header_' + item.name)}
                          </Button>
                        )}
                      </li>
                    ))}
                    <li>
                      <Button href={routeLink.hosting.contact}>
                        {t('common:hosting-landing.header_contact')}
                      </Button>
                    </li>
                  </Scrollspy>
                )}
              </nav>
            </Container>
          </div>
        </Hidden>
      </AppBar>
    </Fragment>
  );
}

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  invert: PropTypes.bool,
  t: PropTypes.func.isRequired
};

Header.defaultProps = {
  sticky: false,
  invert: false
};

export default withTranslation(['hosting-landing'])(Header);
