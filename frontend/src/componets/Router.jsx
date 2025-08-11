// src/componets/Router.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Register from './Register';
import Login from './Login';
import Layout from './Layout'; // we’ll create this next
import Landing from './Landing';
import Images from './Images';
import Profile from './Profile';
import AdminDas from './AdminDas';
import ImageDetail from './ImageDetail';
import AdminImageList from './AdminImageList';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/images',
        element: <Images />,
      },
      {
        path: '/image/:id',
        element: <ImageDetail />,
      },
      {
        path: '/profile',
        element: <Profile />,
      },
      {
        path: '/admindas',
        element: <AdminDas />,
      },
      {
        path: '/admin/images',
        element: <AdminImageList />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={appRouter} />;
};

export default Router;
