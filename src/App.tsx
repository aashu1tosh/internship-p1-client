import AdminDashboard from 'Components/AdminDashboard/AdminDashboard'
import Home from 'Components/Home/Home'
import Signin from 'Components/Signin/Signin'
import './App.css'

import AdminTemplate from 'Components/AdminTemplate/AdminTemplate'
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      path: "/",
      element: <Home />,
    },
    {
      path: "/signin",
      element: <Signin />
    },
    {
      path: "/admin_dashboard",
      element: <AdminTemplate />,
      children: [
        {
          path: "/admin_dashboard",
          element: <AdminDashboard />
        }
      ]
    }
  ]);


  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
