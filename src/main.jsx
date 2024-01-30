import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Router from './component/rout/Router.jsx';
import Home from './component/pages/home/Home.jsx';
import Services from './component/pages/services/Services.jsx';
import Property from './component/pages/property/Property.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Router></Router>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Services",
        element: <Services></Services>
      },
      {
        path: "/Property",
        element: <Property></Property>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
