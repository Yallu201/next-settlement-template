import { RouteObject, useRoutes } from 'react-router-dom';
import Home from '@/pages';

const Router = () => {
  const commonRoutes: RouteObject[] = [
    {
      path: '/',
      element: <Home />,
    },
  ];

  return useRoutes([...commonRoutes]);
};

export default Router;
