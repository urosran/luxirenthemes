import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactWOW from 'react-wow';
import Carousel from 'react-slick';
import clsx from 'clsx';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Popover from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import testiData from './testimonialsData';
import Title from '../Title';
import useStyle from './testi-style';

function AvatarBuble(props) {
  const classes = useStyle();
  const {
    avatar, name,
    x, y,
    openPopover, closePopover
  } = props;
  return (
    <div className={classes.person} style={{ left: x, top: y }}>
      {avatar ? (
        <Avatar
          alt={name}
          src={avatar}
          className={classes.avatar}
          onMouseEnter={(e) => openPopover(e)}
          onMouseLeave={closePopover}
        />
      ) : (
        <span
          className={classes.dot}
          onMouseEnter={(e) => openPopover(e)}
          onMouseLeave={closePopover}
        />
      )}
    </div>
  );
}

AvatarBuble.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  openPopover: PropTypes.func.isRequired,
  closePopover: PropTypes.func.isRequired
};

AvatarBuble.defaultProps = {
  avatar: ''
};

function Testimonials(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [popupData, setPopupData] = useState({});
  const { t } = props;
  const classes = useStyle();
  const text = useText();
  const open = Boolean(anchorEl);

  const firsthChar = txt => txt.charAt(0);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    arrows: false
  };

  function handlePopoverOpen(event, item) {
    setAnchorEl(event.currentTarget);
    setPopupData(item);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
      >
        <div className={classes.paperBlock}>
          <Typography gutterBottom display="block">
            {popupData.text}
          </Typography>
          <Typography variant="h6">
            {popupData.name}
          </Typography>
          <Typography className={classes.title}>
            {popupData.title}
          </Typography>
        </div>
      </Popover>
      <Container>
        <Title dark>
          {t('common:profile-landing.testi_title')}
          &nbsp;
          <strong>
            {t('common:profile-landing.testi_titleBold')}
          </strong>
        </Title>
        <Grid container>
          <Grid item md={7} xs={12}>
            <div className={classes.worldMap}>
              <Hidden xsDown>
                <div className={classes.avatarWrap}>
                  {testiData.map((item, index) => (
                    <AvatarBuble
                      key={index.toString()}
                      avatar={item.avatar}
                      name={item.name}
                      x={item.x}
                      y={item.y}
                      openPopover={(e) => handlePopoverOpen(e, item)}
                      closePopover={handlePopoverClose}
                    />
                  ))}
                </div>
              </Hidden>
              <Hidden smUp>
                <Carousel {...settings}>
                  {testiData.map((item, index) => (
                    <div
                      className={classes.itemCarousel}
                      key={index.toString()}
                    >
                      <Paper className={classes.card}>
                        <Typography variant="body1" display="block">
                          {item.text}
                        </Typography>
                        <div className={classes.name}>
                          {item.avatar ? (
                            <Avatar alt={item.name} src={item.avatar} className={classes.avatar} />
                          ) : (
                            <Avatar alt={item.name} className={classes.avatar}>
                              {firsthChar(item.name)}
                            </Avatar>
                          )}
                          <Typography variant="caption">
                            {item.name}
                          </Typography>
                        </div>
                      </Paper>
                    </div>
                  ))}
                </Carousel>
              </Hidden>
            </div>
          </Grid>
          <Grid item md={5} xs={12}>
            <div className={classes.text}>
              <ReactWOW animation="fadeInUpShort" offset={-200} delay="0.2s" duration="0.3s">
                <Typography
                  variant="h3"
                  className={clsx(classes.titleSerif, text.title2)}
                >
                  {t('common:profile-landing.testi_title2')}
                </Typography>
              </ReactWOW>
              <ReactWOW animation="fadeInUpShort" offset={-200} delay="0.3s" duration="0.3s">
                <div>
                  <Typography component="p" className={text.paragraph}>
                    {t('common:profile-landing.testi_desc')}
                  </Typography>
                  <Button color="secondary" href="#contact" size="large" className={classes.button} variant="contained">
                    {t('common:profile-landing.testi_button')}
                  </Button>
                </div>
              </ReactWOW>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

Testimonials.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['profile-landing'])(Testimonials);
