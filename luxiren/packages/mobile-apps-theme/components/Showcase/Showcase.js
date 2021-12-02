import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-slick';
import Paper from '@material-ui/core/Paper';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import ParallaxLarge from '../Parallax/Large';
import Title from '../Title';
import useStyles from './showcase-style';

function Showcase(props) {
  const classes = useStyles();
  const { t } = props;

  const sliderSide = useRef(null);
  const sliderCenter = useRef(null);
  const [slider, setSlider] = useState({
    nav1: null,
    nav2: null
  });
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setSlider({
      nav1: sliderSide.current,
      nav2: sliderCenter.current
    });
  }, []);

  const settingsCenter = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    afterChange: (current) => setActiveSlide(current),
  };

  const settingsSide = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 5,
    arrows: false,
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  };

  const handleDotsNav = index => {
    sliderCenter.current.slickGoTo(index);
  };

  return (
    <div className={classes.root}>
      <svg className={classes.decoTop}>
        <use xlinkHref="/images/mobile/deco-wave-top.svg#main" />
      </svg>
      <Title dark align="center">
        {t('common:mobile-landing.showcase_title')}
      </Title>
      <div className={classes.carouselWrap}>
        <div className={classes.invertParallax}>
          <ParallaxLarge />
        </div>
        <div className={classes.carouselSide}>
          <Carousel ref={sliderSide} asNavFor={slider.nav2} {...settingsSide}>
            <div className={classes.item}>
              <Paper className={classes.frame}>
                <img src={imgAPI.mobile[7]} alt="app" />
              </Paper>
            </div>
            <div className={classes.item}>
              <Paper className={classes.frame}>
                <img src={imgAPI.mobile[8]} alt="app" />
              </Paper>
            </div>
            <div className={classes.item}>
              <Paper className={classes.frame}>
                <img src={imgAPI.mobile[9]} alt="app" />
              </Paper>
            </div>
            <div className={classes.item}>
              <Paper className={classes.frame}>
                <img src={imgAPI.mobile[10]} alt="app" />
              </Paper>
            </div>
            <div className={classes.item}>
              <Paper className={classes.frame}>
                <img src={imgAPI.mobile[11]} alt="app" />
              </Paper>
            </div>
            <div className={classes.item}>
              <Paper className={classes.frame}>
                <img src={imgAPI.mobile[12]} alt="app" />
              </Paper>
            </div>
            <div className={classes.item}>
              <Paper className={classes.frame}>
                <img src={imgAPI.mobile[13]} alt="app" />
              </Paper>
            </div>
          </Carousel>
        </div>
        <div className={classes.carouselCenter}>
          <Paper className={classes.frame}>
            <Carousel ref={sliderCenter} asNavFor={slider.nav1} {...settingsCenter}>
              <div className={classes.item}>
                <img src={imgAPI.mobile[7]} alt="app" />
                <div className={classes.widget}>
                  <img src={imgAPI.mobile[14]} alt="app" />
                </div>
              </div>
              <div className={classes.item}>
                <img src={imgAPI.mobile[8]} alt="app" />
                <div className={classes.widget}>
                  <img src={imgAPI.mobile[15]} alt="app" />
                </div>
              </div>
              <div className={classes.item}>
                <img src={imgAPI.mobile[9]} alt="app" />
                <div className={classes.widget}>
                  <img src={imgAPI.mobile[16]} alt="app" />
                </div>
              </div>
              <div className={classes.item}>
                <img src={imgAPI.mobile[10]} alt="app" />
                <div className={classes.widget}>
                  <img src={imgAPI.mobile[17]} alt="app" />
                </div>
              </div>
              <div className={classes.item}>
                <img src={imgAPI.mobile[11]} alt="app" />
                <div className={classes.widget}>
                  <img src={imgAPI.mobile[18]} alt="app" />
                </div>
              </div>
              <div className={classes.item}>
                <img src={imgAPI.mobile[12]} alt="app" />
                <div className={classes.widget}>
                  <img src={imgAPI.mobile[19]} alt="app" />
                </div>
              </div>
              <div className={classes.item}>
                <img src={imgAPI.mobile[13]} alt="app" />
                <div className={classes.widget}>
                  <img src={imgAPI.mobile[20]} alt="app" />
                </div>
              </div>
            </Carousel>
          </Paper>
        </div>
      </div>
      <svg className={classes.decoBottom}>
        <use xlinkHref="/images/mobile/deco-wave-bottom.svg#main" />
      </svg>
      <div className={classes.decoBottomMobile} />
      <div className={classes.pagination}>
        <ul>
          {[...Array(7)].map((e, index) => (
            <li
              key={index.toString()}
              className={index === activeSlide ? classes.active : ''}
            >
              <button type="button" onClick={() => handleDotsNav(index)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Showcase.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['mobile-landing'])(Showcase);
