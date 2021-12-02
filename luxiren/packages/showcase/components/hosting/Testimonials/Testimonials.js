import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Carousel from 'react-slick';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import Title from '../Title';
import TestiCard from '../Cards/Testimonial';
import useStyle from './testi-style';

const testiContent = [
  {
    text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    name: 'John Doe',
    title: 'Chief Digital Officer',
  },
  {
    text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jena Doe',
    title: 'Graphic Designer',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    name: 'Jihan Doe',
    title: 'CEO Software House',
  },
  {
    text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
  },
];


function Testimonials(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Translation function
  const { t } = props;

  const slider = useRef(null);
  const classes = useStyle();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 2,
    arrows: false,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    }]
  };
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Title
          caption={t('common:hosting-landing.testi_headtitle')}
          align="center"
          text={t('common:hosting-landing.testi_title')}
        />
        <div className={classes.sliderWrap}>
          <div className={classes.carousel}>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={clsx(classes.nav, classes.prev)}
              onClick={() => slider.current.slickPrev()}
            >
              <i className="ion-ios-arrow-back" />
            </Button>
            <Carousel ref={slider} {...settings}>
              {testiContent.map((item, index) => (
                <div key={index.toString()} className={classes.item}>
                  <TestiCard
                    text={item.text}
                    name={item.name}
                    title={item.title}
                  />
                </div>
              ))}
            </Carousel>
            <Button
              variant="contained"
              color="primary"
              size="small"
              className={clsx(classes.nav, classes.next)}
              onClick={() => slider.current.slickNext()}
            >
              <i className="ion-ios-arrow-forward" />
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}

Testimonials.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['hosting-landing'])(Testimonials);
