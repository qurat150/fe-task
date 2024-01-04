import { Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const UIButton = ({ circleBorder, variant = 'outlined', children, ml }) => {
  return (
    <Button
      variant={variant}
      sx={{
        padding: '15px',
        margin: '15px',
        marginLeft: ml ? ml : '',
        // border: '3px solid',
        borderRadius: circleBorder ? '50%' : null,
      }}
    >
      <Typography>{children}</Typography>
    </Button>
  );
};

export default UIButton;

UIButton.propTypes = {
  circleBorder: PropTypes.bool,
  children: PropTypes.string,
  variant: PropTypes.string,
  ml: PropTypes.number,
};
