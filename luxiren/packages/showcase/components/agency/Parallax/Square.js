import React from 'react';
import clsx from 'clsx';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function Square() {
  const classes = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={clsx(classes.banner, classes.innerParallax)}>
          <Parallax
            y={[-40, -40]}
            tagOuter="figure"
          >
            <div
              className={
                clsx(
                  classes.parallaxSquare,
                  classes.parallaxPrimary
                )
              }
            />
          </Parallax>
        </div>
      </ParallaxProvider>
      <ParallaxProvider>
        <div className={clsx(classes.about, classes.innerParallax)}>
          <Parallax
            y={[-50, 10]}
            tagOuter="figure"
          >
            <div
              className={
                clsx(
                  classes.parallaxSquare,
                  classes.parallaxSecondary
                )
              }
            />
          </Parallax>
          <Parallax
            y={[-40, 10]}
            tagOuter="figure"
          >
            <div
              className={
                clsx(
                  classes.parallaxSquare,
                  classes.parallaxPrimary
                )
              }
            />
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
