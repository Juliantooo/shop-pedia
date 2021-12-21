import { Icon } from '@chakra-ui/icons'
import { Image } from '@chakra-ui/image'
import { Box } from '@chakra-ui/layout'
import { Input, Stack } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineMinus, HiPlus, HiOutlineTrash } from "react-icons/hi"

const CartProduct = ({ id, image, title, price, count, handleClickAdd, handleClickSubtract, handleRemoveItem, stock }) => {
    return (
        <Box p="4" className="shadow-lg text-gray-600">
            <div className='flex flex-row mb-3'>
                <Image src={image} alt="product" className="object-contain h-16 md:h-40 bg-white bg-opacity-40" />

                <Box px="3" className="w-full flex flex-col justify-between">
                    <div className='space-y-2'>
                        <Box
                            mt="1"
                            fontWeight="semibold"
                            as="h4"
                            lineHeight="tight"
                        >
                            {title}
                        </Box>
                        <Box className="font-semibold">
                            $ {price}
                        </Box>
                    </div>

                </Box>
            </div>

            <div className="space-x-5 flex flex-row justify-between items-center relative">
                <Input placeholder="Product note..." width="sm" />
                <Icon as={HiOutlineTrash} w="27px" h="27px" onClick={() => handleRemoveItem(id)} color="gray.400" className="cursor-pointer border border-gray-400 rounded-full p-1" />
                {
                    stock - count < 5 &&
                    <p className='absolute -top-7 right-5 text-sm text-red-500'>Stock sisa {stock - count}</p>
                }
                <Stack direction='row' spacing={4} align='center' className='space-x-5'>
                    <Icon as={HiOutlineMinus} w="27px" h="27px" onClick={() => handleClickSubtract(id)} color="blue.400" className="cursor-pointer border border-blue-400 rounded-full p-1" />
                    <p className="text-xl font-bold">{count}</p>
                    <Icon as={HiPlus} w="27px" h="27px" color={stock - count === 0 ? 'gray.300' : 'blue.400'} onClick={() => stock - count !== 0 && handleClickAdd(id)} className={`cursor-pointer border  rounded-full p-1 ${stock - count === 0 ? 'border-gray-300' : 'border-blue-400'}`} />
                </Stack>
            </div>
        </Box>
    )
}

export default CartProduct
