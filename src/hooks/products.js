import  { useEffect, useState } from 'react'
import { randomNumber } from '../libs/helpers/randomNumber';
import { http } from '../libs/services/http';

const useProducts = (method,url)=>{
    const [products, setProducts] = useState([]);

    const fetchData = async () =>{
        const response = await http(method,url);
        const modifiedProducts = response.data.length > 0
        ? response.data.map((item)=>{
            return {...item,stock:randomNumber(7,14)}
        })
        : {...response.data,stock:randomNumber(7,14)}
        setProducts(modifiedProducts)
    }

    useEffect(() => {
        fetchData();
    }, [url])

    return{
    products
    }
}

export default useProducts