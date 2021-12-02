import React from 'react';
import PropTypes from 'prop-types';
import Hidden from '@material-ui/core/Hidden';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useText } from '~/theme/common';
import useStyles from './cards-style';

export default function CategoryHalf(props) {
  const classes = useStyles();
  const text = useText();
  const {
    img,
    title,
    background,
    total,
    type
  } = props;

  return (
    <div
      className={clsx(classes.category, type === 'top-over' ? classes.halfChar : classes.fullChar)}
      style={{ backgroundColor: '#' + background }}
    >
      <img src={img} alt={title} className={classes.shadow} />
      <img src={img} alt={title} />
      <span className={classes.property}>
        <Typography component="span" className={clsx(classes.title, text.title2)}>
          {title}
        </Typography>
        <Typography component="span" className={clsx(classes.total, text.paragraph)}>
          {total}
          &nbsp;Items
        </Typography>
        <Hidden xsDown>
          <Button
            fullWidth
            size="large"
            variant="outlined"
            className={classes.button}
          >
            Explore
          </Button>
        </Hidden>
      </span>
    </div>
  );
}

CategoryHalf.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
