import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withTranslation } from '~/i18n';
import useStyles from './cards-style';

function Pricing(props) {
  const classes = useStyles();
  const {
    title,
    price,
    img,
    featureList,
    desc,
    highlighted,
    t,
  } = props;
  return (
    <Paper className={clsx(classes.pricing, highlighted && classes.highlighted)}>
      <div className={classes.title}>
        <Typography variant="h6">
          {title}
        </Typography>
        <img src={img} alt="img" />
        <Typography variant="h5">
          {price > 0 && '$'}
          {price > 0 ? (
            <Fragment>
              { price }
              <span>
                /mo
              </span>
            </Fragment>
          ) : 'Free'}
        </Typography>
        <Typography display="block" className={classes.desc}>
          {desc}
        </Typography>
      </div>
      <ul className={classes.feature}>
        {featureList.map((item, index) => (
          <li key={index.toString()}>
            {item.type === 'plus' ? (
              <span className={clsx(classes.icon, classes.success)}>
                <i className="ion-ios-checkmark-circle-outline" />
              </span>
            ) : (
              <span className={clsx(classes.icon, classes.error)}>
                <i className="ion-ios-close-circle-outline" />
              </span>
            )}
            {item.text}
          </li>
        ))}
      </ul>
      <div className={classes.btnArea}>
        <Button
          fullWidth
          variant="contained"
          color={highlighted ? 'secondary' : 'primary'}
          className={classes.button}
          size="large"
        >
          {t('common:hosting-landing.getstarted')}
        </Button>
      </div>
    </Paper>
  );
}

Pricing.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  price: PropTypes.number.isRequired,
  t: PropTypes.func.isRequired,
  featureList: PropTypes.array.isRequired,
  desc: PropTypes.string.isRequired,
  highlighted: PropTypes.bool,
};

Pricing.defaultProps = {
  highlighted: false,
  img: '/images/hosting/home.png'
};

export default withTranslation(['hosting-landing'])(Pricing);
