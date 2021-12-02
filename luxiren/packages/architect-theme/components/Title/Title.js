import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import { useText } from '~/theme/common';
import useStyles from './title-style';

export default function Title(props) {
  const classes = useStyles();
  const text = useText();
  const { head, desc, dark } = props;
  return (
    <div className={clsx(classes.title, dark && classes.dark)}>
      <Typography variant="h4" className={text.title2}>
        {head}
      </Typography>
      <Typography className={clsx(classes.desc, text.subtitle2)}>
        {desc}
      </Typography>
    </div>
  );
}

Title.propTypes = {
  head: PropTypes.string.isRequired,
  desc: PropTypes.string,
  dark: PropTypes.bool,
};

Title.defaultProps = {
  dark: false,
  desc: '',
};
