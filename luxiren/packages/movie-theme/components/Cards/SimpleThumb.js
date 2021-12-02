import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import link from '~/public/text/link';
import useStyles from './cards-style';

export default function SimpleThumb(props) {
  const classes = useStyles();
  const {
    icon,
    title,
  } = props;
  return (
    <ButtonBase component="a" href={link.movie.detail} className={classes.simpleThumb}>
      <div>
        <div className={classes.figure}>
          <span>
            <i className={icon} />
          </span>
        </div>
        <Typography className={classes.text}>{title}</Typography>
      </div>
    </ButtonBase>
  );
}

SimpleThumb.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
