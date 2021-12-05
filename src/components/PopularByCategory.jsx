import React, { useEffect, useState } from 'react'
import CardProduct from './CardProduct'
import Slider from "react-slick";
import '../assets/css/modules/reactSlick.css'
import { AiOutlinePlusCircle } from "react-icons/ai"
import Icon from '@chakra-ui/icon';
import { http } from '../libs/services/http';
import { useHistory } from "react-router-dom";

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

const PopularByCategory = ({category}) => {
    const history = useHistory()
    const [products, setProducts] = useState([]);

    const fetchData = async () =>{
        const response = await http('get',`category/${category}`)
        const data = response.data.filter((item,idx)=> {if(idx <= 4) return item})
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
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-xl font-semibold text-gray-600">{category} Terpopuler</h1>
                <Icon as={AiOutlinePlusCircle} w="24px" h="24px" color="blue.400" className="cursor-pointer" />
            </div>
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
                                id={product.id}
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

export default PopularByCategory
