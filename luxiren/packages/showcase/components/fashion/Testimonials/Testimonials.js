import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Carousel from 'react-slick';
import QuoteIcon from '@material-ui/icons/FormatQuote';
import BackIcon from '@material-ui/icons/ArrowBackSharp';
import NextIcon from '@material-ui/icons/ArrowForwardSharp';
import { withTranslation } from '~/i18n';
import { Parallax } from 'react-parallax';
import { useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import useStyle from './testi-style';

const testiContent = [
  {
    text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    img: imgAPI.fashion[26],
    name: 'John Doe',
    title: 'Chief Digital Officer',
  },
  {
    text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    img: imgAPI.fashion[27],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    img: imgAPI.fashion[28],
    name: 'Jena Doe',
    title: 'Graphic Designer',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    img: imgAPI.fashion[29],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
  }
];

function Testimonials(props) {
  const sliderImage = useRef(null);
  const sliderText = useRef(null);
  const { t } = props;
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
      <div className={classes.imgSlider}>
        <Carousel ref={sliderImage} asNavFor={slider.nav2} {...settingsImg}>
          {testiContent.map((item, index) => (
            <div key={index.toString()} className={classes.item}>
              <Parallax
                bgImage={item.img}
                bgImageAlt="testimonial"
                strength={70}
              >
                <div className={classes.parallaxProps} />
              </Parallax>
            </div>
          ))}
        </Carousel>
      </div>
      <div className={classes.textSlider}>
        <QuoteIcon className={classes.icon} />
        <nav>
          <Button className={clsx(classes.navButton, classes.prev)} onClick={prevSlide}>
            <BackIcon />
          </Button>
          <Button className={clsx(classes.navButton, classes.next)} onClick={nextSlide}>
            <NextIcon />
          </Button>
        </nav>
        <div>
          <Typography variant="h3" className={clsx(classes.title, text.title)}>
            {t('common:fashion-landing.testimonial_title')}
          </Typography>
          <div className={classes.carousel}>
            <Carousel ref={sliderText} asNavFor={slider.nav1} {...settingsText}>
              {testiContent.map((item, index) => (
                <div key={index.toString()} className={classes.item}>
                  <Typography component="p" className={text.paragraph}>
                    {item.text}
                  </Typography>
                  <Divider className={classes.divider} />
                  <Typography variant="h6" className={text.subtitle2}>
                    {item.name}
                  </Typography>
                  <Typography variant="caption" className={text.paragraph}>
                    {item.title}
                  </Typography>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

Testimonials.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['fashion-landing'])(Testimonials);
