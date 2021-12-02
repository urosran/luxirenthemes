import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Theme Components
import VideoBanner from '../../components/fashion/VideoBanner';
import Promotions from '../../components/fashion/Promotions';
import NewProducts from '../../components/fashion/NewProducts';
import Trending from '../../components/fashion/Trending';
import Categories from '../../components/fashion/Categories';
import FeaturedProducts from '../../components/fashion/FeaturedProducts';
import Testimonials from '../../components/fashion/Testimonials';
import Blog from '../../components/fashion/Blog';
import Feature from '../../components/fashion/Feature';
import Footer from '../../components/fashion/Footer';
// Theme Wrapper
import Fashion from '../../components/wrapper/Fashion';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  spaceBottom: {
    marginBottom: sectionMargin(6),
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(3),
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: sectionMargin(2),
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2)
  },
  spaceTop: {
    marginTop: sectionMargin(6),
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(3),
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: sectionMargin(2),
    }
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2),
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(3),
    },
    [theme.breakpoints.down('xs')]: {
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
    <Fashion pageName="Home Page">
      <Fragment>
        <main className={classes.containerWrap}>
          <section id="home">
            <VideoBanner />
            <div id="promotions">
              <Promotions />
            </div>
          </section>
          <section id="all-new" className={classes.spaceTop}>
            <NewProducts />
          </section>
          <section id="trending" className={classes.spaceTop}>
            <Trending />
          </section>
          <section id="categories" className={classes.spaceTop}>
            <Categories />
          </section>
          <section id="featured" className={classes.spaceTopShort}>
            <FeaturedProducts />
          </section>
          <section id="testimonials" className={classes.spaceTop}>
            <Testimonials />
          </section>
          <section id="blog">
            <Blog />
          </section>
          <section id="feature" className={classes.spaceTopShort}>
            <Feature />
          </section>
        </main>
        <section id="footer" className={classes.spaceTop}>
          <Footer />
        </section>
      </Fragment>
    </Fashion>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'fashion-landing'],
});

export default Landing;
