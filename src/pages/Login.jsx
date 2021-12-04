import React from 'react'
import shoppedia from '../assets/images/image1.png'
import { Box } from '@chakra-ui/layout'
import { Icon } from "@chakra-ui/react"
import { SiShopify } from "react-icons/si"
import { rules } from '../components/ValidationLogin';


const Login = () => {
    return (
        < div className="min-h-screen flex items-center justify-center bg-blue-400" >

            <div className="bg-white p-16 rounded shadow-2xl w-1/3">

                <a href="">
                    <Box className="justify-center text-2xl mb-10 flex flex-row space-x-3 items-center">
                        <Icon as={SiShopify} w="35px" h="35px" color="blue.400" />
                        <p>Shop-Pedia</p>
                    </Box>
                    <p className="text-center text-lg text-gray-600">Welcome to Shop-Pedia !!</p>
                </a>

                <form className="space-y-5">

                    <div>
                        <label className="block mb-1 font-bold text-gray-500">Email</label>
                        <input type="email" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" />
                    </div>

                    <div>
                        <label className="block mb-1 font-bold text-gray-500">Password</label>
                        <input type="password" className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" />
                    </div>


                    <button className="block w-full bg-yellow-400 hover:bg-yellow-300 p-4 rounded text-yellow-900 hover:text-yellow-800 transition duration-300">Sign In</button>

                </form>

            </div>

        </div >
    )
}

export default Login
