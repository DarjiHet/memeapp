import React from 'react'
import {createBrowserRouter} from 'react-router-dom'
import {RouterProvider} from 'react-router-dom'
import Navbar from './Navbar'
import Register from './Register'
import Login from './Login'

const Router = () => {
  const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <Navbar/>,
    },
    {
        path: '/register',
        element: <Register />,
    },
    {
        path: '/login',
        element: <Login />,
    },
  ])

    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
  )
}

export default Router;