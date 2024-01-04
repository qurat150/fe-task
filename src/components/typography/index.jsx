import PropTypes from 'prop-types';

import { StyledTypography } from 'styles';

const CustomTypography = ({ variant = 'body1', children, ...otherProps }) => {
  return (
    <StyledTypography variant={variant} {...otherProps}>
      {children}
    </StyledTypography>
  );
};

export default CustomTypography;

CustomTypography.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.any,
};
