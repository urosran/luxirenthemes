import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import { useText } from '~/theme/common';
import useStyles from './cards-style';

export default function General(props) {
  const classes = useStyles();
  const text = useText();
  const {
    img,
    title,
    desc,
    rating,
    price
  } = props;
  return (
    <Paper className={classes.generalCard}>
      <figure>
        <img src={img} alt={title} />
      </figure>
      <div className={classes.desc}>
        <Typography variant="h6" gutterBottom>{title}</Typography>
        <Typography className={text.paragraph}>
          {desc}
        </Typography>
        <div className={classes.property}>
          <div className={classes.rating}>
            {[...Array(rating)].map((e, index) => (
              <StarIcon className={classes.starIcon} key={index.toString()} />
            ))}
          </div>
          <strong>
            $
            {price}
          </strong>
        </div>
        <Button
          className={classes.button}
          color="primary"
          variant="outlined"
        >
          Explore
        </Button>
      </div>
    </Paper>
  );
}

General.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};
