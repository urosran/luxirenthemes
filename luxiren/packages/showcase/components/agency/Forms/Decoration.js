import React from 'react';
import useStyles from './form-style';

export default function Decoration() {
  const classes = useStyles();
  return (
    <div className={classes.decoration}>
      <div className={classes.decoTop}>
        <div className={classes.primary} />
        <div className={classes.secondary} />
      </div>
      <div className={classes.decoBottom}>
        <div className={classes.primary} />
        <div className={classes.secondary} />
      </div>
    </div>
  );
}
