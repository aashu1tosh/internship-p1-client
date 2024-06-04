import AdminDashboard from 'Components/AdminDashboard/AdminDashboard'
import Home from 'Components/Home/Home'
import Signin from 'Components/Signin/Signin'
import './App.css'

import AdminDetails from 'Components/AdminDetails/AdminDetails'
import AdminHome from 'Components/AdminHome/AdminHome'
import AdminList from 'Components/AdminList/AdminList'
import ChangePassword from 'Components/ChangePassword/ChangePassword'
import CreateAdmin from 'Components/CreateAdmin/CreateAdmin'
import UpdateAdmin from 'Components/UpdateAdmin/UpdateAdmin'
import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import ProtectedRoute from './ProtectedRoute'



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
      path: '/*',
      element: <>Page Not Found</>
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
          path: 'create-admin',
          element: <CreateAdmin />
        },
        {
          path: "dashboard",
          element: <AdminDashboard />,
        },
        {
          path: 'change-password',
          element: <ChangePassword />
        },
        {
          path: 'admin-list',
          element: <AdminList />
        },
        {
          path: ':id',
          element: <AdminDetails />
        },
        {
          path: 'update-admin/:id',
          element: <UpdateAdmin />
        }
      ]
    }
  ]);


  return (
    <React.StrictMode>
      <div id="toast-container-main"></div>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App
