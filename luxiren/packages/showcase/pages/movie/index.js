import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// Theme Components
import VideoBanner from '../../components/movie/VideoBanner';
import Promotions from '../../components/movie/Promotions';
import Featured from '../../components/movie/Featured';
import Trending from '../../components/movie/Trending';
import Categories from '../../components/movie/Categories';
import AllCategories from '../../components/movie/AllCategories';
import PricingPlan from '../../components/movie/PricingPlan';
import Faq from '../../components/movie/Faq';
import NewsEvent from '../../components/movie/NewsEvent';
// Theme Wrapper
import Movie from '../../components/wrapper/Movie';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper,
  },
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
    <Movie pageName="Home Page">
      <main className={classes.containerWrap}>
        <section id="home">
          <VideoBanner />
          <div id="promotions">
            <Promotions />
          </div>
        </section>
        <section id="featured" className={classes.spaceTop}>
          <Featured />
        </section>
        <section id="trending" className={classes.spaceTop}>
          <Trending />
        </section>
        <section id="categories" className={classes.spaceTop}>
          <Categories />
        </section>
        <section id="all" className={classes.spaceTopShort}>
          <AllCategories />
        </section>
        <section id="pricing" className={classes.spaceTop}>
          <PricingPlan />
        </section>
        <section id="faq" className={classes.spaceTop}>
          <Faq />
        </section>
        <section id="news" className={classes.spaceTopShort}>
          <NewsEvent />
        </section>
      </main>
    </Movie>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'movie-landing'],
});


export default Landing;
