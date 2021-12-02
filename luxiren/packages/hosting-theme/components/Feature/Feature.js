import React from 'react';
import MainFeature from './MainFeature';
import MoreFeature from './MoreFeature';
import ParallaxCloud from '../Parallax/Cloud';
import useStyles from './feature-style';

export default function Feature() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ParallaxCloud />
      <MainFeature />
      <MoreFeature />
    </div>
  );
}
