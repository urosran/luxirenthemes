import React from 'react';
import PropTypes from 'prop-types';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Head from 'next/head';
import Hidden from '@material-ui/core/Hidden';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withTranslation } from '../i18n';
import Header from '../components/Header';
import VideoBanner from '../components/VideoBanner';
import SquareParallax from '../components/Parallax/Square';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Expertise from '../components/Expertise';
import CaseStudies from '../components/CaseStudies';
import CallAction from '../components/CallAction';
import MapAddress from '../components/MapAddress';
import Footer from '../components/Footer';
import PageNav from '../components/PageNav';
import Notification from '../components/Notification';
import brand from '~/public/text/brand';

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

function Landing(props) {
  const classes = useStyles();
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { onToggleDark, onToggleDir } = props;

  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.agency.name }
          &nbsp; - Home Page
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
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
        <Hidden mdDown>
          <PageNav />
        </Hidden>
        <section className={classes.spaceTopShort}>
          <Footer toggleDir={onToggleDir} />
        </section>
        <Hidden mdDown>
          <Notification />
        </Hidden>
      </div>
    </React.Fragment>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'agency-landing'],
});

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

export default withTranslation(['common', 'agency-landing'])(Landing);
