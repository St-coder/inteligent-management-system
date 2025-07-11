import React from 'react'
import { createBrowserRouter }  from 'react-router-dom'

const Home = React.lazy(() => import('../pages/home'))
const Login = React.lazy(() => import('../pages/login'))
const NotFound = React.lazy(() => import('../pages/404'))
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/home',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '*',
        element: <NotFound />
    },
])
export default router;
