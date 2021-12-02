import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Paper from '@material-ui/core/Paper';
import link from '~/public/text/link';
import { withTranslation } from '~/i18n';
import useStyles from './cards-style';

function MovieThumb(props) {
  const classes = useStyles();
  const {
    img,
    text,
    t
  } = props;
  return (
    <Paper className={classes.movieThumb}>
      <ButtonBase component="a" href={link.movie.detail} className={classes.btnWrap}>
        <figure>
          <i className="ion-ios-play play" />
          <img src={img} alt={text} />
          <figcaption>
            {t('common:movie-landing.featured_caption')}
          </figcaption>
        </figure>
        <Typography component="span" className={classes.text}>
          {text}
        </Typography>
      </ButtonBase>
    </Paper>
  );
}

MovieThumb.propTypes = {
  img: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation(['movie-landing'])(MovieThumb);
