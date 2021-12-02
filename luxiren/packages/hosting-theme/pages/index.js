import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Header from '../components/Header';
import Banner from '../components/Banner';
import Promotion from '../components/Promotion';
import Feature from '../components/Feature';
import Benefit from '../components/Benefit';
import PricingPlan from '../components/PricingPlan';
import ParticlesCanvas from '../components/ParticlesCanvas';
import Testimonials from '../components/Testimonials';
import FooterWithCounter from '../components/Footer/FooterWithCounter';
import PageNav from '../components/PageNav';
import Notification from '../components/Notification';
import brand from '../public/text/brand';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    width: '100%',
    position: 'relative',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(6),
    }
  },
  spaceTop: {
    marginTop: sectionMargin(theme.spacing())
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2),
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2),
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const classes = useStyles();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.hosting.name }
          &nbsp; - Home Page
        </title>
      </Head>
      <CssBaseline />
      <section id="home" />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <main className={classes.containerWrap}>
          <section id="search">
            <Banner />
          </section>
          <div id="promotion">
            <Promotion />
          </div>
          <section id="feature">
            <Feature />
          </section>
          <section id="benefit">
            <Benefit />
          </section>
          <ParticlesCanvas />
          <section id="pricing" className={classes.spaceTopShort}>
            <PricingPlan />
          </section>
          <section id="testimonials" className={classes.spaceTopShort}>
            <Testimonials />
          </section>
          <section id="footer" className={classes.spaceTop}>
            <FooterWithCounter toggleDir={onToggleDir} />
          </section>
          <Hidden mdDown>
            <Notification />
          </Hidden>
        </main>
        <Hidden mdDown>
          <PageNav />
        </Hidden>
        <script src="/scripts/vanta/three.r92.min.js" />
        <script src="/scripts/vanta/vanta.net.min.js" />
      </div>
    </React.Fragment>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'hosting-landing'],
});

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};


export default Landing;
