import AdminDashboard from 'Components/AdminDashboard/AdminDashboard'
import Home from 'Components/Home/Home'
import Signin from 'Components/Signin/Signin'
import './App.css'

import AdminList from 'Components/AdminList/AdminList'
import ChangePassword from 'Components/ChangePassword/ChangePassword'
import CreateAdmin from 'Components/CreateAdmin/CreateAdmin'
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
          element: <AdminDashboard />,
          index: true
        },
        {
          path: 'create-admin',
          element: <CreateAdmin />
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
          path: '*',
          element: <><div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', fontSize: '34px' }}>Page Not Found</div></>
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
