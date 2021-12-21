import { Button, Input, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { isAdmin, isAuthenticated } from '../libs/helpers/auth';
import { UPDATE_ITEM_STOCK } from '../store/slicers/products';

const EditStock = () => {
    const dispatch = useDispatch()
    const toast = useToast()
    const allProducts = useSelector(state => state.products.products.length > 0
        ? state.products.products
        : JSON.parse(localStorage.getItem('allProducts')));

    const [count, setCount] = useState(0)

    const handleUpdateStock = (id) => {
        dispatch(UPDATE_ITEM_STOCK({ id: id, stock: count }));
        toast({
            title: 'Update stock item success',
            status: 'success',
            duration: 6000,
            position: 'top',
            isClosable: true,
        })
    }

    useEffect(() => {
        if (!(isAuthenticated() && isAdmin())) window.location.href = "/login";
    }, [])

    return (
        <div className="w-full p-2 md:p-12 space-y-8 md:space-y-16">
            <div className='flex flex-col items-center justify-between'>
                <div className='grid grid-cols-4 md:grid-cols-5 gap-2 items-center w-full border p-5 border-gray-500 overflow-x-auto'>
                    <div className='hidden md:block'>
                        <p>Image</p>
                    </div>
                    <div className='text-left'>
                        <p>Product Name</p>
                    </div>
                    <div className='mx-auto'>
                        <p>Price</p>
                    </div>
                    <div className='mx-auto'>
                        <p>Stock</p>
                    </div>
                    <div className='mx-auto'>
                        <p>Action</p>
                    </div>
                </div>
                {
                    allProducts && allProducts.length > 0 && allProducts.map((product, idx) => {
                        return (
                            <div key={product.id} className={`${idx % 2 === 0 && 'bg-gray-200'} grid grid-cols-4 md:grid-cols-5 gap-3 items-center w-full border p-5 border-gray-500 overflow-x-auto`} >
                                <div className='hidden md:block'>
                                    <img src={product.image} alt={product.title} className='h-20 object-contain mx-auto' />
                                </div>
                                <div className='text-left'>
                                    <p>{product.title}</p>
                                </div>
                                <div className='mx-auto'>
                                    <p>{product.price}</p>
                                </div>
                                <div className='mx-auto'>
                                    <Input defaultValue={product.stock} type='number' focusBorderColor='blue.500' borderColor='blue.400' onChange={(e) => setCount(parseInt(e.target.value))} />
                                </div>
                                <div className='mx-auto'>
                                    <Button colorScheme='blue' width="full" variant='solid' children="Update Stock" onClick={() => handleUpdateStock(product.id)} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default EditStock
