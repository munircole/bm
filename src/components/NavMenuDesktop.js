import { useLocation, Link as RouterLink } from 'react-router-dom';

import { MenuItem, useMediaQuery, Divider, Grid } from '@material-ui/core';
import { useMenuStyles } from '../styles/muiStyles';
import { useTheme } from '@material-ui/core/styles';
import PublicIcon from '@material-ui/icons/Public';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PeopleIcon from '@material-ui/icons/People';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import InfoIcon from '@material-ui/icons/Info';
import WebIcon from '@material-ui/icons/Web';


const DesktopNavMenu = () => {
  const { pathname } = useLocation();
  const classes = useMenuStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));

  if (isMobile) return null;

  return (
    <Grid item>
      <div className={classes.rootPanel}>
        <div className={classes.list}>
          <MenuItem
            selected={
              pathname === '/' ||
              (!pathname.startsWith('/tag') && !pathname.startsWith('/user'))
            }
            component={RouterLink}
            to="/"
          >
            <PublicIcon className={classes.menuIcon} />
            Home
          </MenuItem>
          <MenuItem
            selected={pathname.startsWith('/tag')}
            component={RouterLink}
            to="/tags"
          >
            <LocalOfferIcon className={classes.menuIcon} />
            Tags
          </MenuItem>
          <MenuItem
            selected={pathname.startsWith('/user')}
            component={RouterLink}
            to="/users"
          >
            <PeopleIcon className={classes.menuIcon} />
            Users
          </MenuItem>

          <MenuItem
            selected={pathname.startsWith('/library')}
            component={RouterLink}
            to="/library"
          >
            <LibraryBooksIcon className={classes.menuIcon} />
            BM Library
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
           <RouterLink to={{pathname:"https://bookishmate.blog"}} target="_blank" style={{textDecoration:"none", color:"black" }}>Blog</RouterLink>
          </MenuItem>

          <MenuItem
            selected={pathname.startsWith('/give-us-feedback')}
            component={RouterLink}
            to="/give-us-feedback"
          >
            <InfoIcon className={classes.menuIcon} />
            Feedback
          </MenuItem>




        </div>
        <Divider orientation="vertical" flexItem />
      </div>
    </Grid>
  );
};

export default DesktopNavMenu;
