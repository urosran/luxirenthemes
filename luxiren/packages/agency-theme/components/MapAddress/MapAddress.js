import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ReactWOW from 'react-wow';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/LocalPhone';
import LocationIcon from '@material-ui/icons/LocationOn';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { withTranslation } from '~/i18n';
import useStyles from './map-address-style';
import TitleDeco from '../Title/WithDecoration';

function MapContainer(props) {
  const { google } = props;
  return (
    <Map
      google={google}
      style={{ width: '100%', height: '700px', position: 'relative' }}
      initialCenter={{
        lat: 37.759703,
        lng: -122.428093
      }}
      zoom={14}
    >
      <Marker
        position={{ lat: 37.759703, lng: -122.428093 }}
      />
    </Map>
  );
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired
};

const MapWithAMarker = GoogleApiWrapper({ apiKey: null })(MapContainer);


function MapAdress(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Translation Function
  const { t } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={6}>
          {isDesktop && (
            <Grid item md={1} />
          )}
          <Grid item md={5} xs={12}>
            <TitleDeco text={t('common:agency-landing.office_title')} />
            <div className={classes.block}>
              <ReactWOW animation="fadeInLeftShort" offset={-100} delay="0.2s" duration="0.3s">
                <Paper className={classes.paper}>
                  <Typography variant="h6" display="block">
                    {t('common:agency-landing.office_head')}
                  </Typography>
                  <Grid container>
                    <Grid item sm={6} xs={12}>
                      <PhoneIcon className={classes.icon} />
                      +123 456 78 91
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <EmailIcon className={classes.icon} />
                      hello@luxi.com
                    </Grid>
                    <Grid item xs={12}>
                      <LocationIcon className={classes.icon} />
                      Lorem ipsum street no.14 Block A
                    </Grid>
                  </Grid>
                </Paper>
              </ReactWOW>
              <ReactWOW animation="fadeInLeftShort" offset={-100} delay="0.5s" duration="0.3s">
                <Paper className={classes.paper}>
                  <Typography variant="h6" display="block">
                    {t('common:agency-landing.office_branch')}
                  </Typography>
                  <Grid container>
                    <Grid item sm={6} xs={12}>
                      <PhoneIcon className={classes.icon} />
                      +98 765 432 10
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <EmailIcon className={classes.icon} />
                      hello@luxi.com
                    </Grid>
                    <Grid item xs={12}>
                      <LocationIcon className={classes.icon} />
                      Lorem ipsum street Block C - Vestibullum Building
                    </Grid>
                  </Grid>
                </Paper>
              </ReactWOW>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <Paper className={classes.map} elevation={10}>
              <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: '100%' }} />}
                containerElement={<div style={{ height: '700px' }} />}
                mapElement={<div style={{ height: '100%' }} />}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

MapAdress.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['agency-landing'])(MapAdress);
