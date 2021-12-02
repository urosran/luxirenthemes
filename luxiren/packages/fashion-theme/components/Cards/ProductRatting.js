import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import StarIcon from '@material-ui/icons/Star';
import link from '~/public/text/link';
import { useText } from '~/theme/common';
import useStyles from './cards-style';

export default function ProductRatting(props) {
  const classes = useStyles();
  const textStyle = useText();
  const {
    img,
    ratting,
    text,
    price
  } = props;
  return (
    <div className={classes.productRatting}>
      <ButtonBase component="a" href={link.fashion.detail} className={classes.btnWrap}>
        <figure>
          <img src={img} alt={text} />
          <figcaption>Sale</figcaption>
        </figure>
        <div className={classes.ratting}>
          {[...Array(ratting)].map((e, index) => (
            <StarIcon className={classes.starIcon} key={index.toString()} />
          ))}
        </div>
        <Typography variant="h5">
          {text}
        </Typography>
        <Typography className={textStyle.subtitle2}>
          <strong>
            {price}
          </strong>
        </Typography>
      </ButtonBase>
    </div>
  );
}

ProductRatting.propTypes = {
  img: PropTypes.string.isRequired,
  ratting: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};
