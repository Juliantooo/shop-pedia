import React from 'react'
import shoppedia from '../assets/images/image1.png'
import { Box } from '@chakra-ui/layout'
import { Icon } from "@chakra-ui/react"
import { SiShopify } from "react-icons/si"


const Login = () => {
    return (
        <div className="2xl:container h-screen m-auto">
            <div className="fixed insert-0 w-6/12 h-full lg:blockitems-center">
                <img className="mt-20 px-20 " src={shoppedia} />
            </div>
            <div role="hidden" className="fixed inset-0 w-6/12 h-full ml-auto bg-white bg-opacity-70 backdrop-blur-xl lg:block"> </div>

            <div className="relative ml-auto lg:w-7/12">
                <div className="m-auto py-12 px-6 sm:p-20 xl:w-10/12">
                    <div className="pt-6 space-y-2">
                        <a href="">
                            <Box className="justify-center text-2xl mb-10 flex flex-row space-x-3 items-center">
                                <Icon as={SiShopify} w="35px" h="35px" color="blue.400" />
                                <p>Shop-Pedia</p>
                            </Box>
                            <p className="text-center text-lg text-gray-600">Welcome to Shop-Pedia !!</p>
                        </a>
                    </div>
                    <div className="mt-12 border-t">
                        <span className="block w-max mx-auto -mt-3 px-4 text-gray-500 bg-white">Please Login</span>
                    </div>

                    <form action="" className="space-y-6">
                        <div>
                            <input type="email" placeholder="Your email" className="w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 placeholder-gray-600 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400"></input>
                        </div>

                        <div className="flex flex-col items-end">
                            <input type="password" placeholder="Password" className="w-full px-6 py-3 rounded-xl ring-1 ring-gray-300 placeholder-gray-600 invalid:ring-red-500 focus:invalid:ring-red-500 focus:invalid:outline-none disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400"></input>

                            <button className="p-3 -mr-3">
                                <span className="text-blue-600">Forget Password</span>
                            </button>
                        </div>
                        <div>
                            <button type="submit" className="block w-full px-6 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-800">
                                <span className="text-lg text-white">Login</span>
                            </button>
                            <a href="" className="block w-max p-3 -ml-3">
                                <span className="text-blue-600">Create New Account</span>
                            </a>
                        </div>
                    </form>
                    <div className="mt-12 pt-6 space-y-2 border-t">
                        <span className="block text-center text-gray-500">Buy Something Now!!</span>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Login
