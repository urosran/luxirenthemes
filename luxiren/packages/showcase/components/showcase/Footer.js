import React from 'react';
import StarIcon from '@material-ui/icons/Star';
import ReactWOW from 'react-wow';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logo from '~/public/images/showcase/logo.png';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundImage: 'linear-gradient(120deg, #1963fe, #2fbcc8)',
    textAlign: 'center',
    color: '#FFF',
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      marginTop: -90,
    },
    '&:before': {
      content: '""',
      width: '100%',
      height: 400,
      position: 'absolute',
      top: 0,
      left: 0,
      background: 'url(/images/showcase/deco-footer.png) no-repeat top center',
      backgroundSize: '100% auto'
    }
  },
  title: {
    margin: theme.spacing(5, 0),
    '& h3': {
      fontWeight: theme.typography.fontWeightBold
    },
    '& img': {
      width: 80,
      marginBottom: theme.spacing(2)
    }
  },
  starArea: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(5, 0),
    '& svg': {
      width: 30,
      height: 30,
      fill: '#ffe23f',
      margin: theme.spacing()
    }
  },
  inner: {
    background: 'url(/images/showcase/bg-footer.png) fixed no-repeat center bottom',
    backgroundSize: '100% auto',
    padding: theme.spacing(30, 5, 20),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(50, 5, 20),
    },
  }
}));

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <ReactWOW animation="fadeInLeftShort" offset={-100} delay="0.2s" duration="0.3s">
          <div>
            <div className={classes.title}>
              <img src={logo} alt="logo" />
              <Typography variant="h3" gutterBottom>Luxiren</Typography>
            </div>
            <Typography variant="h6" gutterBottom>
              Thank you for your time
              <br />
              and if you like please rate it!
            </Typography>
            <div className={classes.starArea}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
        </ReactWOW>
        <Typography>&copy;Luxiren Theme 2021</Typography>
      </div>
    </div>
  );
}


export default Footer;
