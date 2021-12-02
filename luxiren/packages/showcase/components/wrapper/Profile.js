import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import {
  MuiThemeProvider,
  createMuiTheme,
  StylesProvider,
  jssPreset
} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Head from 'next/head';
import { create } from 'jss';
import rtl from 'jss-rtl';
import brand from '../../public/text/brand';
import HeadProps from '../HeadProperties';
// General Component
import Header from '../profile/Header';
import BannerNav from '../profile/BannerNav';
import PageNav from '../profile/PageNav';
import Notification from '../profile/Notification';
// Showcase Setup
import ThemePalette from './ThemePalette';
import BgDefault from './BgDefault';
import { i18n } from '../../i18n';
import appTheme from '../../theme/profileMui';

let themeType = 'light';
// eslint-disable-next-line
if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function Profile(props) {
  const { children, pageName, isFull } = props;
  const [direction, changeDir] = useState('ltr');
  const [themeMode, changeMode] = useState(themeType);
  const [color, changeColor] = useState('violet');
  const [theme, changeTheme] = useState({
    direction: i18n.language === 'ara' ? 'rtl' : 'ltr',
    ...appTheme(color, themeMode)
  });

  useEffect(() => {
    // Set layout direction
    document.dir = i18n.language === 'ara' ? 'rtl' : 'ltr';

    // Refresh JSS in SSR
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  });

  const toggleDirection = dir => {
    setTimeout(() => {
      document.dir = dir;
    }, 200);
    changeDir(dir);
    changeTheme({
      ...theme,
      direction: dir,
      palette: {
        ...theme.palette
      }
    });
  };

  const toggleDarkTheme = () => {
    localStorage.setItem('luxiTheme', themeMode === 'light' ? 'dark' : 'light');
    changeMode(themeMode === 'light' ? 'dark' : 'light');
    changeTheme({
      direction,
      ...appTheme(color, themeMode === 'light' ? 'dark' : 'light')
    });
  };

  const handleChangeColor = selectedColor => {
    changeColor(selectedColor);
    changeTheme({
      direction,
      ...appTheme(selectedColor, themeMode)
    });
  };

  const muiTheme = createMuiTheme(theme);
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  return (
    <Fragment>
      <Head>
        <title>
          {brand.profile.name}
          &nbsp; - &nbsp;
          {pageName}
        </title>
        <HeadProps />
      </Head>
      <StylesProvider jss={jss}>
        <MuiThemeProvider theme={muiTheme}>
          <CssBaseline />
          <ThemePalette
            changeColor={handleChangeColor}
            changeDir={toggleDirection}
            changeMode={toggleDarkTheme}
            isDark={themeMode}
            isRtl={direction}
            selectedColor={color}
          />
          <BgDefault>
            {isFull && (
              <Fragment>
                <Header
                  onToggleDark={toggleDarkTheme}
                  onToggleDir={toggleDirection}
                />
                <section id="home">
                  <BannerNav
                    onToggleDark={toggleDarkTheme}
                    onToggleDir={toggleDirection}
                  />
                </section>
              </Fragment>
            )}
            <Fragment>
              {children}
            </Fragment>
            {isFull && (
              <Fragment>
                <Hidden mdDown>
                  <PageNav />
                </Hidden>
                <Hidden mdDown>
                  <Notification />
                </Hidden>
              </Fragment>
            )}
          </BgDefault>
        </MuiThemeProvider>
      </StylesProvider>
    </Fragment>
  );
}

Profile.getInitialProps = async () => ({
  namespacesRequired: ['common', 'profile-landing'],
});

Profile.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string,
  isFull: PropTypes.bool
};

Profile.defaultProps = {
  pageName: 'Landing Page',
  isFull: true
};

export default Profile;