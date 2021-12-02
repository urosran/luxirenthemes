import React from 'react';
import PropTypes from 'prop-types';
import Container from '@material-ui/core/Container';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import imgAPI from '~/public/images/imgAPI';
import { withTranslation } from '~/i18n';
import { useText } from '~/theme/common';
import Title from '../Title';
import ProductRattingCard from '../Cards/ProductRatting';
import useStyles from './new-products-style';

function NewProducts(props) {
  const classes = useStyles();
  const text = useText();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  const { t } = props;
  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={3}>
          <Grid item md={3} xs={12}>
            <Title primary="New" secondary="Arrivals" align={isMobile ? 'center' : 'left'} />
            <Typography className={text.paragrpah}>
              {t('common:fashion-landing.new_desc')}
            </Typography>
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <ProductRattingCard
              img={imgAPI.fashion[5]}
              ratting={4}
              text="It is a long established"
              price="$90.00"
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <ProductRattingCard
              img={imgAPI.fashion[6]}
              ratting={5}
              text="It is a long established"
              price="$90.00"
            />
          </Grid>
          <Grid item md={3} sm={4} xs={12}>
            <ProductRattingCard
              img={imgAPI.fashion[7]}
              ratting={5}
              text="It is a long established"
              price="$90.00"
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

NewProducts.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation(['fashion-landing'])(NewProducts);
