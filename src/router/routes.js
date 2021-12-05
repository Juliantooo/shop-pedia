import React  from "react"  
import routesName from "./routesName"


const routes=[
    {
        path:'/login',
        name:routesName.LOGIN,
        component: React.lazy(()=> import('../pages/Login'))
    },
    {
        path:'/mens-cloth',
        name:routesName.MENS_CLOTH,
        component: React.lazy(()=> import('../pages/MensCloth'))
    },
    {
        path:'/jewelery',
        name:routesName.JEWELERY,
        component: React.lazy(()=> import('../pages/Jewelery'))
    },
    {
        path:'/electronics',
        name:routesName.ELECTRONICS,
        component: React.lazy(()=> import('../pages/Eectronics'))
    },
    {
        path:'/womens-cloth',
        name:routesName.WOMENS_CLOTH,
        component: React.lazy(()=> import('../pages/WomensCloth'))
    },
    {
        path:'/searched',
        name:routesName.SEARCHED,
        component: React.lazy(()=> import('../pages/Searched'))
    },
    {
        path:'/product/:id',
        name:routesName.DETAIL_PRODUCTS,
        component: React.lazy(()=> import('../pages/DetailProduct'))
    },
    {
        path:'/',
        name:routesName.HOME,
        component: React.lazy(()=> import('../pages/Home')),
        exact : true
    }
]

export default routes