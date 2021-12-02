import React from 'react';
import clsx from 'clsx';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function OvalTop() {
  const classes = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={classes.innerParallax}>
          <Parallax
            y={[0, 30]}
            tagOuter="figure"
          >
            <div
              className={
                clsx(
                  classes.parallaxOval,
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
