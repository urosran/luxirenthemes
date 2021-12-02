import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import brand from '~/public/text/brand';
import routerLink from '~/public/text/link';
import logo from '~/public/images/education-logo.svg';
import { useText } from '~/theme/common';
import useStyles from './form-style';

function AuthFrame(props) {
  const classes = useStyles();
  const text = useText();
  const { children, title, subtitle } = props;
  return (
    <div className={classes.pageWrap}>
      <Hidden mdUp>
        <div className={clsx(classes.logo, classes.logoHeader)}>
          <a href={routerLink.education.home}>
            <img src={logo} alt="logo" />
            <Typography component="span" className={text.subtitle2}>
              {brand.education.projectName}
            </Typography>
          </a>
        </div>
      </Hidden>
      <Container maxWidth="lg" className={classes.innerWrap}>
        <Paper className={classes.formBox}>
          <IconButton href={routerLink.education.home} className={classes.backtohome}>
            <i className="ion-ios-home-outline" />
            <i className="ion-ios-arrow-round-back" />
          </IconButton>
          <div className={classes.authFrame}>
            <Grid container spacing={0}>
              <Grid item md={5} xs={12}>
                <Hidden smDown>
                  <div className={classes.greeting}>
                    <div className={classes.deco}>
                      <div className={classes.primaryLight} />
                      <div className={classes.secondaryMain} />
                      <div className={classes.secondaryLight} />
                    </div>
                    <div className={classes.logo}>
                      <img src={logo} alt="logo" />
                      <Typography className={text.subtitle2}>
                        {brand.education.projectName}
                      </Typography>
                    </div>
                    <Typography gutterBottom variant="h4">
                      { title }
                    </Typography>
                    <Typography variant="h6" className={text.subtitle2}>
                      { subtitle }
                    </Typography>
                  </div>
                </Hidden>
              </Grid>
              <Grid item md={7} xs={12}>
                <div className={classes.formWrap}>
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
