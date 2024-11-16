import React from 'react';
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";


const Footer = () => {
    return (
        <footer className="bg-gray-900 px-4 py-8 md:px-16 lg:px-28">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h2 className="text-lg font-bold mb-4 text-white">لینک‌های مهم</h2>
                    <ul>
                        <li><a href="" className="hover:text-primary text-sm text-gray-300">مرکز داده</a></li>
                        <li><a href="" className="hover:text-primary text-sm text-gray-300">پنل پیامکی</a></li>
                        <li><a href="" className="hover:text-primary text-sm text-gray-300">مدیریت برج IT</a></li>
                        <li><a href="" className="hover:text-primary text-sm text-gray-300">پنل پرداخت‌یاری</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4 text-white">اطلاعات تماس</h2>
                    <ul>
                        <li><a href="" className="text-sm text-gray-300">آدرس: شیراز، خیابان اردیبهشت شرقی، ساختمان برج IT</a></li>
                        <li><a href="" className="text-sm text-gray-300">ایمیل: info@sitt.ir</a></li>
                        <li><a href="" className="text-sm text-gray-300">شماره تماس: ۰۷۱۳۲۳۴۴۴۴۵</a></li>
                    </ul>
                </div>
                <div>
                    <h2 className="text-lg font-bold mb-4 text-white">ما را در شبکه‌های اجتماعی دنبال کنید</h2>
                    <ul className="flex justify-center space-x-4">
                        <li><PiTelegramLogoDuotone className="text-primary text-3xl ml-4" /><a href=""></a></li>
                        <li><IoLogoWhatsapp className="text-primary text-3xl" /><a href=""></a></li>
                        <li><IoLogoInstagram className="text-primary text-3xl" /><a href=""></a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-600 pt-6 text-center mt-2">
                <p className="text-xs text-gray-400">© کلیه حقوق این وبسایت متعلق به شرکت برج الکترونیک شیراز می‌باشد.</p>
            </div>
        </footer>
    );
};

export default Footer;