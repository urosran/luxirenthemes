import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import imgAPI from '~/public/images/imgAPI';
import Title from './Title';
import Decoration from './Decoration';

const useStyles = makeStyles(theme => ({
  exploreWrap: {
    paddingBottom: theme.spacing(3),
    position: 'relative',
    zIndex: 2,
    background: 'linear-gradient(to bottom, rgba(255,255,255,0) 0%,rgba(255,255,255,0) 1%,rgba(251,251,251,0.91) 21%,rgba(251,251,251,1) 23%)',
    marginTop: 1000,
    [theme.breakpoints.down('xs')]: {
      marginTop: 880,
    }
  },
  explore: {
    position: 'relative',
    marginTop: -80,
    backgroundSize: '100% auto',
    '& ul': {
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        display: 'inline-block',
        textAlign: 'center',
        marginBottom: theme.spacing(12),
        width: '33.33%',
        height: 380,
        [theme.breakpoints.down('md')]: {
          width: '50%',
          '&:last-child': {
            width: '100%'
          }
        },
        [theme.breakpoints.down('xs')]: {
          width: '100%',
          marginBottom: theme.spacing(8),
        },
        '& a': {
          textDecoration: 'none',
          display: 'inline-block',
          fontSize: 16,
          fontWeight: theme.typography.fontWeightMedium,
          color: theme.palette.text.primary,
          transition: 'all 0.3s ease',
          top: 0,
          position: 'relative',
          '& span': {
            color: '#ff0078'
          },
          '&:hover': {
            color: theme.palette.primary.main,
            top: -5,
            '& figure': {
              boxShadow: 'rgba(34, 48, 102, 0.3) -3px 6px 21.1px -4px',
            }
          },
          '& figure': {
            margin: theme.spacing(0, 0, 3, 0),
            overflow: 'hidden',
            borderRadius: 6,
            border: '0px solid #6300cc',
            transition: 'all 0.3s ease',
            boxShadow: 'rgba(34, 48, 102, 0.1) -3px 6px 21.1px -4px',
            height: 380,
            maxWidth: 300,
            [theme.breakpoints.down('xs')]: {
              width: 240,
              height: 300
            }
          },
          '& img': {
            width: '100%'
          }
        }
      }
    }
  }
}));

function Explore() {
  const classes = useStyles();
  return (
    <div className={classes.exploreWrap}>
      <Decoration />
      <div className={classes.explore}>
        <Title subtitle="explore" title="11 Landing Pages Demo" align="center" />
        <Container maxWidth="lg">
          <ul>
            <li>
              <a href="/medical" target="_blank">
                <figure>
                  <img src={imgAPI.showcase[9]} alt="medical" />
                </figure>
                Medical
              </a>
            </li>
            <li>
              <a href="/movie" target="_blank">
                <figure>
                  <img src={imgAPI.showcase[10]} alt="movie" />
                </figure>
                Movie
              </a>
            </li>
            <li>
              <a href="/education" target="_blank">
                <figure>
                  <img src={imgAPI.showcase[11]} alt="education" />
                </figure>
                Education
              </a>
            </li>
            <li>
              <a href="/saas" target="_blank">
                <figure>
                  <img src={imgAPI.showcase[8]} alt="saas" />
                </figure>
                SaaS
              </a>
            </li>
            <li>
              <a href="/agency" target="_blank">
                <figure>
                  <img src={imgAPI.showcase[1]} alt="agency" />
                </figure>
                Corporate Agency
              </a>
            </li>
            <li>
              <a href="/mobile-apps" target="_blank">
                <figure>
                  <img src={imgAPI.showcase[6]} alt="mobile apps" />
                </figure>
                Mobile Apps
              </a>
            </li>
            <li>
              <a href="/profile" target="_blank">
                <figure>
                  <img src={imgAPI.showcase[7]} alt="agency" />
                </figure>
                Portfolio Profile
              </a>
            </li>
            <li>
              <a href="/cryptocurrency" target="_blank">
                <figure>
                  <img src={imgAPI.showcase[3]} alt="crypto" />
                </figure>
                Cryptocurrency &amp; Blockchain
              </a>
            </li>
            <li>
              <a href="/fashion" target="_blank">
                <figure>
                  <img src={imgAPI.showcase[4]} alt="fashion" />
                </figure>
                Fashion
              </a>
            </li>
            <li>
              <a href="/hosting" target="_blank">
                <figure>
                  <img src={imgAPI.showcase[5]} alt="hosting" />
                </figure>
                Cloud Hosting
              </a>
            </li>
            <li>
              <a href="/architect" target="_blank">
                <figure>
                  <img src={imgAPI.showcase[2]} alt="architect" />
                </figure>
                Interior Architect
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line */}
              <a href="https://github.com/ilhammeidi/luxi-starter" target="_blank">
                <figure>
                  <img src="/images/showcase/starter.jpg" alt="starter" />
                </figure>
                <span>
                  TRY
                </span>
                &nbsp;Starter Project
              </a>
            </li>
          </ul>
        </Container>
      </div>
    </div>
  );
}

export default Explore;
