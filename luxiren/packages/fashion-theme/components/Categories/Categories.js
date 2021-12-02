import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import imgAPI from '~/public/images/imgAPI';
import Title from '../Title';
import CategoryHalfCard from '../Cards/CategoryHalf';
import CategoryFullCard from '../Cards/CategoryFull';
import useStyles from './categories-style';

export default function Trending() {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Title primary="Top" secondary="Categories" align={isMobile ? 'center' : 'left'} />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <CategoryFullCard
              img={imgAPI.fashion[11]}
              title="Woman Shoes"
              total={24}
              background="eddacf"
            />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <CategoryFullCard
              img={imgAPI.fashion[12]}
              title="Woman bag"
              total={24}
              background="eddacf"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <CategoryHalfCard
              img={imgAPI.fashion[13]}
              title="Men Casual"
              total={24}
              background="D9D8C9"
              type="top-over"
            />
            <br />
            <Grid container spacing={3}>
              <Grid item md={6} sm={6} xs={12}>
                <CategoryFullCard
                  img={imgAPI.fashion[14]}
                  title="Men Watch"
                  total={24}
                  background="e7ddd9"
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <CategoryFullCard
                  img={imgAPI.fashion[15]}
                  title="Men Shoes"
                  total={24}
                  background="f2dede"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <CategoryHalfCard
              img={imgAPI.fashion[16]}
              title="Woman Sport"
              total={24}
              background="f3f7bc"
              type="bottom-over"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
