import { Button, Input, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { isAdmin, isAuthenticated } from '../libs/helpers/auth';
import { UPDATE_ITEM_STOCK } from '../store/slicers/products';

const Report = () => {
    const dispatch = useDispatch()
    const [orders, setOrders] = useState([])
    const [totalEarning, setTotalEarning] = useState(0)
    const allOrders = useSelector(state => state.orderItems.orderItems.length > 0
        ? state.orderItems.orderItems
        : JSON.parse(localStorage.getItem('orderItems')));



    useEffect(() => {
        if (!(isAuthenticated() && isAdmin())) window.location.href = "/login";
        const products = allOrders && allOrders.reduce((result, orders) => {
            const item = orders.filter((order) => {
                const sameItem = result.find((item) => item.id === order.id)
                if (sameItem) {
                    sameItem.count += order.count
                    return null
                }
                return order

            })
            return [...result, ...item]
        }, [])
        const earning = products.reduce((result, product) => result + product.price * product.count, 0);
        setOrders(products);
        setTotalEarning(earning)
    }, [])

    return (
        <div className="w-full p-2 md:p-12 space-y-8 md:space-y-16">
            <div className='flex flex-col items-center justify-between'>
                <div className='grid grid-cols-4 gap-2 items-center w-full border p-5 border-gray-500'>
                    <div className='text-center'>
                        <p>Image</p>
                    </div>
                    <div className='text-left'>
                        <p>Product Name</p>
                    </div>
                    <div className='text-right'>
                        <p>Price</p>
                    </div>
                    <div className='text-right'>
                        <p>Sold</p>
                    </div>
                </div>
                {
                    orders && orders.length > 0 && orders.map((product, idx) => {
                        return (
                            <div key={product.id} className={`${idx % 2 === 0 && 'bg-gray-200'} grid grid-cols-4 gap-2 items-center w-full border p-5 border-gray-500`} >
                                <div>
                                    <img src={product.image} alt={product.title} className='h-20 object-contain mx-auto' />
                                </div>
                                <div className='text-left'>
                                    <p>{product.title}</p>
                                </div>
                                <div className='text-right'>
                                    <p>{product.price}</p>
                                </div>
                                <div className='text-right'>
                                    <p>{product.count} items</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='flex flex-row items-center justify-between p-5 border border-gray-500' style={{ margin: 0 }}>
                <p className='font-bold'>Total earning</p>
                <p>${totalEarning}</p>
            </div>
        </div >
    )
}

export default Report
