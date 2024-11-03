import React, { useState } from 'react';
import Accordion from "@/pages/Accordion";

const Projects = () => {

    const [openAccordion, setOpenAccordion] = useState(null);

    const accordionData = [
        {
            title: "پنل پیامک",
            image: "/assets/images/projects/sms_panel.webp",
            answer: "شرکت برج الکترونیک شیراز سرویس‌های پیام‌دهی تحت وب با واسط کاربری ساده و کارآمد برای سازمان‌ها ارائه می‌دهد."
        },
        {
            title: "پنل پیامک",
            image: "/assets/images/projects/sms_panel.webp",
            answer: "شرکت برج الکترونیک شیراز سرویس‌های پیام‌دهی تحت وب با واسط کاربری ساده و کارآمد برای سازمان‌ها ارائه می‌دهد."
        },
        {
            title: "پنل پیامک",
            image: "/assets/images/projects/sms_panel.webp",
            answer: "شرکت برج الکترونیک شیراز سرویس‌های پیام‌دهی تحت وب با واسط کاربری ساده و کارآمد برای سازمان‌ها ارائه می‌دهد."
        },
        {
            title: "پنل پیامک",
            image: "/assets/images/projects/sms_panel.webp",
            answer: "شرکت برج الکترونیک شیراز سرویس‌های پیام‌دهی تحت وب با واسط کاربری ساده و کارآمد برای سازمان‌ها ارائه می‌دهد."
        },

    ];

    const handleAccordionClick = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (

        <div className="bg-white lg:px-32 px-5 py-16">
            <header className="mb-4">
                <h1 className="text-3xl font-semibold text-center md:text-right">
                    پروژه‌ها
                </h1>
            </header>
            <div data-aos="fade-down" className="mb-4">
                <p className="text-center md:text-right">
                    زمینه های فعالیت شرکت
                </p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg shadow-md border-2">
                {accordionData.map((accordion, index) => (
                    <Accordion
                        key={index}
                        title={accordion.title}
                        image={accordion.image}
                        answer={accordion.answer}
                        isOpen={openAccordion === index}
                        onAccordionClick={() => handleAccordionClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;