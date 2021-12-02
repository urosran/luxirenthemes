import React from 'react';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// Theme Components
import VideoBanner from '../../components/medical/VideoBanner';
import About from '../../components/medical/About';
import Facilities from '../../components/medical/Facilities';
import Testimonials from '../../components/medical/Testimonials';
import Expertise from '../../components/medical/Expertise';
import AskDoctors from '../../components/medical/AskDoctors';
import CallAction from '../../components/medical/CallAction';
import Clinics from '../../components/medical/Clinics';
import OvalTop from '../../components/medical/Parallax/OvalTop';
// Theme Wrapper
import Medical from '../../components/wrapper/Medical';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
    color: theme.palette.text.primary,
  },
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
    <Medical pageName="Home Page">
      <main className={classes.containerWrap}>
        <section id="home">
          <VideoBanner />
        </section>
        <OvalTop />
        <section className={isTablet ? classes.spaceTopShort : classes.spaceTop} id="about">
          <About />
        </section>
        <section className={classes.spaceTop} id="facility">
          <Facilities />
        </section>
        <section className={isTablet ? classes.spaceTopShort : classes.spaceTop} id="our-expertise">
          <Expertise />
        </section>
        <section className={isMobile ? classes.spaceTopShort : classes.spaceTop} id="ask-doctors">
          <AskDoctors />
        </section>
        <section className={classes.spaceTopShort} id="testimonials">
          <Testimonials />
        </section>
        <section className={classes.spaceTopShort} id="call-to-action">
          <CallAction />
        </section>
        <section className={classes.spaceTopShort} id="clinics">
          <Clinics />
        </section>
      </main>
    </Medical>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'medical-landing'],
});

export default Landing;
