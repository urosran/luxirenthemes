import React from 'react';
import useStyles from './form-style';

export default function Decoration() {
  const classes = useStyles();
  return (
    <div className={classes.decoration}>
      <div className={classes.oval} />
      <div className={classes.decoTop}>
        <div className={classes.capsul} />
        <div className={classes.circle} />
      </div>
      <div className={classes.decoBottom}>
        <div className={classes.capsul} />
        <div className={classes.capsul} />
      </div>
    </div>
  );
}
