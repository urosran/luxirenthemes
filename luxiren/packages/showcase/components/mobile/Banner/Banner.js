import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './banner-style';

function Banner(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  const elem = useRef(null);

  useEffect(() => {
    window.renderParticles();
  }, []);

  return (
    <div className={classes.root} ref={elem}>
      <div className={classes.background}>
        <div className={classes.gradient}>
          <div className={classes.decoWave} />
          <Hidden smDown>
            <div className={classes.decoLine} />
          </Hidden>
          <div className={classes.decoInner}>
            <canvas id="particle_art_mobile" width="500px" height="700px" />
          </div>
        </div>
      </div>
      <Container fixed={isDesktop}>
        <Grid container>
          <Grid item md={7} xs={12}>
            <div className={classes.text}>
              <Typography variant="h3" className={text.title}>
                {t('common:mobile-landing.banner_title')}
                &nbsp;
                <strong>
                  {t('common:mobile-landing.banner_titlestrong')}
                </strong>
              </Typography>
              <Typography variant="h5" className={text.subtitle}>
                {t('common:mobile-landing.banner_desc')}
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
          </Grid>
          <Grid item md={5} xs={12}>
            <div className={classes.decoration}>
              <div className={classes.phoneIllustration}>
                <img src={imgAPI.mobile[0]} className={classes.phone} alt="illustration" />
                <Hidden mdDown>
                  <img src={imgAPI.mobile[1]} className={clsx(classes.widgetTop, 'fragment-fadeUp')} alt="illustration" />
                  <img src={imgAPI.mobile[2]} className={clsx(classes.widgetLeft, 'fragment-fadeUp')} alt="illustration" />
                  <img src={imgAPI.mobile[3]} className={clsx(classes.widgetRight, 'fragment-fadeUp')} alt="illustration" />
                </Hidden>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Banner.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['mobile-landing'])(Banner);
