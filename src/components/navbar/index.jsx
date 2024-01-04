import { useState } from 'react';
import {
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';

import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import { FiSearch } from 'react-icons/fi';

import { StyledAppBar, StyledNavButton, StyledNavLogoText } from './ui';
import { FlexBox } from 'styles';

const pages = [
  'Home',
  'About Us',
  'Our Services',
  'Our Projects',
  'Blog',
  'Contact Us',
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <StyledAppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <StyledNavLogoText
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
            }}
            variant="h6"
          >
            LOGO
          </StyledNavLogoText>

          <FlexBox display={{ xs: 'none', md: 'flex' }} alignItems="center">
            {pages.map((page) => (
              <StyledNavButton key={page} onClick={handleCloseNavMenu}>
                {page}
              </StyledNavButton>
            ))}
            <FiSearch style={{ color: '#7E33FF' }} />
          </FlexBox>

          {/* Responsive */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography color="black" textAlign="center">
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <StyledNavLogoText
            sx={{
              display: {
                xs: 'flex',
                md: 'none',
              },
            }}
            variant="h6"
          >
            LOGO
          </StyledNavLogoText>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
export default Navbar;
