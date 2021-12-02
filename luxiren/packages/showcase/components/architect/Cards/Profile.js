import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { useText } from '~/theme/common';
import useStyles from './cards-style';

export default function Profile(props) {
  const classes = useStyles();
  const text = useText();
  const {
    photo,
    name,
    title,
  } = props;
  return (
    <div className={classes.profileCard}>
      <Paper className={classes.paper}>
        <img src={photo} alt={name} />
      </Paper>
      <Typography variant="h5" className={text.subtitle}>{name}</Typography>
      <Typography className={text.caption}>{title}</Typography>
    </div>
  );
}

Profile.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
