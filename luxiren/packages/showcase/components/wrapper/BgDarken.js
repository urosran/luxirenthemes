import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.background.default,
    color: theme.palette.text.primary,
  }
}));

function BgDarken(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.mainWrap}>
      { children }
    </div>
  );
}

BgDarken.propTypes = {
  children: PropTypes.node.isRequired
};

export default BgDarken;
