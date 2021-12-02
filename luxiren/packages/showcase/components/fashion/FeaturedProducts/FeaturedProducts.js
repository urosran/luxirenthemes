import React, { useRef } from 'react';
import Carousel from 'react-slick';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import BackIcon from '@material-ui/icons/ArrowBackSharp';
import NextIcon from '@material-ui/icons/ArrowForwardSharp';
import imgAPI from '~/public/images/imgAPI';
import Title from '../Title';
import SimpleThumbCard from '../Cards/SimpleThumb';
import useStyles from './featured-style';

const dataProducts = [
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[17]
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[18]
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[19]
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[20]
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[21]
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[22]
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[23],
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[24]
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[25]
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[20]
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[22]
  },
  {
    title: 'Vivamus Sit Smet',
    price: '$780.00',
    img: imgAPI.fashion[23]
  },
];

const settings = {
  dots: true,
  speed: 500,
  slidesToShow: 6,
  arrows: false,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 7000,
  responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 3,
      infinite: true,
      dots: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};

export default function Feature() {
  const classes = useStyles();
  const slider = useRef(null);
  const nextSlide = () => {
    slider.current.slickNext();
  };
  const prevSlide = () => {
    slider.current.slickPrev();
  };
  return (
    <div className={classes.root}>
      <Title align="center" primary="Featured" secondary="Products" />
      <div className={classes.carouselWrap}>
        <Button className={clsx(classes.nav, classes.prev)} onClick={prevSlide}>
          <BackIcon />
        </Button>
        <Button className={clsx(classes.nav, classes.next)} onClick={nextSlide}>
          <NextIcon />
        </Button>
        <Carousel ref={slider} {...settings}>
          {dataProducts.map((item, index) => (
            <div key={index.toString()} className={classes.item}>
              <SimpleThumbCard
                title={item.title}
                price={item.price}
                img={item.img}
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
