import { Search2Icon } from '@chakra-ui/icons'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { Stack } from '@chakra-ui/layout'
import React from 'react'
import { Icon } from "@chakra-ui/react"
import { CgProfile } from "react-icons/cg"
import { AiOutlineShoppingCart } from "react-icons/ai"
import { SiShopify } from "react-icons/si"
import { GiHamburgerMenu } from "react-icons/gi"
import { CgClose } from "react-icons/cg"

const Header = ({handleToggleSidebar, isOpen,keywords,handleChange,handleKeydown}) => {
    return (
        <div className="w-full py-6 flex items-center flex-row justify-between px-3 md:px-12 space-x-2">
            <div className="block md:hidden">
            <Icon as={SiShopify} w="35px" h="35px" color="blue.400" />
            </div>
            <div className="w-52 md:w-80 lg:w-96">
                <InputGroup>
                    <InputLeftElement
                        pointerEvents="none"
                        children={<Search2Icon color="blue.400" />}
                    />
                    <Input borderRadius="full" onKeyDown={(e)=>handleKeydown(e.key)} value={keywords} onChange={(e)=>handleChange(e.target.value)} type="text" placeholder="Cari Barang" borderColor="blue.400" />
                </InputGroup>
            </div>
            <div className="space-x-8">
                <Stack direction="row" className="space-x-2 md:space-x-5">
                    <Icon as={AiOutlineShoppingCart} w="24px" h="24px" color="blue.400"/>
                    <Icon as={CgProfile} w="24px" h="24px" color="blue.400"/>
                    <div className="block md:hidden">
                        <Icon as={isOpen ? CgClose : GiHamburgerMenu} w="24px" h="24px" color="blue.400" onClick={handleToggleSidebar}/>
                    </div>
                </Stack>
            </div>
        </div>
    )
}

export default Header
