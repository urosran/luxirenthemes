import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withTranslation } from '~/i18n';
import useStyles from './cards-style';

function News(props) {
  const classes = useStyles();
  const {
    text,
    img,
    type,
    t
  } = props;
  return (
    <div className={classes.news}>
      <figure>
        <img src={img} alt="thumb" />
      </figure>
      <div className={classes.desc}>
        <div className={classes.text}>
          <Typography variant="caption" className={classes.type}>
            {t('common:movie-landing.' + type)}
          </Typography>
          <Typography display="block" component="p">{text}</Typography>
        </div>
        <Button size="small" className={classes.btn}>
          {t('common:movie-landing.news_readmore')}
        </Button>
      </div>
    </div>
  );
}

News.propTypes = {
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired
};

export default withTranslation(['movie-landing'])(News);
