import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './cards-style';

function Profile(props) {
  const classes = useStyles();
  const {
    avatar,
    name,
    title,
    rating,
    exp,
  } = props;
  return (
    <Paper className={classes.profile}>
      <div className={classes.personBlock}>
        <Avatar className={classes.photo}>
          <img src={avatar} alt={name} />
        </Avatar>
        <div className={classes.nameCard}>
          <h4>
            dr.
            {name}
          </h4>
          <Typography>{title}</Typography>
        </div>
      </div>
      <hr className={classes.divider} />
      <div className={classes.action}>
        <div className={classes.property}>
          <span>
            <i className="ion-ios-thumbs-up" />
            &nbsp;
            {rating}
            %
          </span>
          <span>
            <i className="ion-ios-briefcase" />
            &nbsp;
            {exp}
            &nbsp;Years
          </span>
        </div>
        <Button variant="contained" color="secondary" className={classes.button}>
          chat
        </Button>
      </div>
    </Paper>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  exp: PropTypes.number.isRequired,
};

export default Profile;
