import React, { useEffect, useState } from 'react'
import CardProduct from './CardProduct'
import Slider from "react-slick";
import '../assets/css/modules/reactSlick.css'
import { http } from '../libs/services/http';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { randomNumber } from '../libs/helpers/randomNumber';

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


const OtherProducts = () => {
    const history = useHistory();
    const [products, setProducts] = useState([])
    const allProducts = useSelector(state => state.products.products);

    const filterRandomProduct = () => {
        const filteredProducts = allProducts.filter((product) => product.id < randomNumber(16, 24) && product.id > randomNumber(1, 8));
        setProducts(filteredProducts)
    }

    const handleClick = (id) => {
        history.push(`/${id}`);
    }

    useEffect(() => {
        filterRandomProduct()
    }, [allProducts])

    return (
        <div className="space-y-5">
            <h1 className="text-xl font-semibold text-gray-600">Others Products</h1>
            <Slider {...settings}>
                {
                    products.length > 0 && products.map((product, idx) => {
                        return (
                            <div key={idx}>
                                <CardProduct
                                    id={product.id}
                                    category={product.category}
                                    image={product.image}
                                    title={product.title}
                                    price={product.price}
                                    rating={product.rating}
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

export default OtherProducts
