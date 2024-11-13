import React from 'react';
import { FaCheck } from "react-icons/fa";


const pricingPlans = [
    {
        title: 'استارتاپ',
        price: '۲۵۰',
        currency: 'هزار تومان',
        frequency: '/ماهانه',
        description: 'مناسب برای کسب و کارهای در حال رشد',
        features: [
          'خط 12 رقمی',
            'پیامک انبوه',
            'پیامکی بین 70 تا 85 تومان (به میزان خرید بستگی دارد)',
            '300 پیامک',
        ],
        cta: 'خرید اشتراک',
        mostPopular: 'false',
    },
    {
        title: 'استارتاپ',
        price: '۳۵۰',
        currency: 'هزار تومان',
        frequency: '/ماهانه',
        description: 'مناسب برای کسب و کارهای در حال رشد',
        features: [
            'خط 12 رقمی',
            'پیامک انبوه',
            'خرید خط جدید',
            'پیامکی بین 70 تا 85 تومان (به میزان خرید بستگی دارد)',
            '500 پیامک',
        ],
        cta: 'خرید اشتراک',
        mostPopular: 'false',
    },
    {
        title: 'استارتاپ',
        price: '۴۵۰',
        currency: ' هزار تومان',
        frequency: '/ماهانه',
        description: 'مناسب برای کسب و کارهای در حال رشد',
        features: [
            'خط 12 رقمی',
            'ارسال پیشرفته',
            'پیامک انبوه',
            'خرید خط جدید',
            'پیامکی بین 70 تا 85 تومان (به میزان خرید بستگی دارد)',
            '600 پیامک',
        ],
        cta: 'خرید اشتراک',
        mostPopular: 'false',
    },
]

const Price = () => {
    return (
        <div className="bg-white lg:px-32 px-5 py-16">
            <header className="mb-4">
                <h1 className="text-3xl font-semibold text-center md:text-right">
                    انتخاب پنل پیامکی
                </h1>
            </header>
            <div data-aos="fade-down" className="mb-10">
                <p className="text-center md:text-right">
                    سرويس‌های پیام‌دهی تحت وب با واسط کاربری ساده و کارآمد برای سازمان‌ها و شرکت‌ها
                </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
                {pricingPlans.map((plan) =>(
                    <div key={plan.title} className="relative border border-slate-200 shadow-lg p-8 bg-white rounded-2xl flex flex-col">
                        <h3 className="text-lg font-semibold leading-5">{plan.title}</h3>
                        {plan.mostPopular && <p className="absolute -top-3 bg-primary text-secondary px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-md">پرفروش‌ترین</p>}
                        <p className="mt-4 text-sm text-gray-600 leading-6">{plan.description}</p>
                        <div className="-mx-6 mt-4 rounded-lg bg-primary bg-opacity-10 p-6">
                            <p className="flex items-center text-sm font-semibold text-secondary">
                                <span className="ml-3 text-4xl text-secondary">{plan.price}</span>
                                <span className="text-gray-500">{plan.currency}</span>
                                <span className="mr-1.5 text-gray-500">{plan.frequency}</span>
                            </p>
                        </div>
                        <ul className="mt-6 space-y-4 flex-1">
                            {plan.features.map((feature) => (
                                <li key={feature}
                                className="flex text-sm text-gray-600"
                                >
                                    <FaCheck className="flex-shrink-0" color="green" />
                                    <span className="mr-2">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a className="btn mt-8 block text-center shadow-lg">{plan.cta}</a>
                    </div>

                ))}
            </div>

        </div>
    );
};

export default Price;