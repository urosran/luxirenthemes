import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import ArrowNext from '@material-ui/icons/ArrowForward';
import Typography from '@material-ui/core/Typography';
import Slider from 'react-animated-slider';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './promotion-style';
import imgAPI from '~/public/images/imgAPI';

const sliderData = [
  {
    image: imgAPI.fashion[1],
  },
  {
    image: imgAPI.fashion[2],
  },
  {
    image: imgAPI.fashion[3],
  },
  {
    image: imgAPI.fashion[4],
  },
];

function Promotion(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.sliderWrap}>
          <Slider
            autoplay={7500}
            className="slider-wrapper"
            previousButton={(
              <ArrowNext className={classes.arrowIcon} />
            )}
            nextButton={(
              <ArrowNext className={classes.arrowIcon} />
            )}
          >
            {sliderData.map((item, index) => (
              <div className={classes.item} key={index.toString()}>
                <div className={classes.innerBg}>
                  <Grid container>
                    <Grid item sm={12} md={4}>
                      <div className={classes.text}>
                        <Hidden mdUp>
                          <div className={classes.background}>
                            <figure>
                              <img src={item.image} alt={item.title} />
                            </figure>
                          </div>
                        </Hidden>
                        <Typography variant="h2" className={text.title}>
                          <span className={text.subtitle2}>{t('common:fashion-landing.promo_caption')}</span>
                          SALE
                        </Typography>
                        <Typography variant="h4" className={text.subtitle}>
                          {t('common:fashion-landing.promo_title')}
                        </Typography>
                        <article className={classes.desc}>
                          <Typography component="h6" className={text.paragraph}>
                            {t('common:fashion-landing.promo_desc')}
                          </Typography>
                        </article>
                        <Button variant="outlined" className={classes.button}>
                          {t('common:fashion-landing.promo_btn')}
                          <ArrowNext className={classes.iconBtn} />
                        </Button>
                      </div>
                    </Grid>
                    <Grid item sm={12} md={8}>
                      <Hidden smDown>
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
      </Container>
    </div>
  );
}

Promotion.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['fashion-landing'])(Promotion);
