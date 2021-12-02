import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  deco: {
    position: 'relative',
    height: 1800,
    left: 0,
    top: 0,
    marginBottom: -1800,
    opacity: theme.palette.type === 'dark' ? 0.1 : 1,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  decoInner: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 1,
    transition: 'opacity 0.3s ease'
  },
  hide: {
    visibility: 'hidden',
    opacity: 0
  }
}));

export default function ParticlesCanvas() {
  const classes = useStyles();
  const elem = useRef(null);

  const [width, setWidth] = useState(1000);
  const [hide, setHide] = useState(true);

  const handleScroll = () => {
    if (!elem.current) {
      return;
    }
    const doc = document.documentElement;
    const elTop = elem.current.offsetTop - 50;
    const elBottom = elTop + elem.current.getBoundingClientRect().height;
    if (doc.scrollTop > elTop && doc.scrollTop < elBottom) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={classes.deco} ref={elem}>
      <div className={clsx(classes.decoInner, hide && classes.hide)}>
        {/* Disable canvas animation to fix performance issue. You can enable it and include script /scripts/particles-data.js in pages/index.js */}
        {/* <canvas id="particle_art_hosting" width={width} height="600" /> */ }
        <img width={width} src="/images/hosting/particle.png" alt="particle" />
      </div>
    </div>
  );
}
