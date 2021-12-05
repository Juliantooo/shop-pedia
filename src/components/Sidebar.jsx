import { Stack, Box } from '@chakra-ui/layout'
import React from 'react'
import { Icon } from "@chakra-ui/react"
import { SiShopify } from "react-icons/si"
import { MdDevicesOther } from "react-icons/md"
import { GiGemNecklace, GiTravelDress, GiClothes } from "react-icons/gi"
import routesName from '../router/routesName'
import { useHistory } from "react-router-dom";



const categories = [
    {
        name: "Electronics",
        icon : MdDevicesOther,
        route : routesName.ELECTRONICS
    },
    {
        name: "Jewelery",
        icon : GiGemNecklace,
        route : routesName.JEWELERY
    },
    {
        name: "Men's clothing",
        icon : GiClothes,
        route : routesName.MENS_CLOTH
    },
    {
        name: "Women's clothing",
        icon : GiTravelDress,
        route : routesName.WOMENS_CLOTH
    }
]

const Sidebar = ({isOpen}) => {
    const history = useHistory();

    return (
        <div className={`w-72 h-full p-6 text-gray-600 ${isOpen ? 'block bg-white md:bg-gray-100 z-50 md:z-0 h-screen md:h-auto fixed md:relative top-0 md:top-auto' : 'hidden'} md:block`}>
            <Stack direction={"column"} spacing="35px">
                <Box className="text-2xl mb-10 flex flex-row space-x-3 items-center cursor-pointer" onClick={()=>history.push('/')}>
                <Icon as={SiShopify} w="35px" h="35px" color="blue.400"/>
                    <p>Shop-Pedia</p>
                </Box>
                <Box className="font-semibold text-xl" mb="2">
                    Categories
                </Box>
                {
                    categories.map((category,idx)=>{
                        return(
                            <Box onClick={()=>history.push({pathname:category.route})} key={idx} className="flex flex-row space-x-3 items-center cursor-pointer">
                                <Icon as={category.icon} w="20px" h="20px" color="blue.400"/>
                                <p className="text-base">{category.name}</p>
                            </Box>
                        )
                    })
                }
            </Stack>
        </div>
    )
}

export default Sidebar
