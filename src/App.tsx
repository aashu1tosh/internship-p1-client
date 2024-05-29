import AdminDashboard from 'Components/AdminDashboard/AdminDashboard'
import Home from 'Components/Home/Home'
import Signin from 'Components/Signin/Signin'
import './App.css'

import AdminHome from 'Components/AdminHome/AdminHome'
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ProtectedRoute from './ProtectedRoute'
import ChangePassword from 'Components/ChangePassword/ChangePassword'

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
      path: "/admin",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <AdminHome />,
          index: true
        },
        {
          path: "dashboard",
          element: <AdminDashboard />,
        },
        {
          path: 'change-password',
          element: <ChangePassword />
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
