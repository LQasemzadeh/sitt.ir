import React from 'react';
import Link from "next/link";
import {useAuth} from "@/hooks/auth";
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = () => {

    const { user } = useAuth({ middleware: 'guest' })

    return (
        <nav className="mx-auto max-w-7xl p-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
            <div>
                <img src="/assets/images/SITT.png" alt="برج الکترونیک شیراز" className="w-16 cursor-pointer transform hover:scale-x-125 transition ease-out" />
            </div>
            <div className="md:hidden">
                <GiHamburgerMenu className="cursor-pointer text-2xl" />
            </div>
            <ul className="hidden md:block">
                <Link href="/">
                    <a className="trs">
                        خانه
                    </a>
                </Link>
                <Link href="/">
                    <a className="trs">
                        پروژه‌ها
                    </a>
                </Link>
                <Link href="/">
                    <a className="trs">
                        خدمات
                    </a>
                </Link>
                <Link href="/">
                    <a className="trs">
                        اخبار
                    </a>
                </Link>
                <Link href="/">
                    <a className="trs">
                        درباره ما
                    </a>
                </Link>
                <Link href="/">
                    <a className="trs">
                        تماس با ما
                    </a>
                </Link>
            </ul>

            <div className="hidden md:block">
                {user ?
                    <Link href="/dashboard">
                        <a className="ml-4 text-sm text-gray-700 underline">
                            Dashboard
                        </a>
                    </Link>
                    :
                    <>
                        <Link href="/login">
                            <a className="btn ml-1">ورود</a>
                        </Link>

                        <Link href="/register">
                            <a className="btn">
                                ثبت نام
                            </a>
                        </Link>
                    </>
                }
            </div>
        </div>
        </nav>
    );
};

export default Navbar;