import { Box, Typography, styled } from '@mui/material';

export const FlexBox = styled(Box)({
  display: 'flex',
});

export const FlexBoxCentered = styled(FlexBox, {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'height',
})(({ width, height }) => ({
  width: width || '100%',
  height: height || '100%',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const StyledTypography = styled(Typography)(
  ({ theme, letterSpacing }) => ({
    letterSpacing: letterSpacing ? letterSpacing : null,
  })
);
