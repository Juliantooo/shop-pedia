import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router';
import CardProduct from '../components/CardProduct';
import useProducts from '../hooks/products';

const GET = 'get';

const Searched = () => {
    const { search } = useLocation();
    const history = useHistory();
    const keywords = search.split('=')[1];
    const {products}=useProducts(GET);
    const [searchedProducts, setSearchedProducts] = useState([]);

    const handleClick=(id)=>{
        history.push(`/product/${id}`);
    }

    
    useEffect(() => {
        if(products.length>1){
            const filteredProducts=products.filter((product)=>product.title.toLowerCase().includes(keywords.toLowerCase()))
            setSearchedProducts(filteredProducts)
        }
    }, [products])

    return (
        <div className="w-full p-2 md:p-12 space-y-8 md:space-y-16">
        <h1 className="text-xl font-semibold text-gray-600">Searched Products</h1>
        <div className="grid gap-3 grid-cols-2 md:grid-cols-4">
            {searchedProducts.map((product)=> 
            <CardProduct key={product.id} 
            category={product.category} 
            image={product.image} 
            title={product.title} 
            price={product.price} 
            rating={product.rating} 
            id={product.id}
            handleClick={handleClick}
            />)    
            }
        </div>
    </div>
    )
}

export default Searched
