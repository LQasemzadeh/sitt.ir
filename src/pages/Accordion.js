import React, {useState} from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";




const Accordion = ({title, answer}) => {

    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-2">
            <button onClick={() => setAccordionOpen(!accordionOpen)} className="flex justify-between w-full focus:outline-none">
                <span>{title}</span>
                {accordionOpen ? <IoIosArrowForward /> : <IoIosArrowBack />}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen ? 'max-h-[300px]' : 'h-0'}`}>
                <div>{answer}</div>
            </div>
        </div>
    );
};

export default Accordion;