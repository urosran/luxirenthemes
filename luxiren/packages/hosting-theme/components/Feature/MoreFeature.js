import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import ReactWOW from 'react-wow';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { withTranslation } from '~/i18n';
import { useTextAlign, useText } from '~/theme/common';
import Title from '../Title';
import useStyles from './feature-style';

function MoreFeature(props) {
  // Theme breakpoints
  const theme = useTheme();
  const text = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Translation Function
  const { t } = props;

  const classes = useStyles();
  const align = useTextAlign();
  return (
    <div className={classes.moreFeature}>
      <div className={classes.chartDeco} />
      <Container fixed={isDesktop}>
        <div className={classes.item}>
          <Grid
            direction={isMobile ? 'column-reverse' : 'row'}
            container
            spacing={6}
          >
            <Grid item md={6} xs={12}>
              <figure className={classes.illustration}>
                <img src="/images/hosting/illustration1.png" alt="feature" />
              </figure>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={classes.text}>
                <ReactWOW animation="fadeInLeftShort" delay="0.4s" duration="0.3s">
                  <div>
                    <Title
                      caption={t('common:hosting-landing.morefeature_headtitle1')}
                      text={t('common:hosting-landing.morefeature_title1')}
                      align={isMobile ? 'center' : 'left'}
                    />
                    <div className={isMobile ? align.textCenter : ''}>
                      <Typography className={text.subtitle2} align={isMobile ? 'center' : 'left'}>
                        {t('common:hosting-landing.morefeature_desc1')}
                      </Typography>
                      <Button variant="contained" color="primary">
                        {t('common:hosting-landing.learnmore')}
                      </Button>
                    </div>
                  </div>
                </ReactWOW>
              </div>
            </Grid>
          </Grid>
        </div>
        <Divider className={classes.divider} />
        <div className={classes.item}>
          <Grid container spacing={6}>
            <Grid item md={6} xs={12}>
              <div className={clsx(classes.text, align.textRight)}>
                <ReactWOW animation="fadeInLeftShort" delay="0.4s" duration="0.3s">
                  <div>
                    <Title
                      caption={t('common:hosting-landing.morefeature_headtitle2')}
                      text={t('common:hosting-landing.morefeature_title2')}
                      align={isMobile ? 'center' : 'right'}
                    />
                    <div className={isMobile ? align.textCenter : ''}>
                      <Typography className={text.subtitle2} align={isMobile ? 'center' : 'right'}>
                        {t('common:hosting-landing.morefeature_desc2')}
                      </Typography>
                      <Button variant="contained" color="primary">
                        {t('common:hosting-landing.learnmore')}
                      </Button>
                    </div>
                  </div>
                </ReactWOW>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <figure className={classes.illustration}>
                <img src="/images/hosting/illustration2.png" alt="feature" />
              </figure>
            </Grid>
          </Grid>
        </div>
        <Divider className={classes.divider} />
        <div className={clsx(classes.item, classes.last)}>
          <Grid container>
            <Grid item sm={12}>
              <div className={clsx(classes.text, align.textCenter)}>
                <Title
                  caption={t('common:hosting-landing.morefeature_headtitle3')}
                  text={t('common:hosting-landing.morefeature_title3')}
                  align="center"
                />
                <Typography className={text.subtitle2}>
                  {t('common:hosting-landing.morefeature_desc3')}
                </Typography>
                <Button variant="contained" color="primary">
                  {t('common:hosting-landing.learnmore')}
                </Button>
              </div>
              <figure className={classes.illustration}>
                <img src="/images/hosting/illustration3.png" alt="feature" />
              </figure>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

MoreFeature.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['hosting-landing'])(MoreFeature);
