import { useEffect } from "react";
import { gsap } from "gsap";
import background from "../assets/home_background.jpg";
import blueRing from "../assets/ring_blue.png";
import yellowRing from "../assets/ring_yellow.png";
import homeLogo from "../assets/logo_only.png";
import AnimatedButton from "./animateBtn";

export default function Home() {
    // gsap animation 
    useEffect(() => {
        gsap.fromTo(
            ".heading-left",
            { x: -150, opacity: 0 },
            { x: 0, opacity: 1, duration: 2, ease: "power2.out" }
        );

        gsap.fromTo(
            ".heading-right",
            { x: 150, opacity: 0 },
            { x: 0, opacity: 1, duration: 2, ease: "power2.out", delay: 0.2 }
        );
    }, []);

    return (
        <div className="relative md:px-10 px-4 md:pt-10 pt-4">
            {/* Logo section - responsive */}
            <div className="absolute bg-white md:w-52 md:h-20 h-12 flex justify-start ps-2 gap-2 items-center">
                <img src={homeLogo} alt="logo" className="md:w-16 w-10" />
                <div className="text-start leading-1">
                    <h1 className="md:text-2xl text-xl font-bold">Wisetree</h1>
                    <h3 className="md:text-2xl text-xl -mt-2">Brands</h3>
                </div>
            </div>

            <div className="w-full sm:hidden flex justify-end items-center h-14">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" /></svg>
            </div>

            <div
                style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}
                className="home-radius w-full relative md:rounded-[80px] rounded-[40px] flex flex-col justify-between md:py-2 py-1 md:min-h-screen"
            >
                <div className="md:hidden absolute z-10 top-36 left-4 w-48">
                    <img src={blueRing} alt="blue_ring" />
                </div>
                <div className="md:hidden absolute z-10 w-48 right-4 top-52">
                    <img src={yellowRing} alt="yellow_ring" />
                </div>

                {/* Let's Talk Button*/}
                <div className="md:w-44 w-32 h-32 md:h-44 bg-gradient-to-br from-[#0b3152] to-[#66a08e] rounded-full text-white md:text-4xl text-2xl flex justify-center items-center md:px-6 px-4 md:leading-12 leading-6 font-semibold absolute md:left-[52%] left-1/2 transform -translate-x-1/2 md:top-[42%] top-[15%] z-30">
                    Let&apos;s Talk
                </div>

                {/* Main content section - responsive */}
                <div className="md:pt-52 pt-72">
                    <div className="hidden md:block">
                        <h1 className="text-white text-8xl font-bold text-end tracking-wide z-20 relative heading-left">
                            DON&apos;T JUST KEEP UP
                        </h1>
                        <h1 className="z-20 relative text-white text-8xl font-bold text-start tracking-widest -ms-3 heading-right">
                            UP, OUTRUN
                        </h1>
                    </div>
                    <div className="absolute z-10 md:top-40 hidden md:block left-36 md:w-96">
                        <img src={blueRing} alt="blue_ring" />
                    </div>
                    <div className="absolute z-10 md:w-96 hidden md:block md:right-64 md:top-24">
                        <img src={yellowRing} alt="yellow_ring" />
                    </div>
                    <div className="md:hidden">
                        <h1 className="text-white heading-left text-3xl font-bold text-center tracking-wide z-20 relative">
                            DON&apos;T JUST KEEP UP
                        </h1>
                        <h1 className="text-white heading-right text-3xl font-bold text-center tracking-wide z-20 relative mt-2">
                            UP, OUTRUN
                        </h1>
                    </div>

                    {/* Description text */}
                    <div className="w-full flex justify-end">
                        <div className="text-white md:w-[350px] w-full text-center md:text-start md:mt-0 mt-28 md:pe-16 text-base px-5 md:px-0">
                            <span className="md:hidden font-semibold block mb-4">
                                Wisetree Brands is your trusted partner to help you Stand Out, Craft Sustainable B2B Strategies, and Create a lasting impression.
                            </span>
                            <span className="hidden md:block">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum similique ducimus qui vitae, vel vero, quis facere quibusth anufreedp lorem tickets marking
                            </span>
                        </div>
                    </div>
                </div>

                <div className="hidden sm:block">
                    <AnimatedButton />
                </div>
            </div>
        </div>
    );
}
