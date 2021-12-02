import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useText } from '~/theme/common';
import { withTranslation } from '../i18n';
import imgAPI from '../public/images/imgAPI';
import Header from '../components/Header';
import Footer from '../components/Footer';
import brand from '../public/text/brand';

const useStyles = makeStyles(theme => ({
  containerWrap: {
    padding: theme.spacing(15, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(10, 0),
    }
  },
  figure: {
    textAlign: 'center',
    '& img': {
      maxWidth: '100%'
    }
  },
  price: {
    marginTop: theme.spacing(3),
  },
  desc: {
    marginTop: theme.spacing(3)
  },
  size: {
    textTransform: 'uppercase',
    margin: theme.spacing(3, 0),
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginTop: theme.spacing(6)
    },
    '& ul': {
      display: 'inline-block',
      padding: 0,
      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(2),
        marginLeft: theme.spacing(5),
      },
      '& li': {
        width: 40,
        height: 40,
        lineHeight: '40px',
        border: `1px solid ${theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark}`,
        textAlign: 'center',
        marginRight: theme.spacing(),
        display: 'inline-block',
        verticalAlign: 'middle'
      }
    }
  }
}));

function DetailProduct(props) {
  const classes = useStyles();
  const text = useText();
  const { onToggleDark, onToggleDir, t } = props;
  return (
    <React.Fragment>
      <Head>
        <title>
          { brand.fashion.name }
          &nbsp; - Detail Product
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
          invert
        />
        <main className={classes.containerWrap}>
          <Container fixed>
            <Grid container spacing={6} justify="center">
              <Grid item sm={5} md={5} xs={12}>
                <figure className={classes.figure}>
                  <img src={imgAPI.fashion[35]} alt="product" />
                </figure>
              </Grid>
              <Grid item sm={7} md={5} xs={12}>
                <Typography variant="h4" className={text.title2}>
                  Floral Plimsoll
                </Typography>
                <Typography component="p" className={text.caption} gutterBottom>
                  {t('fashion-landing:detail_id')}
                  :&nbsp;
                  14210160762
                </Typography>
                <Typography variant="h4" color="primary" className={clsx(classes.price, text.title2)}>
                  $ 780.00
                </Typography>
                <Typography component="p" className={clsx(classes.desc, text.paragraph)}>
                  Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a pellentesque dui, non felis. Maecenas malesuada elit lectus felis, malesuada ultricies.
                </Typography>
                <div className={classes.size}>
                  {t('fashion-landing:detail_size')}
                  <ul>
                    <li>XS</li>
                    <li>S</li>
                    <li>M</li>
                    <li>L</li>
                    <li>XL</li>
                  </ul>
                </div>
                <Button variant="contained" size="large" fullWidth color="primary" href="#" className={classes.button}>
                  {t('fashion-landing:detail_btn')}
                </Button>
              </Grid>
            </Grid>
          </Container>
        </main>
        <section className={classes.spaceTop}>
          <Footer invert />
        </section>
      </div>
    </React.Fragment>
  );
}

DetailProduct.getInitialProps = async () => ({
  namespacesRequired: ['fashion-landing'],
});

DetailProduct.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation('fashion-landing')(DetailProduct);