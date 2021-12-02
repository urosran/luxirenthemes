import React, { Fragment, useState, useEffect } from 'react';
import { MuiThemeProvider, createMuiTheme, makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { StylesProvider, jssPreset } from '@material-ui/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import HeadProps from '../components/HeadProperties';
import Banner from '../components/showcase/Banner';
import Explore from '../components/showcase/Explore';
import Footer from '../components/showcase/Footer';
import appTheme from '../theme/mobileMui';

const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.paper,
  }
}));

function Showcase() {
  const classes = useStyles();
  const [theme] = useState({
    ...appTheme('joker', 'light')
  });

  useEffect(() => {
    // Refresh JSS in SSR
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  });

  const muiTheme = createMuiTheme(theme);
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

  return (
    <Fragment>
      <Head>
        <title>
          Luxiren - React Single Landing Page Template Collection
        </title>
        <HeadProps />
      </Head>
      <StylesProvider jss={jss}>
        <MuiThemeProvider theme={muiTheme}>
          <CssBaseline />
          <div className={classes.mainWrap}>
            <Banner />
            <div id="explore">
              <Explore />
            </div>
            <Footer />
          </div>
        </MuiThemeProvider>
      </StylesProvider>
    </Fragment>
  );
}

Showcase.getInitialProps = async () => ({
  namespacesRequired: [
    'common',
    'agency-landing',
    'architect-landing',
    'crypto-landing',
    'fashion-landing',
    'hosting-landing',
    'mobile-landing',
    'profile-landing',
    'saas-landing'
  ]
});

export default Showcase;
