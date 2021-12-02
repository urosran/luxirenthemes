import React from 'react';
import useStyles from './logo-style';

const logos = [
  '/images/logos/architect.png',
  '/images/logos/cloud.png',
  '/images/logos/coin.png',
  '/images/logos/mobile.png',
  '/images/logos/profile.png',
  '/images/logos/saas.png',
];

function CompanyLogo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.logo}>
        {logos.map((logo, index) => (
          <img src={logo} alt={'logo' + index.toString()} key={index.toString()} />
        ))}
      </div>
    </div>
  );
}

export default CompanyLogo;
