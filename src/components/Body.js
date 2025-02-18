import React from 'react';
import Login from './Login';
import Browse from './Browse';
import ManageProfile from './ManageProfile';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Body = () => {
  const appRouter = createBrowserRouter(
    [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "/browse",
        element: <Browse />
      },
      {
        path: "/account/profiles",
        element: <ManageProfile />
      }
    ]
  )
  return (
    <div>
      <RouterProvider router={ appRouter } />

    </div>
  )
}

export default Body