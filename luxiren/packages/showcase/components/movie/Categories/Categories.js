import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import imgAPI from '~/public/images/imgAPI';
import Title from '../Title';
import CategoryBigCard from '../Cards/CategoryBig';
import CategorySmalllCard from '../Cards/CategorySmall';
import useStyles from './categories-style';

export default function Trending() {
  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <Box mt={5}>
              <Title primary="Top" secondary="Categories" align={isMobile ? 'center' : 'left'} />
            </Box>
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <CategorySmalllCard
              img={imgAPI.movie[9]}
              title="Academy Awards"
              total={24}
              background="E79A1C"
            />
          </Grid>
          <Grid item md={3} sm={6} xs={12}>
            <CategorySmalllCard
              img={imgAPI.movie[10]}
              title="Animations"
              total={24}
              background="E91E63"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={6} xs={12}>
            <CategoryBigCard
              img={imgAPI.movie[11]}
              title="Actions"
              total={24}
              background="1A237E"
              type="top-over"
            />
            <br />
            <Grid container spacing={3}>
              <Grid item md={6} sm={6} xs={12}>
                <CategorySmalllCard
                  img={imgAPI.movie[12]}
                  title="Romance Drama"
                  total={24}
                  background="14A8B9"
                />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <CategorySmalllCard
                  img={imgAPI.movie[13]}
                  title="Commedy"
                  total={24}
                  background="2AA845"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={6} xs={12}>
            <CategoryBigCard
              img={imgAPI.movie[14]}
              title="Super Heroes"
              total={24}
              background="ED3626"
              type="bottom-over"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
