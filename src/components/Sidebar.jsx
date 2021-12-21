import { Stack, Box } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import { Icon } from "@chakra-ui/react"
import { SiShopify } from "react-icons/si"
import { MdDevicesOther } from "react-icons/md"
import { BiSpreadsheet } from "react-icons/bi"
import { AiOutlineStock } from "react-icons/ai"
import { GiGemNecklace, GiTravelDress, GiClothes } from "react-icons/gi"
import routesName from '../router/routesName'
import { useHistory } from "react-router-dom";
import { isAdmin } from '../libs/helpers/auth'



const userMenus = [
    {
        name: "Electronics",
        icon: MdDevicesOther,
        route: routesName.ELECTRONICS
    },
    {
        name: "Jewelery",
        icon: GiGemNecklace,
        route: routesName.JEWELERY
    },
    {
        name: "Men's clothing",
        icon: GiClothes,
        route: routesName.MENS_CLOTH
    },
    {
        name: "Women's clothing",
        icon: GiTravelDress,
        route: routesName.WOMENS_CLOTH
    }
]

const Sidebar = ({ isOpen }) => {
    const history = useHistory();
    const [menus, setMenus] = useState([])

    useEffect(() => {
        if (isAdmin()) {
            const adminMenu = [
                {
                    name: "Update stock",
                    icon: AiOutlineStock,
                    route: routesName.UPDATE_STOCK
                },
                {
                    name: "Report",
                    icon: BiSpreadsheet,
                    route: routesName.REPORT
                }
            ]
            return setMenus(adminMenu)
        }
        setMenus(userMenus)
    }, [])

    return (
        <div className={`w-72 h-full p-6 text-gray-600 ${isOpen ? 'block bg-white md:bg-gray-100 z-50 md:z-0 h-screen md:h-auto fixed md:relative top-0 md:top-auto' : 'hidden'} md:block`}>
            <Stack direction={"column"} spacing="35px">
                <Box className="text-2xl mb-10 flex flex-row space-x-3 items-center cursor-pointer" onClick={() => history.push('/')}>
                    <Icon as={SiShopify} w="35px" h="35px" color="blue.400" />
                    <p>Shop-Pedia</p>
                </Box>
                <Box className="font-semibold text-xl" mb="2">
                    Categories
                </Box>
                {
                    menus.map((menu, idx) => {
                        return (
                            <Box onClick={() => history.push({ pathname: menu.route })} key={idx} className="flex flex-row space-x-3 items-center cursor-pointer">
                                <Icon as={menu.icon} w="20px" h="20px" color="blue.400" />
                                <p className="text-base">{menu.name}</p>
                            </Box>
                        )
                    })
                }
            </Stack>
        </div>
    )
}

export default Sidebar
