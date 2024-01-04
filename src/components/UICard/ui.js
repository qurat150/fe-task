import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const BorderCard = styled(Card)(({ backgroundColor, theme }) => ({
  border: '1px solid #F4F4F4',
  borderRadius: '8px',
  backgroundColor: backgroundColor,
  margin: '10px',
  minHeight: '200px',
  minWidth: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  zIndex: 1,
  transition: '.3s',
  '&:hover': {
    border: `1px solid ${theme.palette.primary.main}`,
  },
}));
