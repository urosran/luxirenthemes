import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useText } from '~/theme/common';
import { withTranslation } from '~/i18n';
import Title from '../Title';
import NewsCard from '../Cards/News';
import ParallaxLarge from '../Parallax/Large';
import imgAPI from '~/public/images/imgAPI';
import useStyle from './news-event-style';

function NewsEvent(props) {
  const classes = useStyle();
  const text = useText();
  const { t } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={classes.root}>
      <div className={classes.decoBgTop} />
      <div className={classes.parallaxEvent}>
        <ParallaxLarge />
      </div>
      <Title align="center">
        {t('common:mobile-landing.news_title')}
      </Title>
      <Typography align="center" className={text.subtitle2}>
        {t('common:mobile-landing.news_desc')}
      </Typography>
      <div className={classes.blogWrap}>
        <Container fixed>
          <Grid container spacing={6} className={classes.listNews}>
            <Grid item md={6}>
              <NewsCard
                type="potrait"
                img={imgAPI.photo[11]}
                caption="headline"
                text="Sed imperdiet enim ligula, vitae viverra justo."
              />
            </Grid>
            <Grid item md={6}>
              <NewsCard
                type={isMobile ? 'potrait' : 'landscape'}
                img={imgAPI.photo[1]}
                caption="news"
                text="Sed imperdiet enim ligula, vitae viverra justo."
              />
              <NewsCard
                type="landscape"
                img={imgAPI.photo[2]}
                caption="news"
                text="Sed imperdiet enim ligula, vitae viverra justo."
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

NewsEvent.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['mobile-landing'])(NewsEvent);
