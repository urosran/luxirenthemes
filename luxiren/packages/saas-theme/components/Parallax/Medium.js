import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxMedium() {
  const classes = useStyles();
  return (
    <div className={classes.parallaxWrap}>
      <ParallaxProvider>
        <div className={classes.innerParallax}>
          <Parallax
            y={[-25, 50]}
            tagOuter="figure"
          >
            <svg className={classes.plus}>
              <use xlinkHref="/images/decoration/plus.svg#main" />
            </svg>
          </Parallax>
          <Parallax
            y={[-20, 20]}
            tagOuter="figure"
          >
            <svg className={classes.circle}>
              <use xlinkHref="/images/decoration/circle.svg#main" />
            </svg>
          </Parallax>
          <Parallax
            y={[-40, -10]}
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
