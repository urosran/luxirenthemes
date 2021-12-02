import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import useStyles from './title-style';

function WithDecoration(props) {
  const classes = useStyles();
  const { text, bg } = props;
  return (
    <div>
      <div className={classes.deco}>
        <Typography className={bg ? classes.bgImg : ''} variant="h3" style={{ backgroundImage: `url(${bg})` }}>
          <span>
            {text}
          </span>
        </Typography>
      </div>
    </div>
  );
}

WithDecoration.propTypes = {
  text: PropTypes.string.isRequired,
  bg: PropTypes.string
};

WithDecoration.defaultProps = {
  bg: ''
};

export default WithDecoration;
