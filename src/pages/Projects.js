import React, { useState } from 'react';
import Accordion from "@/pages/Accordion";

const Projects = () => {

    const [openAccordion, setOpenAccordion] = useState(0);

    const accordionData = [
        {
            title: "برج IT شیراز",
            image: "/assets/images/projects/ITtower.webp",
            answer: "برج آی تی با افزایش ارتفاع به ۱۱ طبقه با هدف میزبانی از تمام سایتهای کشور اقدام به استقرار مرکز داده یا دیتاسنتر در طبقه دهم کرده است."
        },
        {
            title: "پنل پیامک برج الکترونیک شیراز",
            image: "/assets/images/projects/sms_panel.webp",
            answer: "شرکت برج الکترونیک شیراز سرویس‌های پیام‌دهی تحت وب با واسط کاربری ساده و کارآمد برای سازمان‌ها ارائه می‌دهد."
        },
        {
            title: "دیتا سنتر برج الکترونیک شیراز",
            image: "/assets/images/projects/data-center.webp",
            answer: "شرکت برج الکترونیک شیراز، در جنوب کشور به عنوان یکی از 5 مرکز داده مورد تایید در سطح کشور می باشد."
        },
        {
            title: "سالن اجتماعات هوشمند",
            image: "/assets/images/projects/conference_hall.webp",
            answer: "شرکت برج الکترونیک شیراز، برخوردار از یکی از نوین ترین سالن های هوشمند اجتماعات در حنوب کشور است."
        },

    ];

    const handleAccordionClick = (index) => {
        if (openAccordion !== index) {
            setOpenAccordion(index);
        }
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