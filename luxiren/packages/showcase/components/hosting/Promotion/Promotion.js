import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import NextIcon from '@material-ui/icons/KeyboardArrowRight';
import Typography from '@material-ui/core/Typography';
import Slider from 'react-animated-slider';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './promotion-style';
import img from '~/public/images/imgAPI';

const sliderData = [
  {
    image: img.hosting[0],
    title: 'Wordpress Hosting start from $2/mo',
    desc: 'Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.',
    date: '12 Jul - 10 Aug'
  },
  {
    image: img.hosting[1],
    title: 'Dedicated VPS start from $5/mo',
    desc: 'Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.',
    date: '12 Jul - 10 Aug'
  },
  {
    image: img.hosting[2],
    title: '.COM + Hosting Only $15/mo',
    desc: 'Sed imperdiet enim ligula vitae viverra. Vivamus sit amet interdum elit.',
    date: '12 Jul - 10 Aug'
  }
];

function Promotion(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <div className={classes.sliderWrap}>
          <Slider
            autoplay={70000}
            className="slider-wrapper"
            previousButton={(
              <NextIcon className={classes.prev} />
            )}
            nextButton={(
              <NextIcon className={classes.next} />
            )}
          >
            {sliderData.map((item, index) => (
              <div className={classes.item} key={index.toString()}>
                <Grid container>
                  <Grid item sm={4} xs={12}>
                    <section className={classes.promoImage}>
                      <figure className={classes.image}>
                        <img src={item.image} alt={item.title} />
                      </figure>
                    </section>
                  </Grid>
                  <Grid item sm={8} xs={12}>
                    <div className={classes.text}>
                      <Typography variant="h1">
                        <ButtonBase>
                          {item.title}
                        </ButtonBase>
                      </Typography>
                      <Typography component="p" className={text.subtitle2}>
                        {item.desc}
                      </Typography>
                      <section className={classes.time}>
                        <Typography component="h6" className={text.caption}>
                          <span>
                            {t('common:hosting-landing.promo_periode')}
                            :&nbsp;
                            {item.date}
                          </span>
                        </Typography>
                      </section>
                    </div>
                  </Grid>
                </Grid>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
      <div className={classes.cloudTop}>
        <svg>
          <use xlinkHref="/images/hosting/cloud_top.svg#main" />
        </svg>
      </div>
    </div>
  );
}

Promotion.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['hosting-landing'])(Promotion);
