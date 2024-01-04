import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import { useSelector } from 'react-redux';

import { routes } from 'routes';

function App() {
  // const auth = useSelector((state) => state.auth);
  const router = createBrowserRouter(routes({ isLoggedin: false }));

  return <RouterProvider router={router} />;
}

export default App;
