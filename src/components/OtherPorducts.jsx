import React, { useEffect, useState } from 'react'
import CardProduct from './CardProduct'
import Slider from "react-slick";
import '../assets/css/modules/reactSlick.css'
import { http } from '../libs/services/http';
import { useHistory } from 'react-router';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    arrows:false,
    variableWidth: true,
    responsive:[
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
};


const OtherProducts = () => {
    const history = useHistory();
    const [products, setProducts] = useState([]);

    const fetchData = async () =>{
        const response = await http('get')
        const data = response.data.filter((item,idx)=> {if(idx <= 8) return item})
        setProducts(data)
    }

    const handleClick=(id)=>{
        history.push(`/product/${id}`);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="space-y-5">
            <h1 className="text-xl font-semibold text-gray-600">Others Products</h1>
            <Slider {...settings}>
                {
                    products.length>0&&products.map((product,idx)=>{
                        return (
                            <div key={idx}>
                                <CardProduct 
                                category={product.category} 
                                image={product.image} 
                                title={product.title} 
                                price={product.price} 
                                rating={product.rating} 
                                handleClick={handleClick}
                                />
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default OtherProducts
