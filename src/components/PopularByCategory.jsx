import React, { useEffect, useState } from 'react'
import CardProduct from './CardProduct'
import Slider from "react-slick";
import '../assets/css/modules/reactSlick.css'
import { AiOutlinePlusCircle } from "react-icons/ai"
import Icon from '@chakra-ui/icon';
import { http } from '../libs/services/http';
import { useHistory } from "react-router-dom";
import useProducts from '../hooks/products';
import { useSelector } from 'react-redux';

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    variableWidth: true,
    responsive: [
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

const PopularByCategory = ({ category }) => {
    const [products, setproducts] = useState([])
    const allProducts = useSelector(state => state.products.products);

    const history = useHistory()

    const handleClick = (id) => {
        history.push(`/${id}`);
    }

    const filterProductsByCategory = () => {
        const filteredProducts = allProducts.filter((product) => product.category === category);
        setproducts(filteredProducts)
    }

    useEffect(() => {
        filterProductsByCategory()
    }, [allProducts])

    return (
        <div className="space-y-5">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-xl font-semibold text-gray-600">{category} Terpopuler</h1>
                <Icon as={AiOutlinePlusCircle} w="24px" h="24px" color="blue.400" className="cursor-pointer" />
            </div>
            <Slider {...settings}>
                {
                    products.length > 0 && products.map((product, idx) => {
                        return (
                            <div key={idx}>
                                <CardProduct
                                    category={product.category}
                                    image={product.image}
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rating}
                                    id={product.id}
                                    stock={product.stock}
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
