import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useText } from '~/theme/common';
import { withTranslation } from '~/i18n';
import useStyles from './feature-style';

function Feature(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={8}>
          <Grid item md={4} xs={12}>
            <i className={clsx(classes.icon, 'ion-ios-world')} />
            <Divider className={classes.divider} />
            <Typography variant="h5" className={text.subtitle}>
              {t('common:fashion-landing.feature_title1')}
            </Typography>
            <Typography display="block" className={text.paragraph}>
              {t('common:fashion-landing.feature_desc1')}
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <i className={clsx(classes.icon, 'ion-ribbon-b')} />
            <Divider className={classes.divider} />
            <Typography variant="h5" className={text.subtitle}>
              {t('common:fashion-landing.feature_title2')}
            </Typography>
            <Typography display="block" className={text.paragraph}>
              {t('common:fashion-landing.feature_desc2')}
            </Typography>
          </Grid>
          <Grid item md={4} xs={12}>
            <i className={clsx(classes.icon, 'ion-android-sync')} />
            <Divider className={classes.divider} />
            <Typography variant="h5" className={text.subtitle}>
              {t('common:fashion-landing.feature_title3')}
            </Typography>
            <Typography display="block" className={text.paragraph}>
              {t('common:fashion-landing.feature_desc3')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Feature.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['fashion-landing'])(Feature);
