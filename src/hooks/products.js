import  { useEffect, useState } from 'react'
import { http } from '../libs/services/http';

const useProducts = (method,url)=>{
    const [products, setProducts] = useState([]);

    const fetchData = async () =>{
        const response = await http(method,url);
        setProducts(response.data)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return{
    products
    }
}

export default useProducts