import { AuthLayout, ErrorLayout, MainLayout } from 'layouts';
import { About, ContactUs, Home, Services } from 'pages';
import Projects from 'pages/projects';

export const routes = (auth) => [
  {
    path: '/',
    element: <MainLayout isLoggedIn={auth.isLoggedIn} />,
    children: [
      {
        index: true,
        element: (
          <>
            <Home />
            <About />
            <Services />
            <Projects />
            <ContactUs />
          </>
        ),
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
  },
];
