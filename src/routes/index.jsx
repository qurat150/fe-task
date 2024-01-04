import AuthLayout from 'layouts/AuthLayout';
import MainLayout from 'layouts/MainLayout';
import ErrorLayout from 'layouts/ErrorLayout';
import { Home } from 'pages';

export const routes = (auth) => [
  {
    path: '/',
    element: <MainLayout isLoggedIn={auth.isLoggedIn} />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: '/',
    element: <AuthLayout isLoggedIn={auth.isLoggedIn} />,
    children: [],
  },
  {
    path: '*',
    element: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <h1>404 not found</h1>,
      },
    ],
  },
];
