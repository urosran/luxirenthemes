import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ReactWOW from 'react-wow';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import ProfileCard from '../Cards/Profile';
import Title from '../Title';
import useStyles from './team-style';

const team = [
  {
    photo: imgAPI.architect[9],
    name: 'John Doe',
    title: 'chairman'
  },
  {
    photo: imgAPI.architect[10],
    name: 'jane Doe',
    title: 'Chief Executive Officer'
  },
  {
    photo: imgAPI.architect[11],
    name: 'James Doe',
    title: 'Chief Marketing Officer'
  },
  {
    photo: imgAPI.architect[12],
    name: 'Jihan Doe',
    title: 'Chief Operation Officer'
  },
  {
    photo: imgAPI.architect[13],
    name: 'Johan Doe',
    title: 'Senior Architect'
  },
  {
    photo: imgAPI.architect[14],
    name: 'Jena Doe',
    title: 'Senior Architect'
  },
];

function Featured(props) {
  const classes = useStyles();
  const { t } = props;

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <div className={classes.root}>
      <div className={classes.deco} />
      <Container fixed={isDesktop}>
        <ReactWOW animation="fadeInUpShort" offset={-300} delay="0.2s" duration="0.6s">
          <Title
            head={t('common:architect-landing.team_title')}
            desc={t('common:architect-landing.team_desc')}
          />
        </ReactWOW>
        <div className={classes.teamWrap}>
          <Grid container spacing={isMobile ? 2 : 6}>
            {team.map((item, index) => (
              <Grid item md={4} xs={6} key={index.toString()}>
                <ReactWOW animation="fadeInUpShort" offset={-50} delay={`${0.2 + (0.1 * index)}s`} duration="0.3s">
                  <div>
                    <ProfileCard
                      photo={item.photo}
                      name={item.name}
                      title={item.title}
                    />
                  </div>
                </ReactWOW>
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </div>
  );
}

Featured.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['architect-landing'])(Featured);
