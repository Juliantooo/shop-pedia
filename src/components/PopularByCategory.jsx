import React, { useEffect, useState } from 'react'
import CardProduct from './CardProduct'
import Slider from "react-slick";
import '../assets/css/modules/reactSlick.css'
import { AiOutlinePlusCircle } from "react-icons/ai"
import Icon from '@chakra-ui/icon';
import { http } from '../libs/services/http';

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


const PopularByCategory = () => {
    const [products, setProducts] = useState([]);

    const fetchData = async () =>{
        const response = await http('get')
        const data = response.data.filter((item)=> item.id <= 6)
        setProducts(data)
        console.log(products)
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="space-y-5">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-xl font-semibold text-gray-600">Electronics Terpopuler</h1>
                <Icon as={AiOutlinePlusCircle} w="24px" h="24px" color="blue.400" className="cursor-pointer"/>
            </div>
            <Slider {...settings}>
                {
                    products.length>0&&products.map((product,idx)=>{
                        return (
                            <div key={idx}>
                                <CardProduct category={product.category} image={product.image} title={product.title} price={product.price} rating={product.rating}/>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}

export default PopularByCategory
