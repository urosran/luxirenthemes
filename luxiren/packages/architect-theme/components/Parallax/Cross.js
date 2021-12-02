import React from 'react';
import clsx from 'clsx';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxCross() {
  const classes = useStyles();
  return (
    <div className={clsx(classes.parallaxWrap, classes.crossWrap)}>
      <ParallaxProvider>
        <div className={classes.innerParallax}>
          <Parallax
            y={[0, 0]}
            tagOuter="figure"
          >
            <div className={classes.parallaxCross} />
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
