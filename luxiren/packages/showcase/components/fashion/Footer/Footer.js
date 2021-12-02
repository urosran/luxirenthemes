import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import logo from '~/public/images/fashion-logo.svg';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import { withTranslation } from '~/i18n';
import menu from '../Header/menu';
import useStyles from './footer-style';

function Copyright() {
  return (
    <Typography variant="body2" display="block" align="center">
      &copy;&nbsp;
      {brand.fashion.footerText}
    </Typography>
  );
}

function Footer(props) {
  const classes = useStyles();
  const text = useText();
  const [value, setValue] = useState('');
  const { t } = props;
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <footer className={classes.root}>
      <Container maxWidth="lg">
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.subscribe}>
          <Typography variant="h5" className={text.subtitle}>
            {t('common:fashion-landing.subscribe_title')}
          </Typography>
          <div className={classes.form}>
            <form>
              <TextField
                className={classes.field}
                fullWidth
                placeholder={t('common:fashion-landing.subscribe_email')}
                onChange={(e) => handleChange(e)}
                value={value}
              />
              <Button className={classes.button}>
                {t('common:fashion-landing.subscribe_button')}
              </Button>
            </form>
          </div>
        </div>
        <nav>
          <ul>
            {menu.map((item, index) => (
              <li key={index.toString()}>
                <Link href={'#' + item} variant="subtitle1">
                  {t('common:fashion-landing.header_' + item)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={classes.socmed}>
          <IconButton aria-label="FB" className={classes.icon} size="small">
            <i className="ion-logo-twitter" />
          </IconButton>
          <IconButton aria-label="TW" className={classes.icon} size="small">
            <i className="ion-logo-facebook" />
          </IconButton>
          <IconButton aria-label="IG" className={classes.icon} size="small">
            <i className="ion-logo-instagram" />
          </IconButton>
        </div>
      </Container>
      <div className={classes.copyright}>
        <Copyright />
      </div>
    </footer>
  );
}

Footer.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['fashion-landing'])(Footer);
