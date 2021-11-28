import React from 'react'
import Slider from "react-slick";
import '../assets/css/modules/reactSlick.css'
import PopularByCategory from '../components/PopularByCategory';
import Banner1 from '../assets/images/W1.png';
import Banner2 from '../assets/images/Mask Group.png';
import Banner3 from '../assets/images/W5.png';
import Banner4 from '../assets/images/W6.png';
import { Image } from '@chakra-ui/image';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    arrows: null,
};

const banners = [Banner1,Banner2,Banner3,Banner4]

const Home = () => {
    return (
        <div className="w-full p-2 md:p-12 space-y-8 md:space-y-16">
            <Slider {...settings}>
                {
                    banners.map((banner,idx)=>{
                        return <Image src={banner} alt={`Banner ${idx+1}`} key={idx} className="object-fit" />
                    })
                }
            </Slider>
            <div className="space-y-5">
                <PopularByCategory/>
                <PopularByCategory/>
                <PopularByCategory/>
            </div>
        </div>
    )
}

export default Home
