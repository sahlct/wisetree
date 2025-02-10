// import React from 'react'
import background from "../assets/home_background.jpg";
import blueRing from "../assets/ring_blue.png";
import yellowRing from "../assets/ring_yellow.png";
import homeLogo from "../assets/logo_only.png";

import AnimatedButton from "./animateBtn";

export default function Home() {
    return (
        <div className="relative px-10 pt-10">

            {/* absolute rings */}
            <div className="absolute z-10 top-40 left-36 w-96">
                <img src={blueRing} alt="blue_ring" />
            </div>
            <div className="absolute z-10 w-96 right-64 top-24">
                <img src={yellowRing} alt="yellow_ring" />
            </div>

            <div className="absolute bg-white w-52 h-20 flex justify-start ps-2 gap-2 items-center">
                <img src={homeLogo} alt="logo" className="w-16" />
                <div className="text-start leading-1">
                    <h1 className="text-2xl font-bold">Wisetree</h1>
                    <h3 className="text-2xl -mt-2">Brands</h3>
                </div>
            </div>

            <div
                style={{ backgroundImage: `url(${background})`, backgroundSize: "cover", backgroundPosition: "center" }}
                className="home-radius w-full min-h-screen relative rounded-[80px] flex flex-col justify-center"
            >

                {/* absolute portion  */}
                <div className="w-44 h-44 bg-gradient-to-br from-[#0b3152] to-[#66a08e] rounded-full text-white text-4xl flex justify-center items-center px-6 leading-12 font-semibold absolute left-[52%] top-[40%] z-30">
                    Let&apos;s Talk
                </div>

                <div className="absolute bottom-5 left-[45%]">
                    <AnimatedButton />
                </div>

                <h1 className="text-white text-8xl font-bold text-end tracking-wide z-20 relative">DON&apos;T JUST KEEP UP </h1>
                <h1 className="z-20 relative text-white text-8xl font-bold text-start tracking-widest -ms-3">UP, OUTRUN </h1>
                <div className="text-white self-end w-[350px] text-start -mt-10 pe-16 text-base">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum similique ducimus qui vitae, vel vero, quis facere quibusth anufreedp lorem tickets marking</div>


            </div>
        </div>
    )
}
