import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';
import BackIcon from '@material-ui/icons/ArrowBackSharp';
import NextIcon from '@material-ui/icons/ArrowForwardSharp';
import Carousel from 'react-slick';
import { Parallax } from 'react-parallax';
import { useText } from '~/theme/common';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import useStyle from './blog-style';

const blogContent = [
  {
    img: imgAPI.fashion[30],
    title: 'Proin lacinia erat ac',
    desc: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  },
  {
    img: imgAPI.fashion[31],
    title: 'Proin lacinia erat ac',
    desc: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  },
  {
    img: imgAPI.fashion[32],
    title: 'Proin lacinia erat ac',
    desc: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  },
  {
    img: imgAPI.fashion[33],
    title: 'Proin lacinia erat ac',
    desc: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  },
  {
    img: imgAPI.fashion[34],
    title: 'Proin lacinia erat ac',
    desc: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  },
];

function Blog(props) {
  const { t } = props;
  const sliderImage = useRef(null);
  const sliderText = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const [slider, setSlider] = useState({
    nav1: null,
    nav2: null
  });
  useEffect(() => {
    setSlider({
      nav1: sliderImage.current,
      nav2: sliderText.current
    });
  }, []);
  const classes = useStyle();
  const text = useText();
  const settingsImg = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    fade: true,
    arrows: false,
  };
  const settingsText = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    pauseOnHover: false,
    arrows: false,
  };
  const nextSlide = () => {
    sliderText.current.slickNext();
  };
  const prevSlide = () => {
    sliderText.current.slickPrev();
  };
  return (
    <div className={classes.root}>
      <div className={classes.textSlider}>
        <Typography variant="h3" className={classes.title} align={isMobile ? 'center' : 'left'}>
          {t('common:fashion-landing.blog_title')}
        </Typography>
        <div className={classes.carousel}>
          <Carousel ref={sliderText} asNavFor={slider.nav1} {...settingsText}>
            {blogContent.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <Typography variant="h6" className={text.title}>
                  {item.name}
                </Typography>
                <Typography component="p" className={text.paragraph}>
                  {item.desc}
                </Typography>
                <Button className={classes.button}>
                  {t('common:fashion-landing.read_more')}
                </Button>
              </div>
            ))}
          </Carousel>
        </div>
        <nav>
          <Button className={clsx(classes.navButton, classes.prev)} onClick={prevSlide}>
            <BackIcon />
          </Button>
          <Button className={clsx(classes.navButton, classes.next)} onClick={nextSlide}>
            <NextIcon />
          </Button>
        </nav>
      </div>
      <div className={classes.imgSlider}>
        <Carousel ref={sliderImage} asNavFor={slider.nav2} {...settingsImg}>
          {blogContent.map((item, index) => (
            <div key={index.toString()} className={classes.item}>
              <Parallax
                bgImage={item.img}
                bgImageAlt="blog"
                strength={70}
              >
                <div className={classes.parallaxProps} />
              </Parallax>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

Blog.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['fashion-landing'])(Blog);
