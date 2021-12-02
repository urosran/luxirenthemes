import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import SearchIcon from '@material-ui/icons/Search';
import YouTube from 'react-youtube';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { useText } from '~/theme/common';
import { withTranslation } from '~/i18n';
import imgApi from '~/public/images/imgAPI';
import yt from '~/youtube';
import useStyles from './banner-style';
import DotsParallax from '../Parallax/Dots';

function VideoBanner(props) {
  // Theme breakpoints
  const theme = useTheme();
  const text = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Translation function
  const { t } = props;

  // Youtube player
  const [play, setPlayed] = useState(false);
  const [playCtrl, setPlayedCtrl] = useState(true);
  const [player, setPlayer] = useState([]);

  // Search box
  const [values, setValue] = useState({
    query: '',
  });
  const classes = useStyles();

  useEffect(() => {
    if (isDesktop) {
      /* Attention
      ** HandleScroll function to optimize site with video background may give an error log
      ** Uncaught TypeError: Cannot read property 'src' of null
      ** It's because HMR in development mode, and react-youtube need to refresh.
      ** The error log will not happen in production mode or just reload browser (development mode)
      ** You can uncomment _onPlay() function, if you don't want see error browser log.
      ** But then every changes you make, the browser will auto reload.
      */
      // _onPlay();
    }
  }, []);

  const _onEnd = event => {
    event.target.playVideo();
  };

  const _onPlay = () => {
    const curTime = player[0].getCurrentTime();
    if (curTime > 0) {
      setPlayed(true);
      setPlayedCtrl(true);
    }
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const _onTogglePause = () => {
    setPlayedCtrl(!playCtrl);
    if (playCtrl) {
      player[0].pauseVideo();
    } else {
      player[0].playVideo();
    }
  };

  const opts = {
    height: '720',
    width: '1080',
    playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      origin: 'http://localhost:3009'
    }
  };

  const handleChange = (event, type) => {
    setValue({ ...values, [type]: event.target.value });
  };

  return (
    <div className={classes.heroContent}>
      <Hidden smUp>
        <figure className={classes.mobileCover}>
          <img src={imgApi.medical[0]} alt="cover" />
        </figure>
      </Hidden>
      <Container fixed={isDesktop}>
        <Grid container spacing={6}>
          <Grid item md={6} xs={12}>
            <div className={classes.bannerText}>
              <div className={classes.title}>
                <Typography variant="h3" className={clsx(classes.textHelper, text.title)}>
                  {t('common:medical-landing.banner_title')}
                </Typography>
              </div>
              <Typography className={clsx(classes.subtitle, text.subtitle2)} variant="h5">
                {t('common:medical-landing.banner_subtitle')}
              </Typography>
              <Paper className={classes.searchBanner}>
                <TextField
                  className={classes.search}
                  label={isMobile ? 'Search...' : 'Search doctor, medicines or clinic...'}
                  onChange={(e) => handleChange(e, 'query')}
                />
                <div className={classes.action}>
                  <Button className={classes.button} variant="contained" color="secondary" size="large">
                    {isMobile && <SearchIcon className={classes.icon} />}
                    {isDesktop && t('common:medical-landing.banner_search')}
                  </Button>
                </div>
              </Paper>
            </div>
          </Grid>
          {isTablet && (
            <Grid item md={6} className={classes.visualContent}>
              <div className={classes.decoBanner}>
                <div className={classes.menuBg} />
                <div className={classes.videoBg} />
              </div>
              <div className={classes.videoWrap}>
                <div className={classes.videoFigure}>
                  <div className={classes.innerFigure}>
                    <Hidden mdDown>
                      {play && (
                        <IconButton
                          className={classes.btnPlay}
                          onClick={_onTogglePause}
                        >
                          {playCtrl ? <PauseIcon /> : <PlayIcon />}
                        </IconButton>
                      )}
                    </Hidden>
                    {!play || isMobile ? <img src={imgApi.medical[0]} alt="cover" /> : null}
                    {yt.use && (
                      <div className={classes.video}>
                        <Hidden mdDown>
                          <YouTube
                            videoId="sbef4EWb4js"
                            opts={opts}
                            onReady={_onReady}
                            onEnd={_onEnd}
                            onPlay={_onPlay}
                          />
                        </Hidden>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className={classes.parallaxBanner}>
                <DotsParallax />
              </div>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  );
}

VideoBanner.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['medical-landing'])(VideoBanner);
