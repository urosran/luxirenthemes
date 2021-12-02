import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Container from '@material-ui/core/Container';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { useText } from '~/theme/common';
import { withTranslation } from '~/i18n';
import FormControl from '@material-ui/core/FormControl';
import useStyles from './banner-style';

function Banner(props) {
  const classes = useStyles();
  const text = useText();
  const elem = useRef(null);

  // Media Query
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  // Translation Function
  const { t } = props;

  const [values, setValue] = useState({
    name: '',
    domain: 'com'
  });

  const [hide, setHide] = useState(false);

  const handleScroll = () => {
    if (!elem.current) {
      return;
    }
    const doc = document.documentElement;
    const elTop = elem.current.offsetTop - 200;
    const elBottom = elTop + elem.current.getBoundingClientRect().height;
    if (doc.scrollTop > elTop && doc.scrollTop < elBottom) {
      setHide(false);
    } else {
      setHide(true);
    }
  };

  useEffect(() => {
    window.VANTA.NET({
      el: '#net_art',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
      backgroundAlpha: 0,
      points: 4.00,
      maxDistance: 18.00,
      spacing: 12.00
    });
    window.addEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (event, type) => {
    setValue({ ...values, [type]: event.target.value });
  };

  return (
    <div className={classes.root} ref={elem}>
      <div className={classes.decoWrap}>
        <div className={clsx(classes.decoInner, hide && classes.hide)}>
          <div className={classes.illustration} id="net_art" />
        </div>
      </div>
      <Hidden smDown>
        <div className={classes.innerParallax}>
          <div className={classes.cloudWrap}>
            <ParallaxProvider>
              <Parallax
                y={[40, 40]}
                tagOuter="figure"
                className={classes.cloudParallax}
              >
                <div className={classes.cloudDeco} />
              </Parallax>
            </ParallaxProvider>
          </div>
        </div>
      </Hidden>
      <Container maxWidth="md">
        <div className={classes.bannerWrap}>
          <div className={classes.text}>
            <Typography variant="h4" className={text.title2}>
              {t('common:hosting-landing.banner_title')}
            </Typography>
            <Typography component="p" className={text.subtitle2}>
              {t('common:hosting-landing.banner_subtitle')}
            </Typography>
            <Paper className={classes.searchDomain}>
              <TextField
                className={classes.search}
                label={t('common:hosting-landing.banner_label')}
                onChange={(e) => handleChange(e, 'name')}
              />
              <div className={classes.action}>
                <Hidden smDown>
                  <FormControl className={classes.formControl}>
                    <Select
                      value={values.domain}
                      onChange={(e) => handleChange(e, 'domain')}
                      displayEmpty
                      name="domain"
                      className={classes.selectDomain}
                    >
                      <MenuItem value="com">.com</MenuItem>
                      <MenuItem value="net">.net</MenuItem>
                      <MenuItem value="org">.org</MenuItem>
                      <MenuItem value="co">.co</MenuItem>
                      <MenuItem value="biz">.biz</MenuItem>
                      <MenuItem value="gov">.gov</MenuItem>
                      <MenuItem value="id">.id</MenuItem>
                      <MenuItem value="abc">.abc</MenuItem>
                      <MenuItem value="xyz">.xyz</MenuItem>
                      <MenuItem value="news">.news</MenuItem>
                      <MenuItem value="cc">.cc</MenuItem>
                      <MenuItem value="me">.me</MenuItem>
                    </Select>
                  </FormControl>
                </Hidden>
                <Button className={classes.button} variant="contained" color="primary">
                  <SearchIcon className={classes.icon} />
                  {isDesktop && t('common:hosting-landing.banner_button')}
                </Button>
              </div>
            </Paper>
          </div>
        </div>
      </Container>
    </div>
  );
}

Banner.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation(['hosting-landing'])(Banner);
