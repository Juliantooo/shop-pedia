import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import '../assets/css/modules/reactSlick.css'
import PopularByCategory from '../components/PopularByCategory';
import Banner1 from '../assets/images/W1.png';
import Banner2 from '../assets/images/Mask Group.png';
import Banner3 from '../assets/images/W5.png';
import Banner4 from '../assets/images/W6.png';
import { Image } from '@chakra-ui/image';
import { http } from '../libs/services/http';
import { useDispatch } from 'react-redux';
import { ADD_ALL_PRODUCTS } from '../store/slicers/products';
import useProducts from '../hooks/products';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    arrows: null,
};

const banners = [Banner1, Banner2, Banner3, Banner4]
const URL = 'products'
const GET = 'get'

const Home = () => {
    const { products } = useProducts(GET, URL);
    const dispatch = useDispatch()

    const [categories, setCategories] = useState([]);


    const fetchData = async () => {
        const response = await http('get', 'products/categories')
        setCategories(response.data)
    }

    useEffect(() => {
        const localProducts = JSON.parse(localStorage.getItem('allProducts'));
        if (localProducts && localProducts.length > 0) {
            return dispatch(ADD_ALL_PRODUCTS(localProducts))
        }
        dispatch(ADD_ALL_PRODUCTS(products))
    }, [products])

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="w-full p-2 md:p-12 space-y-8 md:space-y-16">
            <Slider {...settings}>
                {
                    banners.map((banner, idx) => {
                        return <Image src={banner} alt={`Banner ${idx + 1}`} key={idx} className="object-fit" />
                    })
                }
            </Slider>
            <div className="space-y-5">
                {
                    categories.map((category) => <PopularByCategory key={category} category={category} />)
                }
            </div>
        </div>
    )
}

export default Home
