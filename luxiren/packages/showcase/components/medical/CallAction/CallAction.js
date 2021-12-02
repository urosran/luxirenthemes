import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from '~/i18n';
import link from '~/public/text/link';
import useStyles from './action-style';

function CallAction(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Translation Function
  const { t } = props;

  const classes = useStyles();
  return (
    <Fragment>
      <Container fixed={isDesktop}>
        <div className={classes.root}>
          <Paper className={classes.paper}>
            <Grid container alignItems="center">
              <Grid item lg={8} md={7} xs={12}>
                <Typography variant="h4" gutterBottom display="block">
                  {t('common:medical-landing.cta_title')}
                </Typography>
                <Typography display="block">
                  {t('common:medical-landing.cta_subtitle')}
                </Typography>
              </Grid>
              <Grid item lg={4} md={5} xs={12}>
                <Grid container justify="flex-end">
                  <Button size="large" variant="contained" color="primary" href={link.medical.contact} className={classes.button}>
                    {t('common:medical-landing.cta_btn')}
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </Container>
    </Fragment>
  );
}

CallAction.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['medical-landing'])(CallAction);
