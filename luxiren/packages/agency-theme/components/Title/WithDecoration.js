import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useStyles from './title-style';

function WithDecoration(props) {
  const classes = useStyles();
  const { text } = props;
  return (
    <div>
      <div className={classes.deco}>
        <Typography variant="h3">
          {text}
        </Typography>
      </div>
    </div>
  );
}

WithDecoration.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WithDecoration;
