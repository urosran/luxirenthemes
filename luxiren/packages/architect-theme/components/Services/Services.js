import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import Title from '../Title';
import useStyles from './services-style';

function Services(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  return (
    <div className={classes.root}>
      <Container>
        <Title
          head={t('common:architect-landing.services_title')}
          desc={t('common:architect-landing.services_desc')}
        />
      </Container>
      <Container fixed>
        <Grid container spacing={8} className={classes.grid}>
          <Grid item md={4}>
            <div className={classes.figure}>
              <svg
                className={classes.fill}
              >
                <use xlinkHref="/images/architect/services-fill-1.svg#main" />
              </svg>
              <svg
                className={classes.outline}
              >
                <use xlinkHref="/images/architect/services-outline-1.svg#main" />
              </svg>
            </div>
            <Typography variant="h5" className={text.subtitle2}>
              {t('common:architect-landing.services_item1')}
            </Typography>
            <Typography component="p" className={text.paragraph}>
              {t('common:architect-landing.services_itemdesc1')}
            </Typography>
          </Grid>
          <Grid item md={4}>
            <div className={classes.figure}>
              <svg className={classes.fill}>
                <use xlinkHref="/images/architect/services-fill-2.svg#main" />
              </svg>
              <svg className={classes.outline}>
                <use xlinkHref="/images/architect/services-outline-2.svg#main" />
              </svg>
            </div>
            <Typography variant="h5" className={text.subtitle2}>
              {t('common:architect-landing.services_item2')}
            </Typography>
            <Typography component="p" className={text.paragraph}>
              {t('common:architect-landing.services_itemdesc2')}
            </Typography>
          </Grid>
          <Grid item md={4}>
            <div className={classes.figure}>
              <svg
                className={classes.fill}
              >
                <use xlinkHref="/images/architect/services-fill-3.svg#main" />
              </svg>
              <svg
                className={classes.outline}
              >
                <use xlinkHref="/images/architect/services-outline-3.svg#main" />
              </svg>
            </div>
            <Typography variant="h5" className={text.subtitle2}>
              {t('common:architect-landing.services_item3')}
            </Typography>
            <Typography component="p" className={text.paragraph}>
              {t('common:architect-landing.services_itemdesc3')}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Services.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['architect-landing'])(Services);
