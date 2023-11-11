import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import Blog from './Components/Blog/Blog.jsx';
import EroorPage from './Components/EroorPage/EroorPage.jsx';
import JobDetails from './Components/JobDetails/JobDetails.jsx';
import { HelmetProvider } from 'react-helmet-async';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/AppliedJobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: () => fetch('../jobs.json')

      },
      {
        path: '/ErrorPage',
        element: <EroorPage></EroorPage>
      },
      {
        path: '/Blog',
        element: <Blog></Blog>
      },
      {
        path: '/Job/:id',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>,
)
