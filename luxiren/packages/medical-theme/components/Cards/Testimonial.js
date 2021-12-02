import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import StarIcon from '@material-ui/icons/Star';
import useStyles from './cards-style';

function Testimonial(props) {
  const classes = useStyles();
  const {
    avatar,
    title,
    name,
    text,
    star,
  } = props;
  return (
    <div className={classes.testiCard}>
      <Paper className={classes.paper}>
        <Typography display="block" component="p">
          {text}
        </Typography>
        <div className={classes.rating}>
          {[...Array(star)].map((e, index) => (
            <StarIcon className={classes.starIcon} key={index.toString()} />
          ))}
          {[...Array(5 - star)].map((e, index) => (
            <StarIcon className={classes.starIconDisable} key={index.toString()} />
          ))}
        </div>
      </Paper>
      <div className={classes.person}>
        <div className={classes.name}>
          <Typography display="block" variant="h6">
            {name}
          </Typography>
          <Typography variant="caption" className={classes.title}>
            {title}
          </Typography>
        </div>
        <Avatar alt={name} src={avatar} className={classes.avatar} />
      </div>
    </div>
  );
}

Testimonial.propTypes = {
  avatar: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  star: PropTypes.number.isRequired,
};

export default Testimonial;
