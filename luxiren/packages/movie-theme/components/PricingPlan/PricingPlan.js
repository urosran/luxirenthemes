import React from 'react';
import ReactWOW from 'react-wow';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { useText } from '~/theme/common';
import Title from '../Title';
import PricingCard from '../Cards/Pricing';
import useStyles from './pricing-plan-style';

const feature = {
  basic: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Quisque ut metus'
  ],
  best: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Quisque ut metus',
    'Vivamus sit amet',
    'Cras convallis lacus orci'
  ],
  pro: [
    'Nam sollicitudin dignissim',
    'Cras convallis lacus',
    'Nulla lobortis nunc',
    'Vitae scelerisque',
    'Duis sed augue'
  ],
  enterprise: [
    'Nam sollicitudin dignissim',
    'Pellentesque ac bibendum ',
    'Vestibulum consequat',
    'Donec commodo',
    'Duis tristique metus'
  ],
};

export default function PricingPlan() {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <div className={classes.root}>
      <div className={classes.decoration}>
        <svg fill="#cccccc">
          <use xlinkHref="/images/movie/deco-med-bg.svg#main" />
        </svg>
      </div>
      <Container fixed={isDesktop}>
        <div className={text.alignCenter}>
          <Title align="center" primary="Flexible" secondary="Pricing and Plan" />
        </div>
        <div className={classes.pricingWrap}>
          <ReactWOW animation="fadeInUpShort" offset={-200} delay="0.2s" duration="0.4s">
            <div className={classes.item}>
              <PricingCard
                title="Basic"
                price={0}
                featureList={feature.basic}
                desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
                type="basic"
              />
            </div>
          </ReactWOW>
          <ReactWOW animation="fadeInUpShort" offset={-200} delay="0.4s" duration="0.4s">
            <div className={classes.item}>
              <PricingCard
                title="Best Value"
                price={24}
                featureList={feature.best}
                desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
                type="value"
              />
            </div>
          </ReactWOW>
          <ReactWOW animation="fadeInUpShort" offset={-200} delay="0.6s" duration="0.4s">
            <div className={classes.item}>
              <PricingCard
                title="Pro"
                price={54}
                featureList={feature.pro}
                desc="Interdum et malesuada fames ac ante ipsum primis in faucibus. "
              />
            </div>
          </ReactWOW>
          <ReactWOW animation="fadeInUpShort" offset={-200} delay="0.8s" duration="0.4s">
            <div className={classes.item}>
              <PricingCard
                title="Enterprise"
                price={99}
                featureList={feature.enterprise}
                desc=" Interdum et malesuada fames ac ante ipsum primis in faucibus. "
              />
            </div>
          </ReactWOW>
        </div>
      </Container>
    </div>
  );
}
