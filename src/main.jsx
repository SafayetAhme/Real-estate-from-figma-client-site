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
import Agent from './component/pages/agent/Agent.jsx';
import Blog from './component/pages/blog/Blog.jsx';
import Pricing from './component/pages/pricing/Pricing.jsx';
import FAQ from './component/pages/faq/FAQ.jsx';
import Projects from './component/pages/projects/Projects.jsx';
import SignIn from './component/pages/sign-in/SignIn.jsx';
import SignUp from './component/pages/sign-up/SignUp.jsx';
import Dashboard from './component/pages/admin-dashboard/Dashboard.jsx';
import DashboardHome from './component/pages/admin-dashboard/DashboardHome.jsx';
import Message from './component/pages/admin-dashboard/Message.jsx';
import Profile from './component/pages/admin-dashboard/Profile.jsx';
import AccountSetting from './component/pages/admin-dashboard/AccountSetting.jsx';
import Membership from './component/pages/admin-dashboard/Membership.jsx';
import MyProperties from './component/pages/admin-dashboard/MyProperties.jsx';
import AddNewProperty from './component/pages/admin-dashboard/AddNewProperty.jsx';
import Favourites from './component/pages/admin-dashboard/Favourites.jsx';
import SavedSearch from './component/pages/admin-dashboard/SavedSearch.jsx';
import Reviews from './component/pages/admin-dashboard/Reviews.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MenuDetails from './component/pages/menu details/MenuDetails.jsx';
import AgentDetails from './component/pages/agent-details/AgentDetails.jsx';
import BlogDetails from './component/pages/blog details/BlogDetails.jsx';

const queryClient = new QueryClient();

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
      },
      {
        path: "/Agent",
        element: <Agent></Agent>
      },
      {
        path: "/Blog",
        element: <Blog></Blog>
      },
      {
        path: "/Pricing",
        element: <Pricing></Pricing>
      },
      {
        path: "/FAQ",
        element: <FAQ></FAQ>
      },
      {
        path: "/Projects",
        element: <Projects></Projects>
      },
      {
        path: "/menudetails/:id",
        element: <MenuDetails></MenuDetails>,
        loader: () => fetch('http://localhost:5000/menus')
      },
      {
        path: "/agentdetails/:id",
        element: <AgentDetails></AgentDetails>,
        loader: () => fetch('http://localhost:5000/agents')
      },
      {
        path: "/blogdetails/:id",
        element: <BlogDetails></BlogDetails>,
        loader: () => fetch('http://localhost:5000/blogs')
      }
    ]
  },

  // sign in and sign up page
  {
    path: "/signin",
    element: <SignIn></SignIn>
  },
  {
    path: "/signup",
    element: <SignUp></SignUp>
  },

  // admin dahsboard page
  {
    path: "/adminDashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "dahsboardhome",
        element: <DashboardHome></DashboardHome>
      },
      {
        path: "Message",
        element: <Message></Message>
      },
      {
        path: "profile",
        element: <Profile></Profile>
      },
      {
        path: "AccountSetting",
        element: <AccountSetting></AccountSetting>
      },
      {
        path: "membership",
        element: <Membership></Membership>
      },
      {
        path: "myproperties",
        element: <MyProperties></MyProperties>
      },
      {
        path: "addnewProperty",
        element: <AddNewProperty></AddNewProperty>
      },
      {
        path: "favourites",
        element: <Favourites></Favourites>
      },
      {
        path: "savedSearch",
        element: <SavedSearch></SavedSearch>
      },
      {
        path: "reviews",
        element: <Reviews></Reviews>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
