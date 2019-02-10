import * as React from 'react';
import {
  AppBar,
  Toolbar,
  createStyles,
  Theme,
  withStyles,
  WithStyles,
  Typography,
  Button,
  Card,
  CardMedia
} from '@material-ui/core';
import classNames from 'classnames';
import Logo from '../../static/images/liga-pdh-site.png';

const styles = (theme: Theme) =>
  createStyles({
    AppBar: {
      background: 'transparent',
      position: 'absolute'
    },
    links: {
      position: 'fixed',
      right: '5%'
    },
    navButton: {
      marginLeft: '5px',
      marginRight: '5px'
    },
    card: {
      width: '50%',
      height: '50%'
    }
  });

export class NavigationBar extends React.Component<WithStyles<typeof styles>> {
  constructor(props: WithStyles<typeof styles>) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <AppBar position={'fixed'} elevation={0} className={classNames(classes.AppBar)}>
        <Toolbar>
          <img src={Logo} style={{ position: 'fixed', marginTop: '10px' }} />
          <div className={classNames(this.props.classes.links)}>
            <Button className={classNames(classes.navButton)}>Início</Button>
            <Button className={classNames(classes.navButton)}>LPDH-Civitas</Button>
            <Button className={classNames(classes.navButton)}>Comunicados</Button>
            <Button className={classNames(classes.navButton)}>Notícias</Button>
            <Button className={classNames(classes.navButton)}>Links</Button>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavigationBar);
