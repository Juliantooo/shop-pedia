import useProducts from '../hooks/products';
import { Image, Box, Button, Icon, useToast } from '@chakra-ui/react'
import { Stack } from '@chakra-ui/layout'
import { StarIcon } from '@chakra-ui/icons'
import { HiOutlineMinus, HiPlus } from "react-icons/hi"
import { AiOutlineShoppingCart } from "react-icons/ai"
import OtherProducts from '../components/OtherPorducts';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { ADD_CART_ITEMS, ADD_COUNT_ITEM } from '../store/slicers/cart';
import { isAuthenticated } from '../libs/helpers/auth';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { UPDATE_ITEM_STOCK } from '../store/slicers/products';


const DetailProduct = () => {
    const dispatch = useDispatch()
    const toast = useToast()
    const params = useParams()
    const allProducts = useSelector(state => state.products.products.length > 0
        ? state.products.products
        : JSON.parse(localStorage.getItem('allProducts')));
    const cartProducts = useSelector(state => state.cartItems.cartItems.length > 0
        ? state.cartItems.cartItems
        : JSON.parse(localStorage.getItem('cartItems')));
    const [product, setProduct] = useState(null)

    const [count, setCount] = useState(0);

    const handleSubtract = () => {
        if (count >= 1) {
            setCount(count - 1);
        }
    }

    const handleAdd = () => {
        setCount(count + 1);
    }

    const handleAddToCart = () => {
        if (isAuthenticated()) {
            const selectedItem = { ...product, count };
            const sameItemInCart = cartProducts && cartProducts.find((item) => item.id === selectedItem.id);
            if (sameItemInCart) {
                dispatch(ADD_COUNT_ITEM({ id: selectedItem.id, count }))
            } else {
                dispatch(ADD_CART_ITEMS(selectedItem));
            }
            dispatch(UPDATE_ITEM_STOCK({ id: selectedItem.id, stock: product.stock - selectedItem.count }));
            setCount(0);
            toast({
                title: 'Success add this product.',
                status: 'success',
                duration: 6000,
                position: 'top',
                isClosable: true,
            })
            return;
        }
        return window.location.href = "/login"
    }

    useEffect(() => {
        const detailProduct = allProducts.find((item) => item.id === parseInt(params.id));
        setProduct(detailProduct)
    }, [count, params.id])

    return (
        <div className="w-full p-2 md:p-8 space-y-8 md:space-y-16 max-w-full">
            <h1 className="text-xl font-semibold text-gray-600">Men's Cloth Products</h1>
            {product &&
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-5 md:space-y-0 md:space-x-10 justify-evenly">
                    <Box maxW='xs'>
                        <Image src={product.image} alt="product" className="object-containw-full bg-white bg-opacity-40" />
                    </Box>
                    <Box maxW='sm'>
                        <h1 className="text-xl font-semibold">{product.title}</h1>
                        <Box display="flex" alignItems="center">
                            {product.rating && Array(5)
                                .fill("")
                                .map((_, i) => (
                                    <StarIcon
                                        key={i}
                                        color={i < product.rating.rate ? "teal.500" : "gray.300"}
                                    />
                                ))}
                            <Box as="span" ml="2" color="gray.600" fontSize="sm">
                                from {product.rating && product.rating.count} reviews
                            </Box>
                        </Box>
                        <div className='flex flex-row items-center justify-between'>
                            <h1 className="font-bold text-3xl my-5">$ {product.price}</h1>
                            <h1 className={`font-bold text-3xl my-5 ${product.stock - count < 5 && 'text-red-500'}`}>Stock : {product.stock - count}</h1>
                        </div>
                        <div className="w-full border-b border-gray-400" />
                        <p className="my-3">{product.description}</p>
                        <div className="w-full border-b border-gray-400" />
                        <Stack direction='row' mt='5' spacing={4} align='center' className="justify-between" w='full'>
                            <Button isDisabled={count === 0} colorScheme='blue' variant='outline' onClick={handleSubtract}>
                                <HiOutlineMinus />
                            </Button>
                            <p className="text-xl font-bold">{count}</p>
                            <Button isDisabled={product.stock - count === 0} colorScheme='blue' variant='outline' onClick={handleAdd}>
                                <HiPlus />
                            </Button>
                        </Stack>
                        <Button colorScheme='blue' variant='solid' mt="5" w='full' disabled={count === 0} onClick={handleAddToCart}>
                            <Icon as={AiOutlineShoppingCart} w="20px" h="20px" mx='5' />
                            Add to Cart
                        </Button>
                    </Box>
                </div>
            }
            <OtherProducts />
        </div>
    )
}

export default DetailProduct
