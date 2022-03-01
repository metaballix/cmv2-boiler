import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { emphasize, fade, darken, lighten } from '@material-ui/core/styles/colorManipulator';

import clsx from 'clsx';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import LayersIcon from '@material-ui/icons/Layers';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    minHeight: 70
  },
  brand: {
    lineHeight: 1,
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)'
  },
  link: {
    marginRight: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  linkRight: {
    marginRight: theme.spacing(5),
    marginLeft: 'auto',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  primaryAction: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  menuButton: {
    marginLeft: 'auto',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  iconWrapper: {
    minWidth: 40,
  },
  icon: {
    color: theme.palette.text.hint
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 300,
  }
}
));

export default function Component(props) {
  const classes = useStyles();

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open });
  };

  return (
<AppBar position="static" color="inherit">
  <Toolbar className={classes.toolbar}>
    <Link href="#" color="textPrimary" variant="body2" className={classes.link}>
      Section One
    </Link>
    <Link href="#" color="textPrimary" variant="body2" className={classes.link}>
      Section Two
    </Link>
    <Link href="#" color="textPrimary" variant="body2" className={classes.link}>
      Section Three
    </Link>
    <Link href="#" color="primary" underline="none" variant="h5" className={classes.brand}>
      <img src="https://static.shuffle.dev/uploads/files/b5/b5d7e96f6667e29135d9712c03e8b7c9ff7aaffb/android-chrome-512x512.png" alt="" width="110" />
    </Link>
    <Link href="#" color="textPrimary" variant="body2" className={classes.linkRight}>
      Section Four
    </Link>
    <Button variant="contained" color="secondary" className={classes.primaryAction}>Action</Button>
    <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton} onClick={toggleDrawer(true)}>
      <MenuIcon />
    </IconButton>
  </Toolbar>
  <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
    <div className={classes.drawerContainer}>
      <Box mb={1} ml={2} pb={2} border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor="background.emphasis">
        <Link href="#" color="primary" underline="none" variant="h5" className={classes.linkBrand}>
          <img src="https://static.shuffle.dev/uploads/files/b5/b5d7e96f6667e29135d9712c03e8b7c9ff7aaffb/android-chrome-512x512.png" alt="" width="110" />
        </Link>
      </Box>
      <List>
        <ListItem button key="Section One">
          <ListItemIcon className={classes.iconWrapper}>
            <LayersIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Section One" />
        </ListItem>
        <ListItem button key="Section Two">
          <ListItemIcon className={classes.iconWrapper}>
            <FilterHdrIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Section Two" />
        </ListItem>
        <ListItem button key="Section Three">
          <ListItemIcon className={classes.iconWrapper}>
            <DirectionsBusIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Section Three" />
        </ListItem>
        <ListItem button key="Section Four">
          <ListItemIcon className={classes.iconWrapper}>
            <NotificationImportantIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Section Four" />
        </ListItem>
      </List>
      <Box mt={1} ml={2} pt={3} border={1} borderBottom={0} borderLeft={0} borderRight={0} borderColor="background.emphasis">
        <Button variant="contained" color="secondary" fullWidth>Action</Button>
      </Box>
    </div>
  </Drawer>
</AppBar>
  );
}