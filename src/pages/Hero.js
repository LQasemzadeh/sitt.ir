import React from 'react';
import Link from "next/link";

const Hero = () => {
    return (
        <div id="hero" className="bg-gradient-to-b from-blue-100 to-white px-16 py-8 md:flex justify-between items-center text-center md:text-right">
               <div className="mx-auto mb-6 md:mb-0">
                   <header>
                       <h1 className="mb-4 text-secondary font-bold text-2xl">شرکت برج الکترونیک شیراز</h1>
                   </header>
                   <p className="mb-6 text-secondary text-lg">
                       هر آنچه برای بهبود کسب و کار خود نیاز دارید برج الکترونیک شیراز فراهم کرده است.
                   </p>
                   <Link href="/">
                       <a className="rounded-full bg-blue-900 px-10 py-2 text-white font-bold shadow-lg cursor-pointer">
                           بیشتر بخوانید
                       </a>
                   </Link>
               </div>
            <div className="mx-auto">
                <img src="/assets/images/hero.png" alt="برج الکترونیک شیراز" className="w-4/6 mx-auto" />
            </div>
        </div>
    );
};

export default Hero;