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
import ContactUs from './component/pages/contact us/ContactUs.jsx';
import Agency from './component/pages/agency/Agency.jsx';

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
      },
      {
        path: "/Contact",
        element: <ContactUs></ContactUs>
      },
      {
        path: "/Agency", 
        element: <Agency></Agency>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
