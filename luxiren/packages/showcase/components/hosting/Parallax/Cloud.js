import React from 'react';
import clsx from 'clsx';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import useStyles from './parallax-style';

export default function ParallaxCloud() {
  const classes = useStyles();
  return (
    <div className={clsx(classes.parallaxWrap, classes.dotsWrap)}>
      <ParallaxProvider>
        <div className={clsx(classes.innerParallax, classes.large)}>
          <div className={classes.cloudWrap}>
            <Parallax
              y={[10, 70]}
              tagOuter="figure"
              className={clsx(classes.left, classes.big)}
            >
              <svg className={classes.cloud}>
                <use xlinkHref="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </Parallax>
            <Parallax
              y={[20, 70]}
              tagOuter="figure"
              className={clsx(classes.left, classes.small)}
            >
              <svg className={classes.cloud}>
                <use xlinkHref="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </Parallax>
          </div>
          <div className={classes.cloudWrap}>
            <Parallax
              y={[20, 90]}
              tagOuter="figure"
              className={clsx(classes.right, classes.big)}
            >
              <svg className={classes.cloud}>
                <use xlinkHref="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </Parallax>
            <Parallax
              y={[20, 60]}
              tagOuter="figure"
              className={clsx(classes.right, classes.small)}
            >
              <svg className={classes.cloud}>
                <use xlinkHref="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </Parallax>
          </div>
          <div className={classes.cloudWrap}>
            <Parallax
              y={[10, 80]}
              tagOuter="figure"
              className={clsx(classes.left, classes.big)}
            >
              <svg className={classes.cloud}>
                <use xlinkHref="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </Parallax>
            <Parallax
              y={[-10, 80]}
              tagOuter="figure"
              className={clsx(classes.left, classes.small)}
            >
              <svg className={classes.cloud}>
                <use xlinkHref="/images/hosting/cloud_parallax.svg#main" />
              </svg>
            </Parallax>
          </div>
        </div>
      </ParallaxProvider>
    </div>
  );
}
