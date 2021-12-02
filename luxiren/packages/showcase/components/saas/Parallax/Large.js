import React from 'react';
import clsx from 'clsx';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxLarge() {
  const classes = useStyles();
  return (
    <div className={clsx(classes.parallaxWrap, classes.dotsWrap)}>
      <ParallaxProvider>
        <div className={clsx(classes.innerParallax, classes.large)}>
          <Parallax
            y={[10, 50]}
            tagOuter="figure"
          >
            <svg className={classes.plus}>
              <use xlinkHref="/images/decoration/plus.svg#main" />
            </svg>
          </Parallax>
          <Parallax
            y={[20, 50]}
            tagOuter="figure"
          >
            <svg className={classes.circle}>
              <use xlinkHref="/images/decoration/circle.svg#main" />
            </svg>
          </Parallax>
          <Parallax
            y={[10, 20]}
            tagOuter="figure"
          >
            <svg className={classes.zigzag}>
              <use xlinkHref="/images/decoration/zigzag.svg#main" />
            </svg>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
