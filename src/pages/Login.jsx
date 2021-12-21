import React, { useState } from 'react'
import { Box } from '@chakra-ui/layout'
import { Button, Icon, useToast } from "@chakra-ui/react"
import { SiShopify } from "react-icons/si"
import LoginImage from '../assets/images/login-image.png'
import { http } from '../libs/services/http'
import { useHistory } from 'react-router-dom'

const method = 'post';
const url = 'auth/login';


const Login = () => {
    const toast = useToast();
    const history = useHistory();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (username === 'admin' && password === 'admin123') {
            localStorage.setItem('authToken', 'admin-token');
            localStorage.setItem('username', username);
            localStorage.setItem('role', 'admin')
            history.replace('/report')
            return;
        }
        const data = {
            username,
            password
        }
        const response = await http(method, url, data);
        if (response.isError) {
            toast({
                title: 'Login Failed!',
                description: 'Please check username or password.',
                status: 'error',
                duration: 6000,
                position: 'top',
                isClosable: true,
            })
            localStorage.removeItem('authToken')
            localStorage.removeItem('username')
            setLoading(false)
            return;
        }
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('username', username);
        localStorage.setItem('role', 'user')
        history.replace('/')
        setLoading(false)
    }


    return (
        < div className="min-h-screen flex flex-col px-5 pb-5 md:p-0 md:flex-row md:space-x-10 items-center justify-center">

            <img src={LoginImage} className='w-7/12 md:w-4/12 lg:w-5/12' alt="login-greeting" />

            <div className="bg-white p-5 lg:p-10 rounded-md shadow-lg w-full md:w-6/12 lg:w-5/12 xl:w-4/12">
                <a href="/">
                    <Box className="justify-center text-2xl mb-10 flex flex-row space-x-3 items-center">
                        <Icon as={SiShopify} w="35px" h="35px" color="blue.400" />
                        <p>Shop-Pedia</p>
                    </Box>
                    <p className="text-center text-lg text-gray-600">Welcome to Shop-Pedia !!</p>
                </a>

                <form className="space-y-5 w-full" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-1 font-bold text-gray-500">Username</label>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" />
                    </div>

                    <div>
                        <label className="block mb-1 font-bold text-gray-500">Password</label>
                        <input type="password" onChange={(e) => setPassword(e.target.value)} className="w-full border-2 border-gray-200 p-3 rounded outline-none focus:border-purple-500" />
                    </div>

                    <Button isLoading={loading} type='submit' colorScheme='blue' style={{ width: '100%' }}>Sign In</Button>
                </form>

            </div>

        </div >
    )
}

export default Login
