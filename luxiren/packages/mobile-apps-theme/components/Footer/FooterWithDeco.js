import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import Footer from './Footer';
import useStyles from './footer-style';

function FooterWithDeco(props) {
  const classes = useStyles();
  const text = useText();
  const { t, toggleDir } = props;

  return (
    <div className={classes.footerDeco}>
      <svg className={classes.decoTop}>
        <use xlinkHref="/images/mobile/deco-wave-top.svg#main" />
      </svg>
      <div className={classes.decoration} />
      <div className={classes.action}>
        <Typography variant="h4" className={text.subtitle}>
          {t('common:mobile-landing.footer_text')}
        </Typography>
        <div className={classes.btnArea}>
          <Link href="/">
            <a>
              <img src="/images/mobile/app-store.png" alt="app store" />
            </a>
          </Link>
          <Link href="/">
            <a>
              <img src="/images/mobile/play-store.png" alt="play store" />
            </a>
          </Link>
        </div>
      </div>
      <Footer toggleDir={toggleDir} />
    </div>
  );
}

FooterWithDeco.propTypes = {
  t: PropTypes.func.isRequired,
  toggleDir: PropTypes.func.isRequired
};

export default withTranslation(['mobile-landing'])(FooterWithDeco);
