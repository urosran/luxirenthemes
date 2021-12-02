import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/LocalPhone';
import LocationIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';
import Snackbar from '@material-ui/core/Snackbar';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
  Map,
  Marker,
  GoogleApiWrapper,
  InfoWindow
} from 'google-maps-react';
import { useText } from '~/theme/common';
import brand from '~/public/text/brand';
import logo from '~/public/images/architect-logo.svg';
import routeLink from '~/public/text/link';
import { withTranslation } from '~/i18n';
import useStyles from './form-style';
import CrossParallax from '../Parallax/Cross';
import Checkbox from './Checkbox';
import Title from '../Title';

function BubleMark() {
  const classes = useStyles();
  return (
    <div className={classes.bubelWrap}>
      <div className={classes.buble}>
        <Typography variant="h6" gutterBottom>
          Head Quarter
        </Typography>
        <Grid container>
          <Grid item sm={6} xs={12}>
            <Typography>
              <PhoneIcon className={classes.icon} />
              +98 765 432 10
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography>
              <EmailIcon className={classes.icon} />
              hello@luxi.com
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              <LocationIcon className={classes.icon} />
              Lorem ipsum street Block C - Vestibullum Building
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function MapContainer(props) {
  const [activeMarker, setActive] = useState({});
  const [showingInfoWindow, setShow] = useState(false);
  const { google } = props;
  // eslint-disable-next-line
  const onMarkerClick = (props, marker) => {
    setActive(marker);
    setShow(true);
  };

  const onMapClicked = () => {
    if (showingInfoWindow) {
      setShow(false);
      setActive(null);
    }
  };

  return (
    <Map
      google={google}
      onClick={onMapClicked}
      style={{ width: '100%', height: '700px', position: 'relative' }}
      initialCenter={{
        lat: 37.759703,
        lng: -122.428093
      }}
      zoom={14}
    >
      <Marker
        onClick={onMarkerClick}
        position={{ lat: 37.759703, lng: -122.428093 }}
      />
      <InfoWindow
        marker={activeMarker}
        visible={showingInfoWindow}
      >
        <div>
          <BubleMark />
        </div>
      </InfoWindow>
    </Map>
  );
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired
};

const MapWithAMarker = GoogleApiWrapper({ apiKey: null })(MapContainer);

function Contact(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    ValidatorForm.addValidationRule('isTruthy', value => value);
  });

  const [openNotif, setNotif] = useState(false);

  const [check, setCheck] = useState(false);

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return (
    <div className={classes.pageWrap}>
      <Hidden mdDown>
        <div className={classes.bgDeco} />
      </Hidden>
      <div className={classes.parallax}>
        <CrossParallax />
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        key="top right"
        open={openNotif}
        autoHideDuration={4000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">Message Sent</span>}
      />
      <Hidden mdUp>
        <div className={clsx(classes.logo, classes.logoHeader)}>
          <a href={routeLink.architect.home}>
            <img src={logo} alt="logo" />
            <Typography component="span">
              {brand.architect.projectName}
            </Typography>
          </a>
        </div>
      </Hidden>
      <Container maxWidth="lg" className={classes.innerWrap}>
        <IconButton href={routeLink.architect.home} className={classes.backtohome}>
          <i className="ion-ios-home-outline" />
          <i className="ion-ios-arrow-round-back" />
        </IconButton>
        <Grid container>
          <Grid item lg={1} xs={12} />
          <Grid item lg={5} xs={12} className={classes.wrapDeco}>
            <Hidden mdDown>
              <div className={classes.frmDeco} />
            </Hidden>
            <Paper className={clsx(classes.formBox, 'fragment-fadeUp')}>
              <div className={classes.fullFromWrap}>
                <div className={classes.form}>
                  <Title
                    head="Contact Us"
                    desc={t('common:contact_subtitle')}
                  />
                  <ValidatorForm
                    onSubmit={handleSubmit}
                    onError={errors => console.log(errors)}
                  >
                    <Grid container spacing={6}>
                      <Grid item xs={12}>
                        <TextValidator
                          className={classes.input}
                          label={t('common:form_name')}
                          onChange={handleChange('name')}
                          name="Name"
                          value={values.name}
                          validators={['required']}
                          errorMessages={['This field is required']}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          className={classes.input}
                          label={t('common:form_email')}
                          onChange={handleChange('email')}
                          name="Email"
                          value={values.email}
                          validators={['required', 'isEmail']}
                          errorMessages={['This field is required', 'email is not valid']}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          className={classes.input}
                          label={t('common:form_phone')}
                          onChange={handleChange('phone')}
                          name="Phone"
                          value={values.phone}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextValidator
                          multiline
                          rows="6"
                          className={classes.input}
                          label={t('common:form_message')}
                          onChange={handleChange('message')}
                          name="Message"
                          value={values.message}
                        />
                      </Grid>
                    </Grid>
                    <FormControlLabel
                      className={classes.checkArea}
                      control={(
                        <Checkbox
                          validators={['isTruthy']}
                          errorMessages="This field is required"
                          checked={check}
                          value={check}
                          onChange={(e) => handleCheck(e)}
                          color="primary"
                        />
                      )}
                      label={(
                        <span className={text.paragraph}>
                          {t('common:form_terms')}
                          <br />
                          <a href="#">
                            {t('common:form_privacy')}
                          </a>
                        </span>
                      )}
                    />
                    <div className={classes.btnArea}>
                      <Button variant="contained" fullWidth={isMobile} type="submit" color="primary" size="large">
                        {t('common:form_send')}
                        <SendIcon className={classes.rightIcon} />
                      </Button>
                    </div>
                  </ValidatorForm>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid item lg={6} xs={12}>
            <Hidden mdDown>
              <Paper className={classes.map} elevation={10}>
                <MapWithAMarker
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                  loadingElement={<div style={{ height: '100%' }} />}
                  containerElement={<div style={{ height: '700px' }} />}
                  mapElement={<div style={{ height: '100%' }} />}
                />
              </Paper>
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Contact.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['common'])(Contact);
