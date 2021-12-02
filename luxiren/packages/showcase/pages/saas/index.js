import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// Theme Components
import Banner from '../../components/saas/Banner';
import CompanyLogo from '../../components/saas/CompanyLogo';
import Counter from '../../components/saas/Counter';
import Feature from '../../components/saas/Feature';
import Testimonials from '../../components/saas/Testimonials';
import PricingPlan from '../../components/saas/PricingPlan';
import Faq from '../../components/saas/Faq';
import NewsEvent from '../../components/saas/NewsEvent';
// Theme Wrapper
import Saas from '../../components/wrapper/Saas';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(6),
    }
  },
  spaceBottomTesti: {
    [theme.breakpoints.up('md')]: {
      marginBottom: sectionMargin(theme.spacing()),
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2)
  },
  spaceTop: {
    marginTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(6),
    }
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2)
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
    <Saas pageName="Home Page">
      <div className={classes.mainWrap}>
        <main className={classes.containerWrap}>
          <section id="home">
            <Banner />
          </section>
          <div>
            <CompanyLogo />
          </div>
          <section className={classes.spaceTopShort}>
            <Counter />
          </section>
          <div id="feature" className={classes.spaceTop}>
            <Feature />
          </div>
          <section id="testimonials" className={classes.spaceBottomTesti}>
            <Testimonials />
          </section>
          <section id="pricing" className={classes.spaceTop}>
            <PricingPlan />
          </section>
          <section id="faq" className={classes.spaceTopShort}>
            <Faq />
          </section>
          <div className={clsx(classes.spaceTopShort, classes.spaceBottomShort)}>
            <NewsEvent />
          </div>
        </main>
      </div>
    </Saas>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'saas-landing'],
});

export default Landing;
