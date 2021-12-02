import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer';
import Counter from '../Counter';
import Subscribe from '../SubscribeForm';
import useStyles from './footer-style';

function FooterWithDeco(props) {
  const classes = useStyles();
  const { toggleDir } = props;
  return (
    <div className={classes.footerCounter}>
      <Counter />
      <Subscribe />
      <Footer toggleDir={toggleDir} />
    </div>
  );
}

FooterWithDeco.propTypes = {
  toggleDir: PropTypes.func.isRequired
};

export default FooterWithDeco;
