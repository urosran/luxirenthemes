import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// Theme Components
import VideoBanner from '../../components/agency/VideoBanner';
import SquareParallax from '../../components/agency/Parallax/Square';
import About from '../../components/agency/About';
import Services from '../../components/agency/Services';
import Testimonials from '../../components/agency/Testimonials';
import Expertise from '../../components/agency/Expertise';
import CaseStudies from '../../components/agency/CaseStudies';
import CallAction from '../../components/agency/CallAction';
import MapAddress from '../../components/agency/MapAddress';
// Theme Wrapper
import Agency from '../../components/wrapper/Agency';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(6)
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: sectionMargin(theme.spacing() / 2)
    }
  },
  spaceTop: {
    marginTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(6)
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: sectionMargin(theme.spacing() / 2)
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2),
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2),
  },
  containerWrap: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(10),
    },
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing() {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Agency pageName="Home Page">
      <main className={classes.containerWrap}>
        <SquareParallax />
        <section>
          <VideoBanner />
        </section>
        <section className={isTablet ? classes.spaceTopShort : classes.spaceTop} id="about">
          <About />
        </section>
        <section className={classes.spaceTop} id="services">
          <Services />
        </section>
        <section className={isTablet ? classes.spaceTopShort : classes.spaceTop} id="our-expertise">
          <Expertise />
        </section>
        <section className={isMobile ? classes.spaceTopShort : classes.spaceTop} id="testimonials">
          <Testimonials />
        </section>
        <section id="case-studies">
          <CaseStudies />
        </section>
        <section className={classes.spaceTopShort} id="call-to-action">
          <CallAction />
        </section>
        <section className={classes.spaceTopShort} id="address">
          <MapAddress />
        </section>
      </main>
    </Agency>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'agency-landing'],
});

export default Landing;
