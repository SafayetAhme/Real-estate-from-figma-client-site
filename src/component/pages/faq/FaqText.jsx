import React, { useState } from 'react'
import { GrFormSubtract } from "react-icons/gr";
import { GrAdd } from "react-icons/gr";


const FaqText = ({ title, answer }) => {
    const [accordionOpen, setAccordionOpen] = useState(false);

    return (
        <div className="py-2">
            <button
                onClick={() => setAccordionOpen(!accordionOpen)}
                className="flex justify-between w-full"
            >
                <h1 className='text-xl font-poppins'>{title}</h1>
                {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
                <svg
                    className="fill-black shrink-0 ml-8"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                    <rect
                        y="7"
                        width="16"
                        height="2"
                        rx="1"
                        className={`transform origin-center rotate-90 transition duration-200 ease-out ${accordionOpen && "!rotate-180"
                            }`}
                    />
                </svg>
            </button>
            <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${accordionOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden font-poppins pt-2 text-sm leading-[23px]">{answer}</div>
            </div>
        </div>
    )
}

export default FaqText