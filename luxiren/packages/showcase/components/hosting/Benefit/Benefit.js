import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import { withTranslation } from '~/i18n';
import img from '~/public/images/imgAPI';
import Title from '../Title';
import useStyles from './benefit-style';

function Benefit(props) {
  const classes = useStyles();
  const { t } = props;
  return (
    <div className={classes.root}>
      <div className={classes.parallaxImg}>
        <Hidden smDown>
          <ParallaxProvider>
            <Parallax
              y={[10, 40]}
              tagOuter="figure"
            >
              <img src={img.hosting[3]} alt="parallax-bg" />
            </Parallax>
          </ParallaxProvider>
        </Hidden>
      </div>
      <Container fixed>
        <div className={classes.wrapper}>
          <Grid container>
            <Grid item md={5} xs={12}>
              <div className={classes.desc}>
                <Title
                  caption={t('common:hosting-landing.benefit_headtitle')}
                  text={t('common:hosting-landing.benefit_title')}
                  align="left"
                  dark
                />
                <ul className={classes.list}>
                  <li>Vestibulum faucibus</li>
                  <li>Vivamus sit amet interdum elit</li>
                  <li>Donec dignissim</li>
                  <li>Quisque lacinia purus</li>
                  <li>Fusce placerat enim et odio molestie</li>
                  <li>Pellentesque ac bibendum tortor</li>
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>And more…</li>
                </ul>
                <Button variant="contained" color="secondary" size="large">
                  {t('common:hosting-landing.getstarted')}
                </Button>
              </div>
            </Grid>
            <Grid item md={7} xs={12}>
              <Hidden smDown>
                <figure className={classes.img}>
                  <img src={img.hosting[4]} alt="benefit" />
                </figure>
              </Hidden>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

Benefit.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['hosting-landing'])(Benefit);
