import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Theme Components
import Banner from '../../components/mobile/Banner';
import Counter from '../../components/mobile/Counter';
import Feature from '../../components/mobile/Feature';
import Showcase from '../../components/mobile/Showcase';
import Testimonials from '../../components/mobile/Testimonials';
import Faq from '../../components/mobile/Faq';
import CompanyLogo from '../../components/mobile/CompanyLogo';
import NewsEvent from '../../components/mobile/NewsEvent';
// Theme Wrapper
import Mobile from '../../components/wrapper/Mobile';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(6),
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(theme.spacing() / 2),
    }
  },
  spaceTop: {
    marginTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(6),
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(theme.spacing() / 2),
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2),
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(2),
    }
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2),
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(2),
    }
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
    <Mobile pageName="Home Page">
      <main className={classes.containerWrap}>
        <section id="home">
          <Banner />
        </section>
        <section id="counter">
          <Counter />
        </section>
        <section id="feature" className={classes.spaceTop}>
          <Feature />
        </section>
        <section id="showcase">
          <Showcase />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="faq" className={classes.spaceTopShort}>
          <Faq />
        </section>
        <section className={classes.spaceTopShort}>
          <CompanyLogo />
        </section>
        <section id="news" className={classes.spaceTopShort}>
          <NewsEvent />
        </section>
        <script src="/scripts/particles-spray.js" />
      </main>
    </Mobile>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'mobile-landing'],
});

export default Landing;
