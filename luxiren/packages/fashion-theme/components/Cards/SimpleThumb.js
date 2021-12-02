import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import link from '~/public/text/link';
import useStyles from './cards-style';

export default function ProductRatting(props) {
  const classes = useStyles();
  const {
    img,
    title,
    price
  } = props;
  return (
    <ButtonBase component="a" href={link.fashion.detail} className={classes.simpleThumb}>
      <div>
        <figure>
          <img src={img} alt={title} />
        </figure>
        <Typography>{title}</Typography>
        <Typography>
          <strong>{price}</strong>
        </Typography>
      </div>
    </ButtonBase>
  );
}

ProductRatting.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
