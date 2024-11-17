import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Adsbar = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <div className="bg-gray-300 py-6 overflow-hidden">
            <div className="mx-auto max-w-lg px-5 py-5 sm:px-6 sm:py-12 lg:max-w-lg lg:px-4 lg:py-2 scrollbar-hide">
                <div className="m-6">
                    <Slider {...settings}>
                        <div className="container">
                            <img src="/assets/saham/Logo-Compress.png" alt="Falat"/>
                        </div>
                        <div className="container">
                            <img src="/assets/saham/Layer-82.png" alt="Jam"/>
                        </div>
                        <div className="container">
                            <img src="/assets/saham/mega.png" alt="Marun"/>
                        </div>
                        <div className="container">
                            <img src="/assets/saham/Shiraz_Especial_Economic_Zone.png" alt="Pasargad"/>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Adsbar;