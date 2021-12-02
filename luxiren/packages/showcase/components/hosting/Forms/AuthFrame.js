import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ParallaxCloud from '../Parallax/Cloud';
import brand from '~/public/text/brand';
import routerLink from '~/public/text/link';
import logo from '~/public/images/hosting-logo.svg';
import { useText } from '~/theme/common';
import useStyles from './form-style';

function AuthFrame(props) {
  const classes = useStyles();
  const text = useText();
  const { children, title, subtitle } = props;
  return (
    <div className={classes.pageWrap}>
      <div className={classes.cloudDeco}>
        <ParallaxCloud />
      </div>
      <Hidden mdUp>
        <div className={clsx(classes.logo, classes.logoHeader)}>
          <a href={routerLink.hosting.home}>
            <img src={logo} alt="logo" />
            <Typography component="span" className={text.subtitle2}>
              {brand.hosting.projectName}
            </Typography>
          </a>
        </div>
      </Hidden>
      <Container maxWidth="lg" className={classes.innerWrap}>
        <Paper className={clsx(classes.formBox, 'fragment-fadeUp')}>
          <IconButton href={routerLink.hosting.home} className={classes.backtohome}>
            <i className="ion-ios-home-outline" />
            <i className="ion-ios-arrow-round-back" />
          </IconButton>
          <div className={classes.authFrame}>
            <Grid container spacing={0}>
              <Grid item md={5} xs={12}>
                <Hidden smDown>
                  <div className={classes.greeting}>
                    <div className={classes.logo}>
                      <img src={logo} alt="logo" />
                      <Typography className={text.subtitle2}>
                        {brand.hosting.projectName}
                      </Typography>
                    </div>
                    <Typography gutterBottom variant="h4" className={text.title2}>
                      { title }
                    </Typography>
                    <Typography variant="h6" className={text.paragraph}>
                      { subtitle }
                    </Typography>
                  </div>
                </Hidden>
              </Grid>
              <Grid item md={7} xs={12}>
                <div className={classes.formWrap}>
                  <div className={classes.frmDeco}>
                    <svg className={classes.cloud}>
                      <use xlinkHref="/images/hosting/cloud_bottom_frm.svg#main" />
                    </svg>
                  </div>
                  {children}
                </div>
              </Grid>
            </Grid>
          </div>
        </Paper>
      </Container>
    </div>
  );
}

AuthFrame.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

AuthFrame.defaultProps = {
  subtitle: '',
};

export default AuthFrame;
