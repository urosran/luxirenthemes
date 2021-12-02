import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    color: theme.palette.text.primary,
  }
}));

function BgDefault(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <div className={classes.mainWrap}>
      { children }
    </div>
  );
}

BgDefault.propTypes = {
  children: PropTypes.node.isRequired
};

export default BgDefault;
