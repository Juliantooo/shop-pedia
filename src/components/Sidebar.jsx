import { Stack, Box } from '@chakra-ui/layout'
import React from 'react'
import { Icon } from "@chakra-ui/react"
import { SiShopify } from "react-icons/si"
import { MdDevicesOther } from "react-icons/md"
import { GiGemNecklace, GiTravelDress, GiClothes } from "react-icons/gi"


const categories = [
    {
        name: "Electronics",
        icon : MdDevicesOther,
    },
    {
        name: "Jewelery",
        icon : GiGemNecklace,
    },
    {
        name: "Men's clothing",
        icon : GiClothes,
    },
    {
        name: "Women's clothing",
        icon : GiTravelDress,
    }
]

const Sidebar = ({isOpen}) => {
    return (
        <div className={`w-72 h-full p-6 text-gray-600 ${isOpen ? 'block bg-white md:bg-gray-100 z-50 md:z-0 h-screen md:h-auto fixed md:relative top-0 md:top-auto' : 'hidden'} md:block`}>
            <Stack direction={"column"} spacing="35px">
                <Box className="text-2xl mb-10 flex flex-row space-x-3 items-center">
                <Icon as={SiShopify} w="35px" h="35px" color="blue.400"/>
                    <p>Shop-Pedia</p>
                </Box>
                <Box className="font-semibold text-xl" mb="2">
                    Categories
                </Box>
                {
                    categories.map((category,idx)=>{
                        return(
                            <Box key={idx} className="flex flex-row space-x-3 items-center cursor-pointer">
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
