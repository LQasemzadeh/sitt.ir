import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import consulting from "/public/assets/images/services/consultingg.png";
import cooperation from "/public/assets/images/services/cooperation.png";
import smsP from "/public/assets/images/services/sms_panel.webp";
import ITTower from "/public/assets/images/services/ITtower-1.webp";
import web from "/public/assets/images/services/web.png";
import examing from "/public/assets/images/services/examing.png";
import eximp from "/public/assets/images/services/eximp.png";
import dataCenter from "/public/assets/images/services/data-center.webp";
import informatique from "/public/assets/images/services/Informatique.png";



const Services = () => {

    const data = [
        {
            img: consulting,
            name: "مشاوره در حوزه فناوری اطلاعات",
        },
        {
            img: cooperation,
            name: "همکاری با شرکت‌های دانش بنیان",
        },
        {
            img: smsP,
            name: "سامانه پیامکی",
        },
        {
            img: ITTower,
            name: "مدیریت برج فناوری اطلاعات شیراز",
        },
        {
            img: web,
            name: "طراحی وبسایت",
        },
        {
            img: examing,
            name: "برگزاری آزمون‌های خصوصی و مجازی",
        },
        {
            img: eximp,
            name: "صادرات و واردات",
        },
        {
            img: dataCenter,
            name: "مرکز داده",
        },
        {
            img: informatique,
            name: "صادرات و واردات کالاهای انفورماتیک",
        },
    ];

    const slider = useRef(null);

    const settings = {
        accessibility: true,
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
        ],
    };

    return (
        <div className="flex flex-col justify-center lg:px-32 px-5 py-16">
            <div className="flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
                <div data-aos="fade-down">
                    <h1 className="text-3xl font-semibold text-center lg:text-start">
                        خدمات
                    </h1>
                    <p className="mt-2 text-center lg:text-start">
                        زمینه های فعالیت شرکت
                    </p>
                </div>
                <div className="flex gap-5 mt-4 lg:mt-0">
                    <button
                        data-aos="fade-down"
                        className=" bg-orange-400 text-backgroundColor px-4 py-2 rounded-lg active:bg-orange-500"
                        onClick={() => slider.current.slickPrev()}
                    >
                        <FaArrowRight size={12}/>
                    </button>
                    <button
                        data-aos="fade-down"
                        className=" bg-orange-400 text-backgroundColor px-4 py-2 rounded-lg active:bg-orange-500"
                        onClick={() => slider.current.slickNext()}
                    >
                        <FaArrowLeft size={12}/>
                    </button>
                </div>
            </div>
            <div data-aos="fade-up" className=" mt-5">
                <Slider ref={slider} {...settings}>
                    {data.map((e, index) => (
                        <div
                            className="h-[300px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
                            key={index}
                        >
                            <div>
                                <img
                                    src={e.img}
                                    alt="img"
                                    className=" h-56 rounded-t-xl w-full"
                                />
                            </div>

                            <div className=" flex flex-col justify-center items-center">
                                <h1 className=" font-semibold text-lg pt-4">{e.name}</h1>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Services;