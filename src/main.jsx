import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx'
import RSVP from './pages/RSVP.jsx';
import Error from './pages/error.jsx';
import Homepage from './pages/homepage.jsx';
import Pictures from './pages/pictures.jsx';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/Homepage',
        element: <Homepage />,
      },
      {
        path: '/Pictures',
        element: <Pictures />,
      },
      {
        path: '/RSVP',
        element: <RSVP />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
