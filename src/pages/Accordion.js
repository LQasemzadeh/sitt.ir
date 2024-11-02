import React, {useState} from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";






const Accordion = ({title, answer, image}) => {

    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-2">
            <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full focus:outline-none">
                <span className="mb-2">{title}</span>
                {accordionOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </button>
            <div className={`md:flex justify-between items-center text-center px-4 bg-white overflow-hidden transition-all duration-300 ease-in-out border border-gray-200 text-slate-600 text-sm ${accordionOpen ? 'max-h-[300px]' : 'h-0'}`}>
                <div className="px-6">{answer}</div>
                <img src={image} width="320" height="180" className="rounded-lg"/>
            </div>
        </div>
    );
};

export default Accordion;