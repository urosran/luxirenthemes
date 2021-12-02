import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import ButtonBase from '@material-ui/core/ButtonBase';
import ArrowIcon from '@material-ui/icons/ArrowForward';
import ReactWOW from 'react-wow';
import Container from '@material-ui/core/Container';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import DotParallax from '../Parallax/Dots';
import CategoryCard from '../Cards/Category';
import Title from '../Title';
import useStyles from './explore-style';

const categoriesData = [
  {
    img: imgAPI.education[0],
    title: 'Photography',
    desc: 'Nulla lobortis nunc vitae nisi semper semper.'
  },
  {
    img: imgAPI.education[4],
    title: 'Artificial Intelligence',
    desc: 'Nulla lobortis nunc vitae nisi semper semper.'
  },
  {
    img: imgAPI.education[7],
    title: 'Architect',
    desc: 'Nulla lobortis nunc vitae nisi semper semper.'
  },
  {
    img: imgAPI.education[2],
    title: 'Geography',
    desc: 'Nulla lobortis nunc vitae nisi semper semper.'
  },
  {
    img: imgAPI.education[6],
    title: 'Art',
    desc: 'Nulla lobortis nunc vitae nisi semper semper.'
  }
];

function Explore(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  // Translation Function
  const { t } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.parallaxWrap}>
        <DotParallax />
      </div>
      <Container fixed={isDesktop}>
        <Box p={isDesktop ? 6 : 0}>
          <Title
            head={t('common:education-landing.explore_title')}
            desc={t('common:education-landing.explore_desc')}
            align={isMobile ? 'center' : 'left'}
            color="primary"
          />
          <div className={classes.massonry}>
            <Grid container spacing={isMobile ? 2 : 6}>
              {categoriesData.map((item, index) => (
                <Grid item lg={4} xs={6} key={index.toString()}>
                  <ReactWOW
                    animation="fadeInUpShort"
                    offset={-100}
                    delay={(index * 0.2) + 's'}
                    duration="0.4s"
                  >
                    <div>
                      <CategoryCard
                        img={item.img}
                        title={item.title}
                        desc={item.desc}
                      />
                    </div>
                  </ReactWOW>
                </Grid>
              ))}
              <Grid item lg={4} xs={6}>
                <ReactWOW
                  animation="fadeInUpShort"
                  offset={-100}
                  delay={(categoriesData.length * 0.2) + 's'}
                  duration="0.4s"
                >
                  <div className={classes.cardWrap}>
                    <span className={classes.fold} />
                    <ButtonBase
                      className={classes.allCategoryCard}
                      focusRipple
                      href="#"
                    >
                      <span className={classes.figure}>
                        <img src={imgAPI.education[10]} alt="img" />
                      </span>
                      <span className={classes.property}>
                        <span className={classes.title}>ALL COURSE</span>
                        <ArrowIcon />
                      </span>
                    </ButtonBase>
                  </div>
                </ReactWOW>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Container>
    </div>
  );
}

Explore.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['education-landing'])(Explore);
