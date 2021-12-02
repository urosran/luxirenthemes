import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import { withTranslation } from '~/i18n';
import useStyles from './counter-style';

function Counter(props) {
  const { t } = props;
  const classes = useStyles();
  return (
    <div className={classes.counterWrap}>
      <Container fixed>
        <Grid container justify="center" alignItems="center" spacing={2}>
          <Grid sm={4} item>
            <div className={clsx(classes.counterItem, classes.deco)}>
              <div className={classes.text}>
                <Typography variant="h3">
                  +200
                </Typography>
                <Typography component="p">
                  {t('common:medical-landing.about_clinics')}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid sm={4} item>
            <div className={clsx(classes.counterItem, classes.deco)}>
              <div className={classes.text}>
                <Typography variant="h3">
                  +500
                </Typography>
                <Typography component="p">
                  {t('common:medical-landing.about_doctor')}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid sm={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <Typography variant="h2">
                  24
                </Typography>
                <Typography component="p">
                  {t('common:medical-landing.about_hours')}
                </Typography>
              </div>
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

export default withTranslation(['medical-landing'])(Counter);
