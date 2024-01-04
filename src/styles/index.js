import { Box, Grid, Typography, styled } from '@mui/material';

export const FlexBox = styled(Box)(({ display }) => ({
  display: display ? display : 'flex',
}));

export const FlexBoxCentered = styled(FlexBox, {
  shouldForwardProp: (prop) => prop !== 'width' && prop !== 'height',
})(({ width, height }) => ({
  width: width || '100%',
  height: height || '100%',
  alignItems: 'center',
  justifyContent: 'center',
  '& > *': {
    margin: '15px',
  },
}));

export const StyledTypography = styled(Typography)(({ letterSpacing }) => ({
  letterSpacing: letterSpacing ? letterSpacing : null,
}));

export const CenteredGrid = styled(Grid)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
});

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
