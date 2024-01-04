import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const UITextField = ({ label, ...otherProps }) => {
  return (
    <TextField
      id="filled-basic"
      label={label}
      {...otherProps}
      variant="filled"
      fullWidth
      InputLabelProps={{
        style: { color: '#000' },
      }}
      sx={{ backgroundColor: 'white', borderRadius: '10px', marginTop: '20px' }}
    />
  );
};

export default UITextField;

UITextField.propTypes = {
  label: PropTypes.string,
};
