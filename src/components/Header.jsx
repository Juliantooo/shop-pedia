import { Search2Icon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Stack } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { Icon, Button } from "@chakra-ui/react"
import { CgProfile } from "react-icons/cg"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { SiShopify } from "react-icons/si"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"
import { useSelector } from 'react-redux'
import { isAuthenticated, isAdmin } from '../libs/helpers/auth'

const Header = ({ handleToggleSidebar, isOpen, keywords, handleChange, handleKeydown, handleClickCart, handleClickBtnLogin, handleLogout }) => {
    const [isShowLogout, setIsShowLogout] = useState(false)
    const products = useSelector(state => state.cartItems.cartItems.length > 0
        ? state.cartItems.cartItems
        : JSON.parse(localStorage.getItem('cartItems')));
    return (
        <div className="w-full py-6 flex items-center flex-row justify-between px-3 md:px-12 space-x-3">
            <div className="block md:hidden">
                <Icon as={SiShopify} w="35px" h="35px" color="blue.400" />
            </div>
            <div className="w-52 md:w-80 lg:w-96">
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Search2Icon color="blue.400" />}
                    />
                    <Input borderRadius="full" onKeyDown={(e) => handleKeydown(e.key)} value={keywords} onChange={(e) => handleChange(e.target.value)} type="text" placeholder="Cari Barang" borderColor="blue.400" />
                </InputGroup>
            </div>
            <div className="space-x-8">
                {
                    isAuthenticated()
                        ? (
                            <Stack direction="row" className="space-x-2 md:space-x-5 relative">
                                {
                                    !isAdmin() &&
                                    <div className='relative flex flex-row items-center' onClick={handleClickCart}>
                                        {products && products.length > 0 && <div className='absolute -top-2 -right-2 font-semibold text-sm cursor-pointer bg-red-500 px-1.5 rounded-full text-white'>{products.length}</div>}
                                        <Icon as={AiOutlineShoppingCart} w="27px" h="27px" color="blue.400" className='cursor-pointer' />
                                    </div>
                                }
                                <Icon as={CgProfile} w="27px" h="27px" color="blue.400" className='cursor-pointer z-50' onClick={() => setIsShowLogout(!isShowLogout)} />
                                {
                                    isShowLogout &&
                                    <div className='p-2 bg-blue-100 rounded-lg absolute right-11 top-3 md:right-3'>
                                        <p className='px-2 py-1 rounded-md bg-blue-200 cursor-pointer' onClick={handleLogout}>Logout</p>
                                    </div>
                                }
                                <div className="block md:hidden lg:hidden xl:hidden">
                                    <Icon as={isOpen ? CgClose : GiHamburgerMenu} w="27px" h="27px" color="blue.400" onClick={handleToggleSidebar} />
                                </div>
                            </Stack>
                        )
                        : (
                            <Stack direction="row" className="space-x-3 md:space-x-5 items-center">
                                <Button colorScheme='blue' variant='outline' children="Login" onClick={handleClickBtnLogin} />
                                <div className="block md:hidden">
                                    <Icon as={isOpen ? CgClose : GiHamburgerMenu} w="27px" h="27px" color="blue.400" onClick={handleToggleSidebar} />
                                </div>
                            </Stack>

                        )
                }
            </div>
        </div>
    )
}

export default Header
