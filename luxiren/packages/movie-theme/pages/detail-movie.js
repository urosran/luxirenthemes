import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useText } from '~/theme/common';
import Icon from '@material-ui/core/Icon';
import Footer from '../components/Footer/Footer';
import { withTranslation } from '../i18n';
import imgAPI from '../public/images/imgAPI';
import Header from '../components/Header';
import brand from '../public/text/brand';

const useStyles = makeStyles(theme => ({
  bgWrap: {
    overflow: 'hidden',
    position: 'absolute',
    width: '100%',
    height: 720
  },
  containerWrap: {
    padding: theme.spacing(20, 4, 15),
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      paddingLeft: theme.spacing(),
      paddingRight: theme.spacing()
    }
  },
  bgMovie: {
    direction: 'ltr',
    width: '200%',
    height: 720,
    marginLeft: '-50%',
    borderRadius: '0 0 50% 50%',
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    left: 0,
    [theme.breakpoints.down('xs')]: {
      height: 480
    },
    '& img': {
      width: '50%',
      top: '-50%',
      position: 'relative',
      margin: '0 auto',
      opacity: 0.2,
      filter: 'blur(20px)',
      left: theme.direction === 'rtl' ? '-25%' : '25%'
    }
  },
  text: {
    flex: 1,
    textAlign: 'left',
    padding: theme.spacing(2, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2)
    },
    '& h4': {
      fontSize: '2.28rem',
      fontWeight: theme.typography.fontWeightBold,
      marginBottom: theme.spacing(3),
      width: '100%',
      '& span': {
        display: 'block',
        fontWeight: theme.typography.fontWeightMedium,
      }
    }
  },
  property: {
    width: '100%',
    display: 'flex',
    marginBottom: theme.spacing(2)
  },
  star: {
    marginTop: -3,
    marginRight: theme.spacing(2),
    '& span': {
      color: '#FF9500'
    }
  },
  divider: {
    background: 'none',
    border: 'none',
    borderLeft: `1px solid ${theme.palette.text.secondary}`,
    height: 12,
    margin: theme.spacing(0.5, 2),
    display: 'inline-block',
  },
  btnArea: {
    zIndex: 10,
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      flexDirection: 'column',
      '& > *': {
        margin: theme.spacing(0, 0, 2)
      }
    },
    '& > *': {
      marginRight: theme.spacing(4),
      [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing()
      }
    },
    '& i': {
      fontSize: 18,
      marginRight: theme.spacing()
    }
  },
  btnAreaSmall: {
    margin: theme.spacing(2, 0, 0, -1),
    '& > *': {
      marginRight: theme.spacing(1)
    },
    '& i': {
      fontSize: 18,
      marginRight: theme.spacing()
    }
  },
  btnText: {
    color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.main
  },
  desc: {
    overflow: 'hidden',
    padding: theme.spacing(1, 0),
    marginBottom: theme.spacing(5),
    '& h6': {
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  image: {
    textAlign: 'center',
    lineHeight: '360px',
    verticalAlign: 'middle',
    '& figure': {
      width: 250,
      height: 360,
      overflow: 'hidden',
      margin: '0 auto',
      boxShadow: theme.shadows[3],
      borderRadius: theme.rounded.big,
      '& img': {
        width: '100%'
      }
    },
    '& i': {
      position: 'absolute',
      fontSize: 52,
      top: 'calc(50% - 30px)',
      left: 'calc(50% - 30px)',
      border: `5px solid ${theme.palette.common.white}`,
      zIndex: 10,
      borderRadius: '50%',
      width: 60,
      height: 60,
      lineHeight: '44px',
      paddingLeft: theme.direction === 'rtl' ? 0 : 4,
      paddingRight: theme.direction === 'rtl' ? 4 : 0,
      color: theme.palette.common.white,
      background: 'rgba(0, 0, 0, 0.4)'
    },
  },
  about: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(7, 10),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(4)
    },
    '& $btnArea': {
      marginTop: theme.spacing(6)
    }
  },
  person: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(5)
    },
    '& h6': {
      fontSize: 14,
      textTransform: 'uppercase',
      fontWeight: theme.typography.fontWeightBold
    },
    '& p': {
      marginBottom: theme.spacing(4)
    }
  }
}));

function DetailProduct(props) {
  const classes = useStyles();
  const text = useText();

  // Media Query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

  const { onToggleDark, onToggleDir, t } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.movie.name }
          &nbsp; - Detail Movie
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          invert
        />
        <div className={classes.bgWrap}>
          <div className={classes.bgMovie}>
            <img src={imgAPI.movie[15]} alt="poster" />
          </div>
        </div>
        <main className={classes.containerWrap}>
          <Container maxWidth="lg">
            <Grid container spacing={6} justify="center" direction={isDesktop ? 'row-reverse' : 'row'}>
              <Grid item sm={5} md={5} xs={12}>
                <div className={classes.image}>
                  <ButtonBase focusRipple href="#">
                    <i className="ion-ios-play play" />
                    <figure>
                      <img src={imgAPI.movie[15]} alt="movie" />
                    </figure>
                  </ButtonBase>
                </div>
              </Grid>
              <Grid item lg={5} sm={7} xs={12}>
                <div className={classes.text}>
                  <Typography variant="h4">
                    <span className={text.subtitle2}>
                      Vivamus sit amet
                    </span>
                    The Lorem Ipsum Dolor Sit Amet
                  </Typography>
                  <div className={classes.property}>
                    <span className={classes.star}>
                      {[...Array(5)].map((e, indexStar) => (
                        <Icon className={classes.starIcon} key={indexStar.toString()}>star</Icon>
                      ))}
                    </span>
                    5.0
                    <span className={classes.divider} />
                    2h 13m
                  </div>
                  <article className={classes.desc}>
                    <Typography component="h6" className={text.paragraph}>
                      Drama, Action and Adventure
                    </Typography>
                  </article>
                  <section className={classes.btnArea}>
                    <Button className={classes.btnText} color="secondary">
                      {t('common:movie-landing.promo_btn1')}
                    </Button>
                    <Button variant="contained" size="large" color="primary">
                      {t('common:movie-landing.promo_btn2')}
                    </Button>
                  </section>
                </div>
              </Grid>
            </Grid>
          </Container>
          <Grid container justify="center">
            <Grid item lg={10} md={12}>
              <Paper className={classes.about}>
                <Grid container spacing={6}>
                  <Grid item md={7} xs={12}>
                    <Box mb={3}>
                      <Typography variant="h4" className={text.title2}>
                        {t('common:movie-landing.detail_storyline')}
                      </Typography>
                    </Box>
                    <Typography>
                      Vestibulum faucibus eget erat eget pretium. Donec commodo convallis eget suscipit orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                    <div className={classes.btnAreaSmall}>
                      <Button className={classes.btnText} color="secondary">
                        <i className="ion-android-share-alt" />
                        {t('common:movie-landing.detail_share')}
                      </Button>
                      <Button className={classes.btnText} color="secondary">
                        <i className="ion-film-marker" />
                        {t('common:movie-landing.detail_trivia')}
                      </Button>
                      <Button className={classes.btnText} color="secondary">
                        <i className="ion-ios-star" />
                        {t('common:movie-landing.detail_rate')}
                      </Button>
                    </div>
                  </Grid>
                  <Grid item md={5} xs={12}>
                    <div className={classes.person}>
                      <Typography variant="h6" className={classes.titlePerson}>
                        {t('common:movie-landing.detail_director')}
                      </Typography>
                      <Typography className={classes.titlePerson}>
                        John Doe
                      </Typography>
                      <Typography variant="h6" className={classes.titlePerson}>
                        {t('common:movie-landing.detail_writers')}
                      </Typography>
                      <Typography className={classes.titlePerson}>
                        John Doe, Jim Doe, Jane Doe
                      </Typography>
                      <Typography variant="h6" className={classes.titlePerson}>
                        {t('common:movie-landing.detail_stars')}
                      </Typography>
                      <Typography className={classes.titlePerson}>
                        Jena Doe, James Doe, Jack Doe, Jimmy Doe
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </main>
        <section className={classes.spaceTop}>
          <Footer invert />
        </section>
      </div>
    </React.Fragment>
  );
}

DetailProduct.getInitialProps = async () => ({
  namespacesRequired: ['movie-landing'],
});

DetailProduct.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation('movie-landing')(DetailProduct);
