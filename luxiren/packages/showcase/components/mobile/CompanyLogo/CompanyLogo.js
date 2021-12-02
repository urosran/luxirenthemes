import React from 'react';
import PropTypes from 'prop-types';
import ReactWOW from 'react-wow';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { withTranslation } from '~/i18n';
import useStyles from './logo-style';

const logos = [
  '/images/logos/architect.png',
  '/images/logos/cloud.png',
  '/images/logos/coin.png',
  '/images/logos/mobile.png',
  '/images/logos/profile.png',
  '/images/logos/saas.png',
];

function CompanyLogo(props) {
  const classes = useStyles();
  const { t } = props;

  return (
    <Container fixed>
      <Typography
        align="center"
        variant="h4"
        className={classes.title}
      >
        {t('common:mobile-landing.company_title')}
      </Typography>
      <ReactWOW animation="fadeInUpShort" offset={-200} delay="0.3s" duration="0.5s">
        <div className={classes.root}>
          {logos.map((logo, index) => (
            <img src={logo} alt={'logo' + index.toString()} key={index.toString()} />
          ))}
        </div>
      </ReactWOW>
    </Container>
  );
}

CompanyLogo.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['mobile-landing'])(CompanyLogo);
