import React, { useState, useEffect } from 'react';
import { PageTransition } from 'next-page-transitions';
import LoadingBar from 'react-top-loading-bar';
import { appWithTranslation } from '../i18n';
/* import css vendors */
import 'react-animated-slider/build/horizontal.css';
import 'react-image-lightbox/style.css';
import '../node_modules/animate.css/animate.css';
import '../vendors/animate-slider.css';
import '../vendors/animate-slider-extends.css';
import '../vendors/hamburger-menu.css';
import '../vendors/top-loading-bar.css';
import '../vendors/animate-extends.css';
import '../vendors/page-transition.css';
import '../vendors/slick/slick.css';
import '../vendors/slick/slick-theme.css';
import '../vendors/button-reset.css';

let themeType = 'light';
if (typeof Storage !== 'undefined') { // eslint-disable-line
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function MyApp(props) {
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    // Remove preloader
    const preloader = document.getElementById('preloader');
    if (preloader !== null || undefined) {
      setTimeout(() => {
        preloader.remove();
      }, 1500);
    }

    // Remove loading bar
    setLoading(0);
    setTimeout(() => { setLoading(100); }, 2000);
  }, []);

  const { Component, pageProps, router } = props; // eslint-disable-line

  return (
    <div>
      <LoadingBar
        height={0}
        color="#ffffff"
        progress={loading}
        className="top-loading-bar"
      />
      <div id="main-wrap">
        <PageTransition timeout={300} classNames="page-fadeUp-transition">
          <Component
            {...pageProps}
            key={router.route}
            mode={themeType}
          />
        </PageTransition>
      </div>
    </div>
  );
}

export default appWithTranslation(MyApp);
