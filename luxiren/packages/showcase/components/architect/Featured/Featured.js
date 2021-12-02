import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import ReactWOW from 'react-wow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PlayIcon from '@material-ui/icons/PlayArrow';
import Grid from '@material-ui/core/Grid';
import Carousel from 'react-slick';
import YouTube from 'react-youtube';
import CloseIcon from '@material-ui/icons/Close';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Zoom from '@material-ui/core/Zoom';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import yt from '~/youtube';
import Title from '../Title';
import useStyles from './featured-style';

const Transition = React.forwardRef(function Transition(props, ref) { // eslint-disable-line
  return <Zoom ref={ref} {...props} />;
});

function Featured(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 750,
    fade: true,
    arrows: false,
  };

  const [player, setPlayer] = useState([]);
  const [videoId, setVideoId] = useState('ZGn8kSV9gAA');
  const [openPopup, setOpenPopup] = useState(false);

  const handleClickOpen = id => {
    if (yt.use) {
      setVideoId(id);
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
          {t('common:architect-landing.featured_video')}
          <IconButton onClick={handleClose} className={classes.closeBtn}>
            <CloseIcon className={classes.icon} />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          {yt.use && (
            <YouTube
              videoId={videoId}
              onReady={_onReady}
              opts={opts}
            />
          )}
        </DialogContent>
      </Dialog>
      <Container fixed>
        <Grid container spacing={6}>
          <Grid item lg={7} md={10} xs={12}>
            <div className={classes.videoCarousel}>
              <Carousel {...settings}>
                <Paper className={classes.item}>
                  <img src={imgAPI.architect[4]} alt="cover" />
                  <IconButton className={classes.playBtn} onClick={() => handleClickOpen('ZGn8kSV9gAA')}>
                    <PlayIcon />
                  </IconButton>
                </Paper>
                <Paper className={classes.item}>
                  <img src={imgAPI.architect[5]} alt="cover" />
                  <IconButton className={classes.playBtn} onClick={() => handleClickOpen('85V_u_R0zxM')}>
                    <PlayIcon />
                  </IconButton>
                </Paper>
                <Paper className={classes.item}>
                  <img src={imgAPI.architect[6]} alt="cover" />
                  <IconButton className={classes.playBtn} onClick={() => handleClickOpen('ZGn8kSV9gAA')}>
                    <PlayIcon />
                  </IconButton>
                </Paper>
                <Paper className={classes.item}>
                  <img src={imgAPI.architect[7]} alt="cover" />
                  <IconButton className={classes.playBtn} onClick={() => handleClickOpen('85V_u_R0zxM')}>
                    <PlayIcon />
                  </IconButton>
                </Paper>
              </Carousel>
            </div>
          </Grid>
          <Grid item lg={5} md={10} xs={12}>
            <ReactWOW animation="fadeInLeftShort" offset={-200} delay="0.3s" duration="0.6s">
              <div>
                <Title
                  head={t('common:architect-landing.featured_title')}
                  desc={t('common:architect-landing.featured_subtitle')}
                />
                <Typography display="block" className={text.paragraph}>
                  {t('common:architect-landing.featured_desc1')}
                </Typography>
                <br />
                <Typography display="block" className={text.paragraph}>
                  {t('common:architect-landing.featured_desc2')}
                </Typography>
              </div>
            </ReactWOW>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Featured.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['architect-landing'])(Featured);
