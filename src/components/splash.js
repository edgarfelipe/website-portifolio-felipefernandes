import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/styles';
import classnames from 'classnames';
import React, { Component } from 'react';
import DiscordIcon from '../assets/discord.svg';
import GitHubIcon from '../assets/github.svg';
import MailIcon from '../assets/gmail.svg';
import InstagramIcon from '../assets/instagram.svg';
import SteamIcon from '../assets/steam.svg';
import StravaIcon from '../assets/strava.svg';
import TwitterIcon from '../assets/twitter.svg';
import ProfileImage from './profileImage';

const styles = (theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    marginBottom: 50,
    marginTop: 50,
    width: '90%',
    maxWidth: 1280,
    [theme.breakpoints.down('sm')]: {
      width: '85%',
    },
    textAlign: 'center',
  },
  picture: {
    margin: 'auto',
    width: 100,
    borderRadius: 100,
  },
  text: {
    color: 'white',
  },
  title: {
    fontFamily: '"Nunito", "Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: '4rem',
    marginTop: 30,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: '1.5rem',
  },
  icons: {
    marginTop: 32,
  },
  icon: {
    width: 40,
    fill: '#fff',
    padding: '0 8px',
  },
});

class Splash extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <ProfileImage className={classes.picture} />
          <Typography variant='h1' className={classnames(classes.text, classes.title)}>
            Felipe Fernandes
          </Typography>
          <Typography variant='h4' className={classnames(classes.text, classes.subtitle)}>
            Student, Developer &amp; Runner
          </Typography>
          <div className={classes.icons}>
            <Icon
              tooltip='edgarfelipe'
              component={<GitHubIcon className={classes.icon} />}
              href='https://github.com/edgarfelipe'
              analyticsEvent='github'
            />
            <Icon
              tooltip='@edgarfernandes0'
              component={<TwitterIcon className={classes.icon} />}
              href='https://twitter.com/phelipepegado'
              analyticsEvent='twitter'
            />
            <Icon
              tooltip='felipejokerbr#8053'
              component={<DiscordIcon className={classes.icon} />}
              analyticsEvent='discord'
            />
            <Icon
              tooltip='Felipe Fernandes'
              component={<StravaIcon className={classes.icon} />}
              href='https://www.strava.com/athletes/2276293011'
              analyticsEvent='strava'
            />
            <Icon
              tooltip='felipejokerbr'
              component={<SteamIcon className={classes.icon} />}
              href='https://steamcommunity.com/id/felipejokerbr'
              analyticsEvent='steam'
            />
            <Icon
              tooltip='@edfernandes0'
              component={<InstagramIcon className={classes.icon} />}
              href='https://www.instagram.com/edfernandes0/'
              analyticsEvent='instagram'
            />
            <Icon
              tooltip='felipedevfullstack@gmail.com'
              component={<MailIcon className={classes.icon} />}
              href='felipedevfullstack@gmail.com'
              analyticsEvent='mail'
            />
          </div>
        </div>
      </div>
    );
  }
}

const Icon = ({ component, tooltip, analyticsEvent, ...props }) => (
  <Tooltip title={tooltip} interactive enterTouchDelay={0}>
    <a
      target='_blank'
      rel='noopener'
      className={`umami--click--${analyticsEvent}-social-hero`}
      {...props}
    >
      {component}
    </a>
  </Tooltip>
);

export default withStyles(styles)(Splash);
