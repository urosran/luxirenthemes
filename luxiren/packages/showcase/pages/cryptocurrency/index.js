import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// Theme Components
import Banner from '../../components/crypto/Banner';
import Promotion from '../../components/crypto/Promotion';
import Feature from '../../components/crypto/Feature';
import Benefit from '../../components/crypto/Benefit';
import Testimonials from '../../components/crypto/Testimonials';
import Faq from '../../components/crypto/Faq';
// Theme Wrapper
import Crypto from '../../components/wrapper/Crypto';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(6),
    }
  },
  spaceTop: {
    marginTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(6),
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2),
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2),
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing() {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.only('md'));
  return (
    <Crypto pageName="Home Page">
      <main className={classes.containerWrap}>
        <section id="banner">
          <Banner />
        </section>
        <section id="promotions">
          <Promotion />
        </section>
        <section id="feature" className={isTablet ? classes.spaceTopShort : ''}>
          <Feature />
        </section>
        <section id="benefit" className={classes.spaceTopShort}>
          <Benefit />
        </section>
        <section id="testimonials" className={classes.spaceTop}>
          <Testimonials />
        </section>
        <section id="faq" className={classes.spaceTop}>
          <Faq />
        </section>
        <script src="/scripts/particles-net.js" />
        <script src="/scripts/stats.min.js" />
      </main>
    </Crypto>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'crypto-landing'],
});

export default Landing;
