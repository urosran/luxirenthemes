import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import QuoteIcon from '@material-ui/icons/FormatQuote';
import useStyles from './cards-style';

export default function Testimonial(props) {
  const classes = useStyles();
  const {
    text,
    name,
    title,
  } = props;
  return (
    <div className={classes.testimonial}>
      <div className={classes.icon}>
        <QuoteIcon />
      </div>
      <Typography className={classes.text} display="block">
        {text}
      </Typography>
      <Typography variant="h6">
        {name}
      </Typography>
      <Typography variant="caption" className={classes.caption}>
        {title}
      </Typography>
    </div>
  );
}

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
