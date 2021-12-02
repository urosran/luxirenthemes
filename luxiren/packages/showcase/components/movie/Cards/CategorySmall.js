import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { useText } from '~/theme/common';
import useStyles from './cards-style';

export default function CategoryFull(props) {
  const classes = useStyles();
  const text = useText();
  const {
    img,
    title,
    background,
    total,
  } = props;

  return (
    <ButtonBase
      className={clsx(classes.category, classes.full)}
      style={{ backgroundColor: '#' + background }}
      classes={{
        root: classes.buttonBase
      }}
    >
      <img src={img} alt={title} />
      <span className={classes.property}>
        <Typography className={clsx(classes.title, text.title2)} variant="h4" component="span">{title}</Typography>
        <Typography className={clsx(classes.total, text.paragraph)} component="span">
          {total}
          &nbsp;Items
        </Typography>
      </span>
    </ButtonBase>
  );
}

CategoryFull.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
