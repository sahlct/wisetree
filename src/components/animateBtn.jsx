// import React from 'react';
import logo from "../assets/logo_only.png"; 


const AnimatedButton = () => {
    return (
        <button className="group cursor-pointer w-32 h-14 bg-white rounded-full relative overflow-hidden transition-all duration-300 hover:w-44">
            {/* Initial State - Circular Icon */}
            <div className="absolute top-2 left-[35%] flex items-center justify-center transition-opacity duration-300 group-hover:opacity-0">
                <div className="w-10 h-10 relative">
                    <span className="absolute inset-0">
                        <img src={logo} alt="logo" className="" />
                    </span>
                </div>
            </div>

            {/* Hover State - Contact Us with Icons */}
            <div className="absolute inset-0 flex items-center justify-between px-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="bg-[#92CC7E] p-2 rounded-full text-white">
                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
                </div>

                <span className="text-white py-2 px-3 text-nowrap bg-[#1881B8] rounded-full font-medium">Contact Us</span>
            </div>
        </button>
    );
};

export default AnimatedButton;