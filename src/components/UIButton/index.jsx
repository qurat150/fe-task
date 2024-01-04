import { Button, Typography } from '@mui/material';
import React from 'react';

const UIButton = () => {
  return (
    <Button variant="outlined" sx={{ padding: '15px' }}>
      <Typography>Our Services</Typography>
    </Button>
  );
};

export default UIButton;
