import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import {Auth0Provider } from '@auth0/auth0-react';

import Root from './routes/root';
import ErrorPage from './error-page';
import Login from './routes/login';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path:"login",
    element: <Login />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-a7s2lo0c2uq867xu.us.auth0.com"
    clientId="fIf6raLwEXyD03F0sh7TOdYoaVDyT5w4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>,
)