import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowIcon from '@material-ui/icons/ArrowDownward';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import YouTube from 'react-youtube';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import imgAPI from '~/public/images/imgAPI';
import yt from '~/youtube';
import useStyles from './banner-style';

function Banner(props) {
  // Theme breakpoints
  const theme = useTheme();
  const text = useText();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { t } = props;
  const classes = useStyles();

  // Youtube player
  const [play, setPlayed] = useState(false);
  const [playCtrl, setPlayedCtrl] = useState(true);
  const [player, setPlayer] = useState([]);

  const _onPlay = () => {
    const curTime = player[0].getCurrentTime();
    if (curTime > 0) {
      setPlayed(true);
    }
  };

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
      origin: 'https://localhost:3005'
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.video}>
        <div className={classes.overlay} />
        {!play || isMobile ? <img src={imgAPI.fashion[0]} alt="cover" /> : null}
        {yt.use && (
          <Hidden mdDown>
            <YouTube
              videoId="FwdLDL-6QNg"
              opts={opts}
              onReady={_onReady}
              onEnd={_onEnd}
              onPlay={_onPlay}
            />
          </Hidden>
        )}
        <div className={classes.caption}>
          <Container maxWidth="md">
            <Hidden mdDown>
              {play && (
                <IconButton
                  className={classes.btnPlay}
                  onClick={_onTogglePause}
                >
                  {playCtrl ? <i className="ion-ios-pause-outline" /> : <i className="ion-ios-play-outline" />}
                </IconButton>
              )}
            </Hidden>
            <Typography variant="h6" className={text.subtitle}>
              {t('common:fashion-landing.banner_title')}
            </Typography>
            <Typography variant="h2" className={text.title}>#BEanICON</Typography>
            <IconButton className={classes.arrow} component={AnchorLink} offset={100} href="#promotions">
              <ArrowIcon />
            </IconButton>
          </Container>
        </div>
      </div>
    </div>
  );
}

Banner.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['fashion-landing'])(Banner);
