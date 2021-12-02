import React from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-slick';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Hidden from '@material-ui/core/Hidden';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import useStyles from './trending-style';

const settings = {
  dots: false,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 7000
};

function Trending(props) {
  const classes = useStyles();
  const { t } = props;
  return (
    <div className={classes.root}>
      <Hidden xsDown>
        <div className={classes.grid25}>
          <img src={imgAPI.movie[6]} alt="trending" />
          <ButtonBase className={classes.overlay}>
            <Typography variant="h5">
              {t('common:movie-landing.trending_rent')}
            </Typography>
          </ButtonBase>
        </div>
        <div className={classes.grid50}>
          <img src={imgAPI.movie[7]} alt="trending" />
          <ButtonBase className={classes.overlay}>
            <Typography variant="h3">
              <i className="ion-ios-cafe" />
              FREE
              <span>Movies</span>
            </Typography>
          </ButtonBase>
        </div>
        <div className={classes.grid25}>
          <img src={imgAPI.movie[8]} alt="trending" />
          <ButtonBase className={classes.overlay}>
            <Typography variant="h5">
              {t('common:movie-landing.trending_episodes')}
            </Typography>
          </ButtonBase>
        </div>
      </Hidden>
      <Hidden smUp>
        <Carousel {...settings}>
          <div>
            <div className={classes.grid25}>
              <img src={imgAPI.movie[6]} alt="trending" />
              <ButtonBase className={classes.overlay}>
                <Typography variant="h5">
                  {t('common:movie-landing.trending_rent')}
                </Typography>
              </ButtonBase>
            </div>
          </div>
          <div>
            <div className={classes.grid50}>
              <img src={imgAPI.movie[7]} alt="trending" />
              <ButtonBase className={classes.overlay}>
                <Typography variant="h3">
                  <i className="ion-ios-cafe" />
                  FREE
                  <span>Movies</span>
                </Typography>
              </ButtonBase>
            </div>
          </div>
          <div>
            <div className={classes.grid25}>
              <img src={imgAPI.movie[8]} alt="trending" />
              <ButtonBase className={classes.overlay}>
                <Typography variant="h5">
                  {t('common:movie-landing.trending_episodes')}
                </Typography>
              </ButtonBase>
            </div>
          </div>
        </Carousel>
      </Hidden>
    </div>
  );
}

Trending.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['movie-landing'])(Trending);
