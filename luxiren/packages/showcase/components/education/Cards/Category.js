import React from 'react';
import PropTypes from 'prop-types';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import useStyles from './cards-style';

function Category(props) {
  const classes = useStyles();
  const {
    img,
    title,
    desc
  } = props;
  return (
    <div className={classes.cardWrap}>
      <span className={classes.fold} />
      <ButtonBase
        className={classes.categoryCard}
        focusRipple
        href="#"
      >
        <span className={classes.figure}>
          <img src={img} alt="img" />
        </span>
        <span className={classes.property}>
          <Typography component="span" className={classes.title}>
            {title}
          </Typography>
          <Typography component="span" className={classes.descCategory}>
            {desc}
          </Typography>
        </span>
      </ButtonBase>
    </div>
  );
}

Category.propTypes = {
  img: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Category;
