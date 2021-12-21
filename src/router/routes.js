import React from "react"
import routesName from "./routesName"


const routes = [
    {
        path: '/login',
        name: routesName.LOGIN,
        protectedRoute: false,
        component: React.lazy(() => import('../pages/Login'))
    },
    {
        path: '/mens-cloth',
        name: routesName.MENS_CLOTH,
        useLayout: true,
        component: React.lazy(() => import('../pages/MensCloth'))
    },
    {
        path: '/jewelery',
        name: routesName.JEWELERY,
        useLayout: true,
        component: React.lazy(() => import('../pages/Jewelery'))
    },
    {
        path: '/electronics',
        name: routesName.ELECTRONICS,
        useLayout: true,
        component: React.lazy(() => import('../pages/Eectronics'))
    },
    {
        path: '/womens-cloth',
        name: routesName.WOMENS_CLOTH,
        useLayout: true,
        component: React.lazy(() => import('../pages/WomensCloth'))
    },
    {
        path: '/searched',
        name: routesName.SEARCHED,
        useLayout: true,
        component: React.lazy(() => import('../pages/Searched'))
    },
    {
        path: '/stock',
        useLayout: true,
        name: routesName.UPDATE_STOCK,
        component: React.lazy(() => import('../pages/EditStock'))
    },
    {
        path: '/report',
        useLayout: true,
        name: routesName.REPORT,
        component: React.lazy(() => import('../pages/Report'))
    },
    {
        path: '/cart',
        name: routesName.CART,
        useLayout: true,
        component: React.lazy(() => import('../pages/Cart'))
    },
    {
        path: '/:id',
        name: routesName.DETAIL_PRODUCTS,
        useLayout: true,
        component: React.lazy(() => import('../pages/DetailProduct'))
    },
    {
        path: '/',
        name: routesName.HOME,
        useLayout: true,
        component: React.lazy(() => import('../pages/Home')),
        exact: true
    },
]

export default routes