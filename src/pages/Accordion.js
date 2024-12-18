import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = ({title, answer, image, isOpen, onAccordionClick}) => {
    return (
        <div className="py-2">
            <button onClick={onAccordionClick} className="flex justify-between w-full focus:outline-none">
                <span className="mb-2 font-bold">{title}</span>
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            <div className={`md:flex justify-between items-center text-center px-4 bg-white overflow-hidden transition-all duration-300 ease-in-out border text-slate-600 text-sm ${isOpen ? 'max-h-[300px]' : 'h-0'}`}>
                <div className="px-6 mb-2 mt-2">{answer}</div>
                <img src={image} width="320" height="180" className="rounded-lg mx-auto my-2"/>
            </div>
        </div>
    );
};

export default Accordion;