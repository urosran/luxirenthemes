import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { Parallax } from 'react-parallax';
import imgAPI from '~/public/images/imgAPI';
import { useText } from '~/theme/common';
import { withTranslation } from '~/i18n';
import useStyles from './subscribe-style';

function SubscribeForm(props) {
  const classes = useStyles();
  const text = useText();
  const { t } = props;
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div className={classes.root}>
      <Parallax
        blur={0}
        bgImage={imgAPI.education[18]}
        bgImageAlt="benefit"
        strength={300}
      >
        <div className={classes.parallaxWrap} />
      </Parallax>
      <Container fixed>
        <Paper className={classes.form}>
          <Typography variant="h4" className={text.title2}>
            {t('common:education-landing.subscribe_title')}
          </Typography>
          <Typography className={text.subtitle2}>
            {t('common:education-landing.subscribe_subtitle')}
          </Typography>
          <form>
            <TextField
              className={classes.field}
              fullWidth
              variant="filled"
              label={t('common:education-landing.subscribe_input')}
              placeholder={t('common:education-landing.subscribe_input')}
              onChange={(e) => handleChange(e)}
              value={value}
            />
            <Button variant="contained" size="large" color="primary">
              {t('common:education-landing.subscribe_subscribe')}
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

SubscribeForm.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['education-landing'])(SubscribeForm);
