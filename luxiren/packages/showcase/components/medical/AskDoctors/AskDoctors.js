import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ReactWOW from 'react-wow';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { withTranslation } from '~/i18n';
import imgAPI from '~/public/images/imgAPI';
import ProfileCard from '../Cards/Profile';
import useTitle from '../Title/title-style';
import useStyles from './ask-doctors-style';

const categories = [
  'all',
  'Orthopedic',
  'Nutritionist',
  'Pediatric',
  'Anaesthestic'
];

const doctorsData = [
  {
    avatar: imgAPI.medical[7],
    name: 'Jena Doe',
    title: 'Pediatric Surgeon',
    rating: 95,
    exp: 4
  },
  {
    avatar: imgAPI.medical[12],
    name: 'John Doe',
    title: 'Pediatric Surgeon',
    rating: 95,
    exp: 4
  },
  {
    avatar: imgAPI.medical[8],
    name: 'Jihan Doe',
    title: 'Pediatric Surgeon',
    rating: 95,
    exp: 4
  },
  {
    avatar: imgAPI.medical[10],
    name: 'James Doe',
    title: 'Pediatric Surgeon',
    rating: 95,
    exp: 4
  },
  {
    avatar: imgAPI.medical[11],
    name: 'Jim Doe',
    title: 'Pediatric Surgeon',
    rating: 95,
    exp: 4
  },
  {
    avatar: imgAPI.medical[9],
    name: 'Jessy Doe',
    title: 'Pediatric Surgeon',
    rating: 95,
    exp: 4
  }
];

function AskDoctors(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Translation Function
  const { t } = props;

  const classes = useStyles();
  const title = useTitle();
  const [selectedIndex, setSelectedIndex] = useState('all');

  function handleListItemClick(event, index) {
    setSelectedIndex(index);
  }

  const renderCard = (item, index) => (
    <ProfileCard
      key={index.toString()}
      name={item.name}
      title={item.title}
      avatar={item.avatar}
      rating={item.rating}
      exp={item.exp}
    />
  );

  return (
    <div className={classes.root}>
      <div className={classes.deco} />
      <Container fixed={isDesktop}>
        <Grid container spacing={isDesktop ? 3 : 0} justify="center">
          <Grid item md={2} sm={9} xs={12}>
            <ReactWOW animation="fadeInLeftShort" offset={-100} delay="0.2s" duration="0.3s">
              <div className={classes.sideFilter}>
                <Typography variant="h4" className={title.primary}>
                  {t('common:medical-landing.ask_doctors')}
                </Typography>
                <List component="nav">
                  {categories.map((item, index) => (
                    <ListItem
                      button
                      key={index.toString()}
                      className={clsx(classes.filter, selectedIndex === item && classes.active)}
                      onClick={event => handleListItemClick(event, item)}
                    >
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </div>
            </ReactWOW>
          </Grid>
          <Grid item lg={8} md={10} xs={12}>
            <div className={classes.massonry}>
              <Grid container spacing={isDesktop ? 6 : 4}>
                {doctorsData.map((item, index) => (
                  <Grid item sm={6} xs={12} key={index.toString()}>
                    <ReactWOW animation="fadeInUpShort" offset={-100} delay={(index * 0.2) + 's'} duration="0.4s">
                      <div>
                        {renderCard(item, index)}
                      </div>
                    </ReactWOW>
                  </Grid>
                ))}
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

AskDoctors.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['medical-landing'])(AskDoctors);
