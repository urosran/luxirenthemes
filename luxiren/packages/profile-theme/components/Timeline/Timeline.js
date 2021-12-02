import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import ReactWOW from 'react-wow';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import useStyles from './timeline-style';
import brand from '~/public/text/brand';

function Timeline(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();

  const { t } = props;

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setTimeout(() => { setPlay(true); }, 200);
  };
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12}>
            <Hidden mdDown>
              <Typography variant="h2" className={classes.nameDeco}>
                {brand.profile.name}
              </Typography>
            </Hidden>
          </Grid>
          <Grid item container spacing={3} md={12} lg={10}>
            <Grid item md={5} sm={6} xs={12}>
              <div className={classes.history}>
                <Typography variant="h5" className={clsx(classes.title, text.subtitle)}>
                  {t('common:profile-landing.timeline_experience')}
                </Typography>
                <ul>
                  <li>
                    <ReactWOW animation="fadeInLeftShort" delay="0.2s" duration="0.3s">
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Creative Director</Typography>
                        <Typography gutterBottom>at Fourth Company</Typography>
                        <Typography className={classes.time}>2015 - Present</Typography>
                      </div>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation="fadeInLeftShort" offset={100} delay="0.3s" duration="0.3s">
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Senior UI/UX Designer</Typography>
                        <Typography gutterBottom>at Third Company</Typography>
                        <Typography className={classes.time}>2013 - 2015</Typography>
                      </div>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation="fadeInLeftShort" offset={200} delay="0.4s" duration="0.3s">
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>UI/UX Designer</Typography>
                        <Typography gutterBottom>at Second Company</Typography>
                        <Typography className={classes.time}>2012 - 2013</Typography>
                      </div>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation="fadeInLeftShort" offset={300} delay="0.5s" duration="0.3s">
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>UI/UX Designer</Typography>
                        <Typography gutterBottom>at First Company</Typography>
                        <Typography className={classes.time}>2009 - 2011</Typography>
                      </div>
                    </ReactWOW>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.progress}>
                <Typography variant="h5" className={clsx(classes.title, text.subtitle)}>
                  {t('common:profile-landing.timeline_skill')}
                </Typography>
                <ReactWOW animation="fadeIn" delay="0.4s" duration="0.3s" callback={handlePlay}>
                  <ul>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-ios-color-wand" />
                        <Typography variant="h6" className={text.subtitle2}>UI Interface Design</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-logo-dribbble" />
                        <Typography variant="h6" className={text.subtitle2}>Icon Design</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 70 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-ios-globe" />
                        <Typography variant="h6" className={text.subtitle2}>HTML Prototyping</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 60 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-ios-camera" />
                        <Typography variant="h6" className={text.subtitle2}>Photo Editing</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 90 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <i className="ion-ios-snow" />
                        <Typography variant="h6" className={text.subtitle2}>Graphic Illustrations</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                  </ul>
                </ReactWOW>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Timeline.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['profile-landing'])(Timeline);
