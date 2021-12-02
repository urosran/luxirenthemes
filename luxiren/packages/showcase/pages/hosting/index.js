import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Theme Components
import Banner from '../../components/hosting/Banner';
import Promotion from '../../components/hosting/Promotion';
import Feature from '../../components/hosting/Feature';
import Benefit from '../../components/hosting/Benefit';
import PricingPlan from '../../components/hosting/PricingPlan';
import ParticlesCanvas from '../../components/hosting/ParticlesCanvas';
import Testimonials from '../../components/hosting/Testimonials';
// Theme Wrapper
import Hosting from '../../components/wrapper/Hosting';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
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

function Landing() {
  const classes = useStyles();

  return (
    <Hosting pageName="Home Page">
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
        <script src="/scripts/vanta/three.r92.min.js" />
        <script src="/scripts/vanta/vanta.net.min.js" />
      </main>
    </Hosting>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'hosting-landing'],
});

export default Landing;
