import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import YouTube from 'react-youtube';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Zoom from '@material-ui/core/Zoom';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import yt from '~/youtube';
import ParallaxSmall from '../Parallax/Small';
import ParallaxMedium from '../Parallax/Medium';
import TitleSecondary from '../Title/TitleSecondary';
import Title from '../Title';
import useStyles from './feature-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function Feature(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [player, setPlayer] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = () => {
    if (yt.use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'http://localhost:3007'
    }
  };

  return (
    <div className={classes.root}>
      <Dialog
        open={openPopup}
        TransitionComponent={Transition}
        keepMounted
        classes={{ paper: classes.videoPopup }}
        onClose={handleClose}
      >
        <DialogTitle id="alert-dialog-slide-title">
          {t('common:mobile-landing.feature_video')}
          <IconButton onClick={handleClose} className={classes.closeBtn}>
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube
              videoId="MltGO66gTbo"
              onReady={_onReady}
              opts={opts}
            />
          )}
        </DialogContent>
      </Dialog>
      <Title align="center">
        {t('common:mobile-landing.feature_title')}
      </Title>
      <Container fixed>
        <div className={clsx(classes.item, classes.first)}>
          <Grid container direction={isMobile ? 'column-reverse' : 'row'}>
            <Grid item md={6} xs={12}>
              <div className={classes.illustrationLeft}>
                <svg className={classes.decoPrimary}>
                  <use xlinkHref="/images/mobile/deco-feature.svg#main" />
                </svg>
                <ParallaxSmall />
                <figure className={classes.screen}>
                  <img src={imgAPI.mobile[4]} alt="illustration" />
                </figure>
              </div>
            </Grid>
            <Grid item md={6} xs={12}>
              <div className={classes.text}>
                <TitleSecondary align={isMobile ? 'center' : 'left'} text={t('common:mobile-landing.feature_title1')} />
                <Typography display="block" component="p" className={text.subtitle2}>
                  {t('common:mobile-landing.feature_desc1')}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
      <div className={classes.bgColor}>
        <div className={classes.decoBgTop} />
        <Container fixed>
          <div className={classes.item}>
            <Grid container>
              <Grid item md={6} xs={12}>
                <div className={classes.text}>
                  <TitleSecondary align={isMobile ? 'center' : 'left'} text={t('common:mobile-landing.feature_title2')} />
                  <Typography display="block" component="p" className={text.subtitle2}>
                    {t('common:mobile-landing.feature_desc2')}
                  </Typography>
                </div>
              </Grid>
              <Grid item md={6} xs={12}>
                <div className={classes.illustrationRight}>
                  <svg className={classes.decoSecondary}>
                    <use xlinkHref="/images/mobile/deco-feature.svg#main" />
                  </svg>
                  <ParallaxSmall />
                  <figure className={classes.screen}>
                    <img src={imgAPI.mobile[5]} alt="screen" />
                  </figure>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={clsx(classes.item, classes.last)}>
            <TitleSecondary align="center" text={t('common:mobile-landing.feature_title3')} />
            <Typography align="center" component="p" className={text.subtitle2}>
              {t('common:mobile-landing.feature_desc3')}
            </Typography>
            <Container maxWidth="sm">
              <Grid container>
                <Grid item md={12} xs={12}>
                  <div className={classes.illustrationCenter}>
                    <svg className={classes.decoPrimaryBig}>
                      <use xlinkHref="/images/mobile/deco-feature.svg#main" />
                    </svg>
                    <ParallaxMedium />
                    <Paper className={classes.video}>
                      <img src={imgAPI.mobile[6]} alt="screen" />
                      <Typography variant="h6">
                        {t('common:mobile-landing.feature_watch')}
                      </Typography>
                      <IconButton className={classes.button} onClick={handleClickOpen}>
                        <i className="ion-ios-play-outline" />
                      </IconButton>
                    </Paper>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </Container>
      </div>
    </div>
  );
}

Feature.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['mobile-landing'])(Feature);
