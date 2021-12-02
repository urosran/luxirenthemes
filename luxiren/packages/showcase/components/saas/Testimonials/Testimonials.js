import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Carousel from 'react-slick';
import QuoteIcon from '@material-ui/icons/FormatQuote';
import { useText, useHidden } from '~/theme/common';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import useStyle from './testi-style';

const testiContent = [
  {
    text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: 'Chief Digital Officer',
    logo: '/images/logos/agency.png',
  },
  {
    text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
    logo: '/images/logos/architect.png',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[2],
    name: 'Jena Doe',
    title: 'Graphic Designer',
    logo: '/images/logos/cloud.png',
  },
  {
    text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
    avatar: imgAPI.avatar[3],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
    logo: '/images/logos/starter.png',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[4],
    name: 'Jihan Doe',
    title: 'CEO Software House',
    logo: '/images/logos/coin.png',
  },
  {
    text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
    avatar: imgAPI.avatar[6],
    name: 'Jovelin Doe',
    title: 'Senior Graphic Designer',
    logo: '/images/logos/fashion.png',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[7],
    name: 'John Doe',
    title: 'Senior Graphic Designer',
    logo: '/images/logos/mobile.png',
  },
  {
    text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
    avatar: imgAPI.avatar[10],
    name: 'John Doe',
    title: 'Chief Digital Officer',
    logo: '/images/logos/profile.png',
  },
  {
    text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
    avatar: imgAPI.avatar[1],
    name: 'Jean Doe',
    title: 'Chief Digital Officer',
    logo: '/images/logos/saas.png',
  },
];


function Testimonials(props) {
  const slider = useRef(null);
  const classes = useStyle();
  const hide = useHidden();
  const text = useText();
  const [currentSlide, setCurSlide] = useState(0);
  const theme = useTheme();
  const { t } = props;
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    fade: true,
    arrows: false,
    pauseOnHover: false,
    afterChange: (curSlide) => {
      setCurSlide(curSlide);
    }
  };
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={6}>
          <Grid item md={7} xs={12}>
            <div className={classes.sliderWrap}>
              <Hidden smDown>
                <div className={classes.decoration}>
                  <svg width="900px" height="618px" viewBox="0 0 900 618" version="1.1">
                    <defs>
                      <linearGradient x1="78.2441494%" y1="65.8737759%" x2="10.5892887%" y2="33.8596367%" id="linearGradient-1">
                        <stop stopColor={theme.palette.primary.dark} offset="0%" />
                        <stop stopColor={theme.palette.primary.main} offset="100%" />
                      </linearGradient>
                    </defs>
                    <g stroke="none" strokeWidth="0" fill="none" fillRule="evenodd">
                      <path d="M442.972909,617.331576 C569.290851,617.331576 618.618612,525.937324 804.142458,549.304771 C989.666303,572.672218 872.7227,109.743835 732.652282,54.307977 C592.581863,-1.12788075 538.308155,61.549598 304.148084,8.36113994 C69.9880137,-44.8273182 0,167.6782 0,308.489881 C0,450.379879 177.014996,617.331576 442.972909,617.331576 Z" id="Oval" fill="url(#linearGradient-1)" />
                    </g>
                  </svg>
                </div>
              </Hidden>
              <Typography variant="h3" align={isMobile ? 'center' : 'left'} className={clsx(classes.title, text.title2)}>
                {t('common:saas-landing.testi_title')}
                <br />
                <strong>
                  {t('common:saas-landing.testi_titlestrong')}
                </strong>
              </Typography>
              <QuoteIcon className={classes.icon} />
              <div className={classes.carousel}>
                <Carousel ref={slider} {...settings}>
                  {testiContent.map((item, index) => (
                    <div key={index.toString()} className={classes.item}>
                      <div className={classes.inner}>
                        <div className={classes.profile}>
                          <Avatar alt={item.name} src={item.avatar} className={classes.avatar} />
                          <Typography variant="h6" className={classes.name}>
                            {item.name}
                            <span>
                              {item.title}
                            </span>
                          </Typography>
                        </div>
                        <Typography component="p" className={text.paragraph}>
                          {item.text}
                        </Typography>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </Grid>
          <Grid item md={5} xs={12} className={hide.smDown}>
            <Hidden smDown>
              <div className={classes.logoWrap}>
                {testiContent.map((item, index) => (
                  <div className={classes.figureBtn} key={index.toString()}>
                    <Button onClick={() => slider.current.slickGoTo(index)} className={currentSlide === index ? classes.active : ''}>
                      <img src={item.logo} alt={'logo' + index.toString()} key={index.toString()} />
                    </Button>
                  </div>
                ))}
              </div>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Testimonials.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['saas-landing'])(Testimonials);
