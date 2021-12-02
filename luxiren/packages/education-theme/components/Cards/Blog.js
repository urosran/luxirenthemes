import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import useStyles from './cards-style';

const month12 = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

function Blog(props) {
  const classes = useStyles();
  const {
    category,
    title,
    date
  } = props;

  // Date extraction
  const dateRaw = new Date(date);
  const month = month12[dateRaw.getMonth()];
  const day = dateRaw.getDate() < 10 ? '0' + dateRaw.getDate() : dateRaw.getDate();
  const year = dateRaw.getFullYear();

  return (
    <div className={classes.blogCard}>
      <div className={classes.text}>
        <Button href="#">
          {category}
        </Button>
        <Typography variant="h4">
          <Button href="#">
            {title}
          </Button>
        </Typography>
      </div>
      <div className={classes.date}>
        <Typography variant="h3">{month}</Typography>
        <Typography variant="h2">{day}</Typography>
        <Typography variant="h4">{year}</Typography>
      </div>
    </div>
  );
}

Blog.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Blog;
