import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import useStyles from './title-style';

function WithDecoration(props) {
  const classes = useStyles();
  const { text, extended, icon } = props;
  return (
    <div className={clsx(classes.iconDeco, extended && classes.extend)}>
      <div className={classes.capsul} />
      <div className={classes.circle} />
      <Icon className={classes.icon}>{icon}</Icon>
      <Typography variant="h3">
        {text}
      </Typography>
    </div>
  );
}

WithDecoration.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.string,
  extended: PropTypes.bool,
};

WithDecoration.defaultProps = {
  icon: 'apps',
  extended: false
};

export default WithDecoration;
