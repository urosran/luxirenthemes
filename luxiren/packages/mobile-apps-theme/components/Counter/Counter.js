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
    setTimeout(() => { setPlay(true); }, 200);
  };
  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <ReactWOW animation="fadeIn" offset={200} callback={handlePlay}>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.counterInner}
            spacing={6}
          >
            <Grid sm={4} xs={6} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <Typography variant="h3" className={text.title}>
                    +
                    {countup(200, play)}
                    M
                  </Typography>
                  <Typography component="p" className={text.subtitle}>
                    <i className="ion-ios-cloud-download-outline" />
                    {t('common:mobile-landing.counter_downloads')}
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid sm={4} xs={6} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <Typography variant="h3" className={text.title}>
                    +
                    {countup(480, play)}
                    M
                  </Typography>
                  <Typography component="p" className={text.subtitle}>
                    <i className="ion-ios-checkmark-circle-outline" />
                    {t('common:mobile-landing.counter_transaction')}
                  </Typography>
                </div>
              </div>
            </Grid>
            <Grid sm={4} xs={6} item>
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <Typography variant="h3" className={text.title}>
                    +
                    {countup(180, play)}
                    M
                  </Typography>
                  <Typography component="p" className={text.subtitle}>
                    <i className="ion-ios-star-outline" />
                    {t('common:mobile-landing.counter_ratting')}
                  </Typography>
                </div>
              </div>
            </Grid>
          </Grid>
        </ReactWOW>
      </Container>
    </div>
  );
}

Counter.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['mobile-landing'])(Counter);
