import React from 'react'
import { createBrowserRouter }  from 'react-router-dom'
import RequireAuth from '../utils/RequireAuth'

const Home = React.lazy(() => import('../pages/home'))
const Login = React.lazy(() => import('../pages/login'))
const NotFound = React.lazy(() => import('../pages/404'))
const router = createBrowserRouter([
    {
        path: '/',
        element: <RequireAuth allowed={true} redirectUrl="/login"><Home /></RequireAuth>
    },
    {
        path: '/home',
        element: <RequireAuth allowed={true} redirectUrl="/login"><Home /></RequireAuth>
    },
    {
        path: '/login',
        element: <RequireAuth allowed={false} redirectUrl="/home"><Login /></RequireAuth>
    },
    {
        path: '*',
        element: <NotFound />
    },
])
export default router;
