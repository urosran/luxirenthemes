import { makeStyles } from '@material-ui/core/styles';
import particleBg from '~/public/images/hosting/particle.png';

const pricingStyles = makeStyles(theme => ({
  decoration: {
    position: 'absolute',
    background: `url(${particleBg}) repeat`,
    width: '100%',
    height: '100%',
  },
  pricingWrap: {
    position: 'relative',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    '& > *': {
      margin: theme.spacing(3, 1),
      flex: 1,
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(2, 1),
      },
    }
  },
}));

export default pricingStyles;
