import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledBackgroundImage = styled(Box)(({ url, width, height }) => ({
  backgroundImage: `url(${url})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: width ? width : '100%',
  height: height ? height : '600px',
  overflow: 'visible',
}));
