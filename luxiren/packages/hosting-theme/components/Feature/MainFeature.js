import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import Title from '../Title';
import useStyles from './feature-style';

const featureList = [
  {
    img: '/images/hosting/feature1.png',
    title: 'titleitem1',
    desc: 'descitem1'
  },
  {
    img: '/images/hosting/feature2.png',
    title: 'titleitem2',
    desc: 'descitem2'
  },
  {
    img: '/images/hosting/feature3.png',
    title: 'titleitem3',
    desc: 'descitem3'
  }
];

function MainFeature(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  return (
    <div className={classes.mainFeature}>
      <Container fixed>
        <Title caption={t('common:hosting-landing.mainfeature_headtitle')} text={t('common:hosting-landing.mainfeature_title')} align="center" />
        <Grid container spacing={6} className={classes.grid}>
          {featureList.map((item, index) => (
            <Grid item md={4} key={index.toString()}>
              <div className={classes.item}>
                <figure>
                  <img src={item.img} alt={item.title} />
                </figure>
                <Typography variant="h6" className={text.subtitle2}>
                  {t('common:hosting-landing.mainfeature_' + item.title)}
                </Typography>
                <Typography component="p" className={text.paragraph}>
                  {t('common:hosting-landing.mainfeature_' + item.desc)}
                </Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

MainFeature.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['hosting-landing'])(MainFeature);
