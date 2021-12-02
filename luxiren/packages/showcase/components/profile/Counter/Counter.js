import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import ReactWOW from 'react-wow';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './counter-style';

function Counter(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
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
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <Grid container justify="center" alignItems="center" className={classes.root} spacing={6}>
          <Grid md={4} item>
            <ReactWOW animation="fadeIn" offset={300} callback={handlePlay}>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <i className="ion-ios-briefcase-outline" />
                  <Typography variant="h4" className={text.title2}>
                    {countup(123, play)}
                  </Typography>
                </div>
                <Typography variant="h6" className={text.subtitle2}>
                  {t('common:profile-landing.counter_completed')}
                </Typography>
              </div>
            </ReactWOW>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <i className="ion-ios-time-outline" />
                <Typography variant="h4" className={text.title2}>
                  {countup(4567, play)}
                </Typography>
              </div>
              <Typography variant="h6" className={text.subtitle2}>
                {t('common:profile-landing.counter_hour')}
              </Typography>
            </div>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <i className="ion-ios-heart-outline" />
                <Typography variant="h4" className={text.title2}>
                  {countup(89, play)}
                </Typography>
              </div>
              <Typography variant="h6" className={text.subtitle2}>
                {t('common:profile-landing.counter_happy')}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Counter.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['profile-landing'])(Counter);
