import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Link from 'next/link';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import Settings from './Settings';
import MobileMenu from './MobileMenu';
import useStyles from './header-style';
import navMenu from './menu';
import { withTranslation } from '~/i18n';
import routeLink from '~/public/text/link';
import logo from '~/public/images/architect-logo.svg';
import brand from '~/public/text/brand';

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
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [menuList] = useState([
    createData(navMenu[0], '#' + navMenu[0]),
    createData(navMenu[1], '#' + navMenu[1]),
    createData(navMenu[2], '#' + navMenu[2]),
    createData(navMenu[3], '#' + navMenu[3]),
    createData(navMenu[4], '#' + navMenu[4]),
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
          invert && classes.invert,
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={!isMobile}>
          <Grid container>
            <Grid item sm={2} xs={7}>
              <div className={classes.logo}>
                { isMobile && (
                  <IconButton
                    onClick={handleOpenDrawer}
                    className={clsx('hamburger hamburger--spring', classes.mobileMenu, openDrawer && 'is-active')}
                  >
                    <span className="hamburger-box">
                      <span className={clsx(classes.bar, 'hamburger-inner')} />
                    </span>
                  </IconButton>
                )}
                {invert ? (
                  <Link href="/">
                    <a>
                      <img src={logo} alt="logo" />
                      {isDesktop && brand.architect.projectName}
                    </a>
                  </Link>
                ) : (
                  <AnchorLink href="#home">
                    <img src={logo} alt="logo" />
                    {isDesktop && brand.architect.projectName}
                  </AnchorLink>
                )}
              </div>
            </Grid>
            <Grid item sm={isTablet ? 10 : 9} xs={5}>
              <div className={classes.headerContent}>
                <nav className={clsx(classes.navMenu, invert && classes.invert)}>
                  {isDesktop && (
                    <Scrollspy
                      items={navMenu}
                      currentClassName="active"
                    >
                      {menuList.map(item => (
                        <li key={item.id.toString()}>
                          {invert ? (
                            // eslint-disable-next-line
                            <Button offset={item.offset || 0} href={'/' + item.url}>
                              {t('common:architect-landing.header_' + item.name)}
                            </Button>
                          ) : (
                            // eslint-disable-next-line
                            <Button component={AnchorLink} offset={item.offset || 0} href={item.url}>
                              {t('common:architect-landing.header_' + item.name)}
                            </Button>
                          )}
                        </li>
                      ))}
                      <li>
                        <Button href={routeLink.architect.contact}>
                          {t('common:architect-landing.header_contact')}
                        </Button>
                      </li>
                    </Scrollspy>
                  )}
                </nav>
                <nav className={classes.navMenu}>
                  <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} invert={invert} />
                </nav>
              </div>
            </Grid>
          </Grid>
        </Container>
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

export default withTranslation(['architect-landing'])(Header);
