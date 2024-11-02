import React from 'react';
import Button from "@/components/Button";
import { IoIosArrowBack } from "react-icons/io";



const Accordion = () => {
    return (
        <div className="py-2">
            <button className="flex justify-between w-full">
                <span>پنل پیامک</span>
                <IoIosArrowBack />
            </button>
            <div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Accordion;