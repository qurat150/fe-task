import styled from '@emotion/styled';
import { AppBar, Typography } from '@mui/material';

export const StyledAppBar = styled(AppBar)({
  backgroundColor: '#000000',
});

export const StyledNavLogoText = styled(Typography)(() => ({
  flexGrow: 1,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'monospace',
  fontWeight: 600,
  letterSpacing: '.3rem',
  color: 'inherit',
  textDecoration: 'none',
}));
