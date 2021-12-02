import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import { withTranslation } from '~/i18n';
import Title from '../Title';
import useStyles from './about-style';

function About(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  return (
    <div className={classes.root}>
      <div className={classes.bgDeco}>
        <img src={imgAPI.architect[8]} alt="3d home model" />
      </div>
      <Container fixed>
        <Grid container justify="center" spacing={6}>
          <Grid item md={7} xs={12}>
            <Title
              head={t('common:architect-landing.about_title')}
              dark
            />
            <Typography className={text.paragraph}>
              {t('common:architect-landing.about_desc')}
            </Typography>
          </Grid>
          <Grid item md={5} xs={12} className={classes.illusWrap}>
            <Hidden smDown>
              <div>
                <img src={imgAPI.architect[8]} alt="3d home model" className={classes.illustration} />
              </div>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

About.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['architect-landing'])(About);
