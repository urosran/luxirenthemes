import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CountUp from 'react-countup';
import ReactWOW from 'react-wow';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import Title from '../Title';
import useStyles from './feature-style';

function Feature(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;

  // Media Query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const [play, setPlay] = useState(false);
  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );
  const handlePlay = () => {
    setTimeout(() => { setPlay(true); }, 500);
  };
  return (
    <div className={classes.root}>
      <Container maxWidth="md">
        <Title
          head={t('common:education-landing.feature_title')}
          desc={t('common:education-landing.feature_desc')}
          align="center"
          color="primary"
        />
        <ReactWOW animation="fadeIn" offset={300} callback={handlePlay}>
          <div className={classes.counterWrap}>
            <Grid container spacing={isDesktop ? 8 : 2}>
              <Grid sm={6} xs={12} item>
                <div className={classes.counterItem}>
                  <figure>
                    <img src="/images/education/hd-video.svg" alt="hd-video" />
                  </figure>
                  <div className={classes.text}>
                    <Typography variant="h4" className={text.title}>
                      +
                      {countup(100, play)}
                      K
                    </Typography>
                    <Typography variant="h6" className={text.subtitle2}>
                      {t('common:education-landing.counter_videos')}
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid sm={6} xs={12} item>
                <div className={classes.counterItem}>
                  <figure>
                    <img src="/images/education/presenter.svg" alt="presenter" />
                  </figure>
                  <div className={classes.text}>
                    <Typography variant="h4" className={text.title}>
                      +
                      {countup(200, play)}
                    </Typography>
                    <Typography variant="h6" className={text.subtitle2}>
                      {t('common:education-landing.counter_mentors')}
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid sm={6} xs={12} item>
                <div className={classes.counterItem}>
                  <figure>
                    <img src="/images/education/money.svg" alt="money" />
                  </figure>
                  <div className={classes.text}>
                    <Typography variant="h4" className={text.title}>
                      $
                      {countup(500, play)}
                    </Typography>
                    <Typography variant="h6" className={text.subtitle2}>
                      {t('common:education-landing.counter_save')}
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid sm={6} xs={12} item>
                <div className={classes.counterItem}>
                  <figure>
                    <img src="/images/education/unlimited.svg" alt="unlimited" />
                  </figure>
                  <div className={classes.text}>
                    <Typography variant="h4" className={text.title}>
                      Free
                    </Typography>
                    <Typography variant="h6" className={text.subtitle2}>
                      {t('common:education-landing.counter_free')}
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </ReactWOW>
      </Container>
    </div>
  );
}

Feature.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['education-landing'])(Feature);
