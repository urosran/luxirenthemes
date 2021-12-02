import React from 'react';
import clsx from 'clsx';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxLarge() {
  const classes = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={clsx(classes.innerParallax, classes.large)}>
          <Parallax
            y={[50, 50]}
            tagOuter="figure"
          >
            <svg className={classes.triangle}>
              <use xlinkHref="/images/mobile/triangle.svg#main" />
            </svg>
          </Parallax>
          <Parallax
            y={[60, 60]}
            tagOuter="figure"
          >
            <svg className={classes.circle}>
              <use xlinkHref="/images/mobile/circle.svg#main" />
            </svg>
          </Parallax>
          <Parallax
            y={[20, 20]}
            tagOuter="figure"
          >
            <div className={classes.squareDot}>
              <svg className={classes.square}>
                <use xlinkHref="/images/mobile/square.svg#main" />
              </svg>
              <svg className={classes.dot}>
                <use xlinkHref="/images/mobile/dot.svg#main" />
              </svg>
            </div>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
