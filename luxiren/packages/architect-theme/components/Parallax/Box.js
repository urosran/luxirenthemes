import React from 'react';
import clsx from 'clsx';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxDots() {
  const classes = useStyles();
  return (
    <div className={clsx(classes.parallaxWrap, classes.parallaxBox)}>
      <ParallaxProvider>
        <div className={classes.innerParallax}>
          <Parallax
            tagOuter="figure"
            y={[-10, -10]}
          >
            <div className={classes.bigBox} />
          </Parallax>
          <Parallax
            tagOuter="figure"
            y={[-10, -10]}
          >
            <div className={classes.smallBox} />
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
