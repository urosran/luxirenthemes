import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import Footer from './Footer';
import useStyles from './footer-style';

function FooterWithDeco(props) {
  const classes = useStyles();
  const text = useText();
  const { t, toggleDir } = props;
  return (
    <div className={classes.footerDeco}>
      <Hidden smDown>
        <div className={classes.decoration}>
          <svg className={classes.leftDeco}>
            <use xlinkHref="/images/movie/deco-bg-left.svg#main" />
          </svg>
          <div className={classes.lineDeco}>
            <svg className={classes.rightDecoBefore}>
              <use xlinkHref="/images/movie/deco-bg-right.svg#main" />
            </svg>
            <svg className={classes.rightDeco}>
              <use xlinkHref="/images/movie/deco-bg-right.svg#main" />
            </svg>
          </div>
        </div>
      </Hidden>
      <div className={classes.action}>
        <Typography variant="h4" className={text.title2}>
          {t('common:movie-landing.footer_waiting')}
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          {t('common:movie-landing.getstarted')}
        </Button>
      </div>
      <Footer toggleDir={toggleDir} />
    </div>
  );
}

FooterWithDeco.propTypes = {
  t: PropTypes.func.isRequired,
  toggleDir: PropTypes.func.isRequired
};

export default withTranslation(['movie-landing'])(FooterWithDeco);
