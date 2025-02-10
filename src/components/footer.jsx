import background from "../assets/footer_bg.jpg";
import logo from "../assets/logo_only.png";
import dot from "../assets/dot_white.png";
import LearnMoreButton from "./learnmorBtn";

export default function Footer() {
    return (
        <div
            className="w-full -mt-20 pt-40 flex flex-col bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${background})` }}
        >
            {/* overlay  */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            <div
                className="w-full flex flex-col md:flex-row justify-between items-center px-10 py-10 relative z-10"
                style={{ backgroundImage: `url(${dot})` }}
            >
                <div className="capitalize text-gray-300 text-4xl md:text-5xl text-center md:text-start">
                    Achieve your business goals today. <br />Book a discovery call now!
                </div>
                <div className="mt-5 md:mt-0">
                    <LearnMoreButton data="LEARN MORE" />
                </div>
            </div>

            {/* logo & branding */}
            <div className="w-full pt-20 relative text-center">
                <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-[250px] md:w-[350px] opacity-20">
                    <img src={logo} alt="Wisetree Logo" />
                </div>
                <h1 className="font-bold text-[100px] md:text-[200px] text-center bg-gradient-to-r from-[#92CC7E] via-[#1675A7] to-[#1881B8] text-transparent bg-clip-text">
                    Wisetree
                </h1>
            </div>

            <hr className="border-white mx-10 opacity-50" />

            <div className="flex flex-col md:flex-row justify-between items-center py-5 px-10 text-white text-sm md:text-base relative z-10">

                {/* icons */}
                <div className="flex gap-4">
                    <a href="#" className="hover:text-gray-400 transition"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></a>
                    <a href="#" className="hover:text-gray-400 transition"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg></a>
                    <a href="#" className="hover:text-gray-400 transition"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4z" /><path d="M10 9l5 3l-5 3z" /></svg></a>
                    <a href="#" className="hover:text-gray-400 transition"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /></svg></a>
                </div>

                {/* option links */}
                <div className="flex gap-5 mt-4 md:mt-0">
                    <a href="#" className="hover:text-gray-400 transition">About</a>
                    <a href="#" className="hover:text-gray-400 transition">Service</a>
                    <a href="#" className="hover:text-gray-400 transition">Blog</a>
                    <a href="#" className="hover:text-gray-400 transition">Case Study</a>
                    <a href="#" className="hover:text-gray-400 transition">Work</a>
                    <a href="#" className="hover:text-gray-400 transition">Career</a>
                </div>

                {/* copyright text */}
                <div className="mt-4 md:mt-0">
                    © 2024 Wisetree. All Rights Reserved.
                </div>
            </div>
        </div>
    );
}
