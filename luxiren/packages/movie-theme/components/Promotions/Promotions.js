import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Slider from 'react-animated-slider';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './promotion-style';
import imgAPI from '~/public/images/imgAPI';

const sliderData = [
  {
    image: imgAPI.movie[1],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  },
  {
    image: imgAPI.movie[2],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  },
  {
    image: imgAPI.movie[3],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  },
  {
    image: imgAPI.movie[5],
    subtitle: 'Vivamus sit amet',
    title: 'The Lorem Ipsum Dolor Sit',
    rating: 5,
    duration: '2h 15m',
    desc: 'Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci.'
  }
];

function Promotion(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  return (
    <div className={classes.root}>
      <div className={classes.sliderWrap}>
        <Slider
          autoplay={7500}
          className="slider-wrapper"
          previousButton={(
            <i className={clsx(classes.arrowIcon, 'ion-ios-arrow-round-forward')} />
          )}
          nextButton={(
            <i className={clsx(classes.arrowIcon, 'ion-ios-arrow-round-forward')} />
          )}
        >
          {sliderData.map((item, index) => (
            <div className={classes.item} key={index.toString()}>
              <div className={classes.innerBg}>
                <div className={classes.background}>
                  <figure>
                    <img src={item.image} alt={item.title} />
                  </figure>
                </div>
                <Grid container className={classes.row}>
                  <Grid item sm={7} xs={12}>
                    <div className={classes.text}>
                      <Typography variant="h4">
                        <span className={text.subtitle2}>{item.subtitle}</span>
                        {item.title}
                      </Typography>
                      <p className={classes.property}>
                        <span className={classes.star}>
                          {[...Array(item.rating)].map((e, indexStar) => (
                            <Icon className={classes.starIcon} key={indexStar.toString()}>star</Icon>
                          ))}
                        </span>
                        5.0
                        <span className={classes.divider} />
                        {item.duration}
                      </p>
                      <article className={classes.desc}>
                        <Typography component="h6" className={text.paragraph}>
                          {item.desc}
                        </Typography>
                      </article>
                      <section className={classes.btnArea}>
                        <Button className={classes.btnText} color="secondary">
                          {t('common:movie-landing.promo_btn1')}
                        </Button>
                        <Button variant="contained" size="large" color="primary">
                          {t('common:movie-landing.promo_btn2')}
                        </Button>
                      </section>
                    </div>
                  </Grid>
                  <Grid item sm={5} xs={12}>
                    <Hidden xsDown>
                      <div className={classes.image}>
                        <figure>
                          <img src={item.image} alt={item.title} />
                        </figure>
                      </div>
                    </Hidden>
                  </Grid>
                </Grid>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

Promotion.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['movie-landing'])(Promotion);
