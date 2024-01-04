import styled from '@emotion/styled';
import { Box } from '@mui/material';
import { Images } from 'assets';

export const StyledMain = styled(Box)({
  backgroundImage: `url(${Images.homeBg.src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '600px',
});
