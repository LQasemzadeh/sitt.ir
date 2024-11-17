import React, { useState } from 'react';
import Link from "next/link";
import { useAuth } from "@/hooks/auth";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCrossCircled } from "react-icons/rx";

const nav = [
    { name: 'خانه', link: '#hero' },
    { name: 'پروژه‌ها', link: '#projects' },
    { name: 'خدمات', link: '#services' },
    { name: 'درباره‌ما', link: '#about' },
    { name: 'تماس‌با ما', link: '#contact' },
];

const Navbar = () => {
    const { user } = useAuth({ middleware: 'guest' });
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Function to handle closing the menu when clicking on "خانه"
    const handleLinkClick = () => {
        setMenuOpen(false); // Close the menu when a link is clicked
    };

    return (
        <nav className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
                <div>
                    <img
                        src="/assets/images/SITT.png"
                        alt="برج الکترونیک شیراز"
                        className="w-16 cursor-pointer transform hover:scale-x-125 transition ease-out"
                    />
                </div>
                {/* Hamburger Menu */}
                <div className="md:hidden">
                    {menuOpen ? (
                        <RxCrossCircled
                            className="cursor-pointer text-2xl"
                            onClick={toggleMenu}
                        />
                    ) : (
                        <GiHamburgerMenu
                            className="cursor-pointer text-2xl"
                            onClick={toggleMenu}
                        />
                    )}
                </div>
                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-4">
                    {nav.map(item => (
                        <li key={item.name}>
                            <Link href={item.link}>
                                <a className="trs">{item.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* Auth Buttons for Desktop */}
                <div className="hidden md:flex space-x-4">
                    {user ? (
                        <Link href="/dashboard">
                            <a className="text-sm text-gray-700 underline">Dashboard</a>
                        </Link>
                    ) : (
                        <>
                            <Link href="/login">
                                <a className="btn shadow-md md:ml-2">ورود</a>
                            </Link>
                            <Link href="/register">
                                <a className="btn shadow-md">ثبت نام</a>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-white z-10">
                    {/* Header of the mobile menu */}
                    <div className="flex justify-between items-center px-4 py-4">
                        <img
                            src="/assets/images/SITT.png"
                            alt="برج الکترونیک شیراز"
                            className="w-16"
                        />
                        <RxCrossCircled
                            className="cursor-pointer text-3xl"
                            onClick={toggleMenu}
                        />
                    </div>
                    {/* Menu items */}
                    <div className="flex flex-col items-center space-y-6 mt-8">
                        <ul className="flex flex-col items-center space-y-4">
                            {nav.map(item => (
                                <li key={item.name}>
                                    <Link href={item.link}>
                                        <a
                                            className="trs text-lg font-medium border-b"
                                            onClick={handleLinkClick}  // Close menu on click
                                        >
                                            {item.name}
                                        </a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col items-center space-y-4 mt-8">
                            {user ? (
                                <Link href="/dashboard">
                                    <a className="text-sm text-gray-700 underline">Dashboard</a>
                                </Link>
                            ) : (
                                <>
                                    <Link href="/login">
                                        <a className="btn w-24 text-center shadow-md">ورود</a>
                                    </Link>
                                    <Link href="/register">
                                        <a className="btn w-24 text-center shadow-md">ثبت نام</a>
                                    </Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
