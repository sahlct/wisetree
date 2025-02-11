// import React from 'react'
import background from "../assets/home_background.jpg";
import blueRing from "../assets/ring_blue.png";
import yellowRing from "../assets/ring_yellow.png";
import homeLogo from "../assets/logo_only.png";

import AnimatedButton from "./animateBtn";

export default function Home() {
    return (
        <div className="relative md:px-10 px-5 md:pt-10 pt-5">

            {/* absolute rings */}
            <div className="absolute z-10 top-40 left-36 md:w-96 w-20">
                <img src={blueRing} alt="blue_ring" />
            </div>
            <div className="absolute z-10 md:w-96 w-20 right-64 top-24">
                <img src={yellowRing} alt="yellow_ring" />
            </div>

            <div className="absolute bg-white md:w-52 h-20 flex justify-start ps-2 gap-2 items-center">
                <img src={homeLogo} alt="logo" className="md:w-16 w-10" />
                <div className="text-start leading-1">
                    <h1 className="md:text-2xl text-xl font-bold">Wisetree</h1>
                    <h3 className="md:text-2xl text-xl -mt-2">Brands</h3>
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}
                className="home-radius w-full min-h-screen relative rounded-[80px] flex flex-col justify-center"
            >

                {/* absolute portion  */}
                <div className="md:w-44 w-20 h-20 md:h-44 bg-gradient-to-br from-[#0b3152] to-[#66a08e] rounded-full text-white md:text-4xl text-xl flex justify-center items-center md:px-6 px-4 md:leading-12 leading-6 font-semibold absolute md:left-[52%] left-[65%] md:top-[42%] top-[38%] z-30">
                    Let&apos;s Talk
                </div>

                <div className="absolute md:bottom-5 bottom-2 md:left-[45%] left-[30%]">
                    <AnimatedButton />
                </div>

                <h1 className="text-white md:text-8xl text-2xl font-bold text-end tracking-wide z-20 relative">DON&apos;T JUST KEEP UP </h1>
                <h1 className="z-20 relative text-white md:text-8xl text-4xl font-bold text-start tracking-widest md:-ms-3">UP, OUTRUN </h1>
                <div className="text-white self-end md:w-[350px] text-start md:-mt-10 mt-28 md:pe-16 text-base px-5 md:px-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum similique ducimus qui vitae, vel vero, quis facere quibusth anufreedp lorem tickets marking</div>


            </div>
        </div>
    )
}
