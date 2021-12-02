import React, { Fragment, useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import BackIcon from '@material-ui/icons/KeyboardArrowLeft';
import NextIcon from '@material-ui/icons/KeyboardArrowRight';
import { useText } from '~/theme/common';
import useStyles from './blog-style';

const blogContent = [
  {
    title: 'Sed imperdiet enim ligula eget suscipit orc',
    desc: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est.',
  },
  {
    title: 'Donec commodo convallis ligula eget suscipit orc',
    desc: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est.',
  },
  {
    title: 'Vivamus sit amet interdum elit',
    desc: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est.',
  },
  {
    title: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor.',
    desc: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est.',
  },
  {
    title: 'Aliquam nec ex aliquet, aliquam neque non, gravida est.',
    desc: 'Sed imperdiet enim ligula, vitae viverra justo porta vel. Duis eget felis bibendum, pretium mi sed, placerat ante. Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non, gravida est.',
  },
];

function Blog() {
  const [current, setCur] = useState(2);
  const classes = useStyles();
  const text = useText();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const next = () => {
    setCur(current + 1);
  };
  const prev = () => {
    setCur(current - 1);
  };
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={10} direction={isDesktop ? 'row' : 'column-reverse'}>
          <Grid item md={3} xs={12}>
            <Hidden smDown>
              {current > 1 && (
                <Fragment>
                  <Typography variant="h5" className={text.title2}>
                    {current < 10 && 0}
                    {current - 1}
                  </Typography>
                  <Typography className={text.paragraph}>
                    {blogContent[current - 2].title}
                  </Typography>
                </Fragment>
              )}
            </Hidden>
            <nav>
              <IconButton
                className={classes.next}
                onClick={next}
                disabled={current >= blogContent.length}
              >
                <NextIcon />
              </IconButton>
              <IconButton
                className={classes.back}
                onClick={prev}
                disabled={current <= 1}
              >
                <BackIcon />
              </IconButton>
            </nav>
          </Grid>
          <Grid item md={6} xs={12}>
            <article>
              <Typography variant="h3" className={text.title2}>
                {blogContent[current - 1].title}
              </Typography>
              <Typography className={text.paragraph}>
                {blogContent[current - 1].desc}
              </Typography>
            </article>
            <Button className={classes.readMore}>
              Read More
            </Button>
          </Grid>
          <Grid item md={3} xs={12}>
            <Hidden smDown>
              {current < blogContent.length && (
                <Fragment>
                  <Typography variant="h5" className={text.title2}>
                    {current < 10 && 0}
                    {current + 1}
                  </Typography>
                  <Typography className={text.paragraph}>
                    {blogContent[current].title}
                  </Typography>
                </Fragment>
              )}
            </Hidden>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Blog;
