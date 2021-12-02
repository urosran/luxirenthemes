import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ReactWOW from 'react-wow';
import { withTranslation } from '~/i18n';
import Title from '../Title';
import PricingCard from '../Cards/Pricing';
import useStyles from './pricing-plan-style';
import feature from './listFeature';

function PricingPlan(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Translation Function
  const { t } = props;

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Title caption={t('common:hosting-landing.pricing_headtitle')} text={t('common:hosting-landing.pricing_title')} align="center" />
        <div className={classes.pricingWrap}>
          <ReactWOW animation="fadeInUp" offset={-100} duration="0.4s">
            <div>
              <PricingCard
                title="Personal"
                price={3}
                img="/images/hosting/home.png"
                featureList={feature.personal}
                desc="Nam sollicitudin dignissim nunc"
              />
            </div>
          </ReactWOW>
          <ReactWOW animation="fadeInUp" offset={-100} duration="0.4s">
            <div>
              <PricingCard
                title="Startup"
                price={8}
                highlighted
                img="/images/hosting/office.png"
                featureList={feature.personal}
                desc="Nam sollicitudin dignissim nunc"
              />
            </div>
          </ReactWOW>
          <ReactWOW animation="fadeInUp" offset={-100} duration="0.5s">
            <div>
              <PricingCard
                title="Company"
                price={18}
                img="/images/hosting/company.png"
                featureList={feature.personal}
                desc="Nam sollicitudin dignissim nunc"
              />
            </div>
          </ReactWOW>
          <ReactWOW animation="fadeInUp" offset={-100} duration="0.6s">
            <div>
              <PricingCard
                title="Big Shot"
                price={33}
                img="/images/hosting/world.png"
                featureList={feature.personal}
                desc="Nam sollicitudin dignissim nunc"
              />
            </div>
          </ReactWOW>
        </div>
      </Container>
    </div>
  );
}

PricingPlan.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['hosting-landing'])(PricingPlan);
