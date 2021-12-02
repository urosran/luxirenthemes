import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
// Theme Components
import About from '../../components/profile/About';
import Timeline from '../../components/profile/Timeline';
import Counter from '../../components/profile/Counter';
import Services from '../../components/profile/Services';
import Gallery from '../../components/profile/Gallery';
import Testimonials from '../../components/profile/Testimonials';
import Blog from '../../components/profile/Blog';
import Footer from '../../components/profile/Footer';
import Decoration from '../../components/profile/Parallax/Decoration';
import BgDarken from '../../components/wrapper/BgDarken';
// Theme Wrapper
import Profile from '../../components/wrapper/Profile';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  greyBg: {
    paddingTop: theme.spacing(10)
  },
  spaceBottom: {
    marginBottom: sectionMargin(6),
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(theme.spacing() / 2)
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2)
  },
  spaceTop: {
    marginTop: sectionMargin(6),
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(3)
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
  },
  parallaxWrap: {
    position: 'relative'
  },
  bottomDeco: {
    top: -200,
    position: 'absolute',
    width: '100%',
    height: 'calc(100% + 200px)'
  }
}));

function Landing() {
  const classes = useStyles();

  return (
    <Profile pageName="Home Page">
      <Fragment>
        <section id="about">
          <About />
          <Timeline />
          <Counter />
        </section>
        <BgDarken>
          <div className={classes.greyBg}>
            <div className={classes.parallaxWrap}>
              <Decoration />
              <section id="services">
                <Services />
              </section>
              <section id="my-work" className={clsx(classes.spaceTopShort, classes.spaceBottomShort)}>
                <Gallery />
              </section>
            </div>
            <section id="testimonials">
              <Testimonials />
            </section>
            <div className={classes.parallaxWrap}>
              <div className={classes.bottomDeco}>
                <Decoration />
              </div>
              <section id="blog" className={classes.spaceTopShort}>
                <Blog />
              </section>
              <section id="contact" className={classes.spaceTop}>
                <Footer />
              </section>
            </div>
          </div>
        </BgDarken>
      </Fragment>
    </Profile>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'profile-landing'],
});

export default Landing;
