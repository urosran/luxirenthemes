import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import Title from '../Title';
import MovieThumbCard from '../Cards/MovieThumb';
import useStyles from './featured-style';

function Featured(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { t } = props;
  const movieList = [
    {
      title: 'Cras convallis lacus',
      thumb: imgAPI.movie[2]
    },
    {
      title: 'Cras convallis lacus',
      thumb: imgAPI.movie[3]
    },
    {
      title: 'Cras convallis lacus',
      thumb: imgAPI.movie[4]
    }
  ];
  return (
    <div className={classes.root}>
      <div className={classes.decoration}>
        <svg fill="#cccccc">
          <use xlinkHref="/images/movie/deco-med-bg.svg#main" />
        </svg>
      </div>
      <Container fixed={isDesktop}>
        <Grid container spacing={4}>
          <Grid item md={3} xs={12}>
            <Box pt={isDesktop ? 5 : 0}>
              <Title primary="Featured" secondary="Movies" align={isMobile ? 'center' : 'left'} />
              <Typography align={isMobile ? 'center' : 'left'} className={text.paragrpah}>
                {t('common:movie-landing.new_desc')}
              </Typography>
            </Box>
          </Grid>
          {movieList.map((item, index) => (
            <Grid
              item
              key={index.toString()}
              md={3}
              sm={4}
              xs={12}
            >
              <MovieThumbCard
                img={item.thumb}
                text={item.title}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

Featured.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['movie-landing'])(Featured);
