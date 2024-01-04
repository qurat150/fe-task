import styled from '@emotion/styled';
import { AppBar, Typography, Button } from '@mui/material';

export const StyledAppBar = styled(AppBar)({
  position: 'static',
  backgroundColor: '#000000',
});

export const StyledNavLogoText = styled(Typography)(({ display }) => ({
  flexGrow: 1,
  fontFamily: 'monospace',
  fontWeight: 600,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
  display: display,
}));

export const StyledNavButton = styled(Button)({
  fontSize: '1rem',
  marginRight: '10px',
  color: 'white',
  letterSpacing: '1.1px',
  display: 'block',
  textTransform: 'inherit',
});
