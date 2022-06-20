import { useState } from 'react';
import { useLocation, Link as RouterLink } from 'react-router-dom';

import {
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from '@material-ui/core';
import { useMenuStyles } from '../styles/muiStyles';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import PublicIcon from '@material-ui/icons/Public';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PeopleIcon from '@material-ui/icons/People';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import InfoIcon from '@material-ui/icons/Info';
import WebIcon from '@material-ui/icons/Web';


const MobileNavMenu = () => {
  const { pathname } = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useMenuStyles();

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton color="primary" onClick={handleOpenMenu}>
        {!anchorEl ? <MenuIcon /> : <CloseIcon className={classes.closeIcon} />}
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
        marginThreshold={0}
        elevation={1}
      >
        <MenuItem
          selected={
            pathname === '/' ||
            (!pathname.startsWith('/tag') && !pathname.startsWith('/user'))
          }
          dense
          component={RouterLink}
          to="/"
          onClick={handleCloseMenu}
        >
          <PublicIcon className={classes.menuIcon} />
          Bokishmate
        </MenuItem>
        <MenuItem
          selected={pathname.startsWith('/tag')}
          dense
          component={RouterLink}
          to="/tags"
          onClick={handleCloseMenu}
        >
          <LocalOfferIcon className={classes.menuIcon} />
          Tags
        </MenuItem>
        <MenuItem
          selected={pathname.startsWith('/user')}
          dense
          component={RouterLink}
          to="/users"
          onClick={handleCloseMenu}
        >
          <PeopleIcon className={classes.menuIcon} />
          Users
        </MenuItem>
        <MenuItem
            selected={pathname.startsWith('/tag')}
            component={RouterLink}
            to="/tags"
          >
            <LibraryBooksIcon className={classes.menuIcon} />
            BM Libbrary
          </MenuItem>

          <MenuItem
            selected={pathname.startsWith('/about')}
            component={RouterLink}
            to="/about"
          >
            <InfoIcon className={classes.menuIcon} />
            About
          </MenuItem>

          <MenuItem>
            <WebIcon className={classes.menuIcon} />
           <RouterLink to={{pathname:"https://bookishmate.blog"}} target="_blank">Blog</RouterLink>
          </MenuItem>


        <Divider />
      </Menu>
    </div>
  );
};

export default MobileNavMenu;
