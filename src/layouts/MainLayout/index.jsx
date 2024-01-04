import React from 'react';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';

const MainLayout = ({ isLoggedIn }) => {
  // if (!isLoggedIn) return <Navigate to="/login" />;

  return <Outlet />;
};

export default MainLayout;

MainLayout.propTypes = {
  isLoggedIn: PropTypes.bool,
};
