import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/LocalPhone';
import LocationIcon from '@material-ui/icons/LocationOn';
import useStyles from './cards-style';

function Address(props) {
  const classes = useStyles();
  const {
    name, phone,
    email, address
  } = props;
  return (
    <div className={classes.paperAddress}>
      <Typography variant="h6" display="block">
        {name}
      </Typography>
      <Grid container>
        <Grid item md={6} xs={12}>
          <PhoneIcon className={classes.icon} />
          {phone}
        </Grid>
        <Grid item md={6} xs={12}>
          <EmailIcon className={classes.icon} />
          {email}
        </Grid>
        <Grid item xs={12}>
          <LocationIcon className={classes.icon} />
          {address}
        </Grid>
      </Grid>
    </div>
  );
}

Address.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired
};

export default Address;
