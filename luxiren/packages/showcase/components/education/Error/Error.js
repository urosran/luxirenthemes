import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import routeLink from '~/public/text/link';
import useStyles from './error-style';

function Error(props) {
  const classes = useStyles();
  const { errCode, text } = props;
  return (
    <div className={classes.errorWrap}>
      <Container maxWidth="md">
        <Grid container>
          <Grid item md={5} xs={12}>
            <div className={classes.flex}>
              <div className={classes.deco}>
                <Typography variant="h3">
                  {errCode}
                </Typography>
              </div>
            </div>
          </Grid>
          <Grid item md={7} xs={12}>
            <div className={classes.text}>
              <Typography variant="h4">{text}</Typography>
              <Typography>
                You can either stay and chill here, or go back to the beginning.
              </Typography>
              <Button variant="contained" color="primary" size="large" href={routeLink.education.home} className={classes.button}>
                BACK TO HOME
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Error.propTypes = {
  errCode: PropTypes.string,
  text: PropTypes.string,
};

Error.defaultProps = {
  errCode: '404',
  text: '',
};

export default Error;
