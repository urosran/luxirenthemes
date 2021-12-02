import React from 'react';
import clsx from 'clsx';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxDots() {
  const classes = useStyles();
  return (
    <div className={clsx(classes.parallaxWrap, classes.dotsWrap)}>
      <ParallaxProvider>
        <div className={classes.innerParallax}>
          <Parallax
            y={[-50, 50]}
            tagOuter="figure"
          >
            <svg
              fill="#cccccc"
              width={902}
              height={1042}
              className={classes.parallaxDot}
            >
              <use xlinkHref="/images/decoration/dot-deco.svg#dot" />
            </svg>
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
