import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import Notification from '../components/Notification';
import Header from '../components/Header';
import VideoBanner from '../components/VideoBanner';
import Promotions from '../components/Promotions';
import Featured from '../components/Featured';
import Trending from '../components/Trending';
import Categories from '../components/Categories';
import AllCategories from '../components/AllCategories';
import PricingPlan from '../components/PricingPlan';
import Faq from '../components/Faq';
import NewsEvent from '../components/NewsEvent';
import FooterWithDeco from '../components/Footer/FooterWithDeco';
import PageNav from '../components/PageNav';
import brand from '../public/text/brand';

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

function Landing(props) {
  const classes = useStyles();
  const { onToggleDark, onToggleDir } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.movie.name }
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
        <section id="footer" className={classes.spaceTop}>
          <FooterWithDeco toggleDir={onToggleDir} />
        </section>
        <Hidden mdDown>
          <PageNav />
        </Hidden>
        <Notification />
      </div>
    </React.Fragment>
  );
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'movie-landing'],
});

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};


export default Landing;
