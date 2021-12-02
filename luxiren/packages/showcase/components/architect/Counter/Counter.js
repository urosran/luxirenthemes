import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CountUp from 'react-countup';
import ReactWOW from 'react-wow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import ParalaxBox from '../Parallax/Box';
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
    <div className={classes.root}>
      <Container maxWidth="md">
        <div className={classes.counterWrap}>
          <ParalaxBox />
          <Paper className={classes.paper}>
            <Grid container justify="center" alignItems="center" spacing={6}>
              <Grid sm={4} xs={12} item>
                <div className={classes.counterItem}>
                  <i className="ion-ios-people-outline" />
                  <div className={classes.text}>
                    <Typography variant="h4" className={text.title}>
                      {countup(20, play)}
                    </Typography>
                    <Typography variant="h6" className={text.subtitle2}>
                      {t('common:architect-landing.counter_expert')}
                    </Typography>
                  </div>
                </div>
              </Grid>
              <Grid sm={4} xs={12} item>
                <ReactWOW animation="fadeIn" offset={300} callback={handlePlay}>
                  <div className={classes.counterItem}>
                    <i className="ion-ios-briefcase-outline" />
                    <div className={classes.text}>
                      <Typography variant="h4" className={text.title}>
                        {countup(123, play)}
                      </Typography>
                      <Typography variant="h6" className={text.subtitle2}>
                        {t('common:architect-landing.counter_completed')}
                      </Typography>
                    </div>
                  </div>
                </ReactWOW>
              </Grid>
              <Grid sm={4} xs={12} item>
                <div className={classes.counterItem}>
                  <i className="ion-ios-heart-outline" />
                  <div className={classes.text}>
                    <Typography variant="h4" className={text.title}>
                      {countup(89, play)}
                    </Typography>
                    <Typography variant="h6" className={text.subtitle2}>
                      {t('common:architect-landing.counter_happy')}
                    </Typography>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Container>
    </div>
  );
}

Counter.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['architect-landing'])(Counter);
