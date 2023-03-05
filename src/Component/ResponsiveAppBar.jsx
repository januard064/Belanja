import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

import { TextField } from '@mui/material';

// import reusable component
import IconButtonAppBar from '../ReusableComponent/IconButtonAppBar';
import DivFlexStart from '../ReusableComponent/DivFlexStart';

// impport icon
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';

import styled from '@emotion/styled';

import { Outlet } from 'react-router-dom';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const TabMenuMobile = styled(Typography)({
  fontFamily: 'FamiljenGrotesk-SemiBold',
  fontSize: 16,
  cursor: 'pointer',
  color: '#666666',
  ':hover': {
    color: '#0591AF'
  }

})


const TabMenu = styled(Typography)({
  fontFamily: 'FamiljenGrotesk-SemiBold',
  fontSize: 16,
  marginLeft: 24,
  cursor: 'pointer',
  color: '#666666',
  ':hover': {
    color: '#0591AF'
  }

})

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'white' }}>
        <Container maxWidth="xl" sx={{  }}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 2, display: { xs: 'flex', md: 'none' }, width: '90%' }}>
              <TextField sx={{ width: '95%' }}
                inputProps={{
                  style: {
                    height: 1,
                  },
                }}
              />
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
              <IconButtonAppBar
                sx={{ mr: -1 }}
              >
                <MenuIcon sx={{ fontSize: 24 }} />
              </IconButtonAppBar>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <MenuItem>
                  <TabMenuMobile>Categories</TabMenuMobile>
                </MenuItem>
                <MenuItem>
                  <TabMenuMobile>Transaction</TabMenuMobile>
                </MenuItem>
                <MenuItem>
                  <TabMenuMobile>Cart</TabMenuMobile>
                </MenuItem>
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>

              <TabMenu>Categories</TabMenu>

              <TabMenu>Transaction</TabMenu>

              <TextField sx={{ width: '75%', ml: 3 }}
                inputProps={{
                  style: {
                    height: 10,
                  },
                }}
              />

              <IconButtonAppBar sx={{ ml: 3 }}>
                <ShoppingCartIcon sx={{ fontSize: 24 }} />
              </IconButtonAppBar>

            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <IconButtonAppBar onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <PersonIcon sx={{ fontSize: 26, mr: 1 }} />
                <TabMenuMobile>Account</TabMenuMobile>
              </IconButtonAppBar>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
      <Outlet />
    </>
  );

}
export default ResponsiveAppBar;
