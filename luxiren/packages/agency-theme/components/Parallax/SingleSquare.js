import React from 'react';
import clsx from 'clsx';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function SingleSquare() {
  const classes = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={clsx(classes.testi, classes.innerParallax)}>
          <Parallax
            y={[10, 30]}
            tagOuter="figure"
          >
            <div
              className={
                clsx(
                  classes.parallaxSquare,
                  classes.parallaxSecondarySingle
                )
              }
            />
          </Parallax>
        </div>
      </ParallaxProvider>
    </div>
  );
}
