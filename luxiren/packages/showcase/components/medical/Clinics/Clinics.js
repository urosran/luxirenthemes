import React from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ReactWOW from 'react-wow';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { withTranslation } from '~/i18n';
import ParallaxOval from '../Parallax/Oval';
import AddressCard from '../Cards/Address';
import useText from '../Title/title-style';
import useStyles from './clinics-style';

function MapContainer(props) {
  const { google } = props;
  return (
    <Map
      google={google}
      style={{ width: '100%', height: '700px', position: 'relative' }}
      initialCenter={{ lat: 40.553076, lng: 16.21 }}
      zoom={8}
    >
      <Marker position={{ lat: 40.933076, lng: 15.629058 }} />
      <Marker position={{ lat: 40.815, lng: 15.9819 }} />
      <Marker position={{ lat: 40.953076, lng: 16.21 }} />
      <Marker position={{ lat: 40.92, lng: 16.98 }} />
    </Map>
  );
}

MapContainer.propTypes = {
  google: PropTypes.object.isRequired
};

const MapWithAMarker = GoogleApiWrapper({ apiKey: null })(MapContainer);

const clinicData = [
  {
    name: 'Central Clinic',
    phone: '+123 456 78 91',
    email: 'hello@luxi.com',
    address: 'Lorem ipsum street no.14 Block A'
  },
  {
    name: 'Dental Clinic',
    phone: '+123 456 78 91',
    email: 'hello@luxi.com',
    address: 'Lorem ipsum street Block C - Vestibullum Building'
  },
  {
    name: 'Mother and Baby Care',
    phone: '+123 456 78 91',
    email: 'hello@luxi.com',
    address: 'Lorem ipsum street no.14 Block A'
  },
  {
    name: 'Orthopedic Clinic',
    phone: '+123 456 78 91',
    email: 'hello@luxi.com',
    address: 'Lorem ipsum street Block C - Vestibullum Building'
  }
];

function MapAdress(props) {
  // Theme breakpoints
  const theme = useTheme();
  const text = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  // Translation Function
  const { t } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.parallaxBottom}>
        <ParallaxOval />
      </div>
      <Container fixed>
        <Grid container spacing={6}>
          {isDesktop && (
            <Grid item lg={1} />
          )}
          <Grid item lg={5} md={6} xs={12}>
            <Box mt={5}>
              <Typography variant="h4" className={text.primary}>
                {t('common:medical-landing.clinic_title')}
              </Typography>
            </Box>
            <div className={classes.block}>
              {clinicData.map((item, index) => (
                <div key={index.toString()}>
                  <ReactWOW animation="fadeInLeftShort" offset={-30} delay={(index * 0.2) + 's'} duration="0.3s">
                    <div>
                      <AddressCard
                        name={item.name}
                        phone={item.phone}
                        email={item.email}
                        address={item.address}
                      />
                    </div>
                  </ReactWOW>
                </div>
              ))}
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

export default withTranslation(['medical-landing'])(MapAdress);
