import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../assets/image_01.jpg";
import image2 from "../assets/image_02.jpg";
import image3 from "../assets/image_03.jpg";
import background from "../assets/who_background.png";
import LearnMoreButton from "./learnmorBtn";

gsap.registerPlugin(ScrollTrigger);

export default function WhoWeAre() {
    useEffect(() => {
        const elementsToAnimate = document.querySelectorAll(".animate-from-bottom");

        elementsToAnimate.forEach((element) => {
            gsap.fromTo(
                element,
                {
                    y: 50, 
                    opacity: 0, 
                },
                {
                    y: 0, 
                    opacity: 1, 
                    duration: 1.2, 
                    ease: "power3.out", 
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%", 
                        end: "top 20%",
                        scrub: false,
                    },
                }
            );
        });
    }, []);

    return (
        <div
            className="w-full md:rounded-b-[80px] rounded-b-[40px] md:-mt-20 -mt-10 md:pt-28 pt-14 md:px-10 px-4 relative"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="w-full grid md:grid-cols-4 gap-8 text-white py-10">
                <div className="text-start text-gray-300 animate-from-bottom">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, maxime impedit praesentium quasi voluptate aliquam quia cupiditate eveniet quae dolores sed laborum iste dolore totam accusamus excepturi cumque ex libero. voluptate aliquam quia cupiditate eveniet quae dolores sed laborum iste dolore totam accusamus excepturi.
                </div>
                <div className="animate-from-bottom">
                    <h1 className="text-6xl font-bold text-start md:ps-20 ps-5 md:leading-20">
                        Who <br />
                        <span className="bg-gradient-to-br from-white to-[#adc1c4] bg-clip-text text-transparent">
                            We <br /> Are
                        </span>
                    </h1>
                </div>
                <div className="text-start text-gray-300 animate-from-bottom">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quas nemo sed culpa fugit? Neque doloribus repellendus unde, quidem et nisi nam velit quasi possimus, maxime iure distinctio placeat odit. voluptate aliquam quia cupiditate eveniet.
                </div>
                <div className="flex justify-end items-end animate-from-bottom">
                    <LearnMoreButton data={"LEARN MORE"} color={"white"} />
                </div>
            </div>

            {/* Desktop View */}
            <div className="w-full hidden md:grid md:grid-cols-4 gap-5 h-[500px]">
                <div></div>
                <div className="h-3/4 relative overflow-hidden rounded-4xl animate-from-bottom">
                    <div className="absolute inset-0 grayscale-50 hover:grayscale-0 transition duration-500">
                        <img
                            src={image1}
                            alt="plan image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
                <div className="h-2/3 relative overflow-hidden rounded-4xl animate-from-bottom">
                    <div className="absolute inset-0 grayscale-50 hover:grayscale-0 transition duration-500">
                        <img
                            src={image2}
                            alt="work image"
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
                <div className="h-5/6 flex flex-col animate-from-bottom">
                    <div className="flex-1 relative overflow-hidden rounded-4xl">
                        <div className="absolute inset-0 grayscale-50 hover:grayscale-0 transition duration-500">
                            <img
                                src={image3}
                                alt="office image"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end text-white pt-5">
                        <button>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l14 0" />
                                <path d="M13 18l6 -6" />
                                <path d="M13 6l6 6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile View with Horizontal Scroll */}
            <div className="md:hidden w-full overflow-x-auto scrollbar-hide">
                <div className="flex gap-4 pb-8 min-w-max animate-from-bottom">
                    <div className="w-[300px] h-[400px] relative overflow-hidden rounded-4xl flex-shrink-0">
                        <div className="absolute inset-0 grayscale-50 hover:grayscale-0 transition duration-500">
                            <img
                                src={image1}
                                alt="plan image"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-[300px] h-[400px] relative overflow-hidden rounded-4xl flex-shrink-0">
                        <div className="absolute inset-0 grayscale-50 hover:grayscale-0 transition duration-500">
                            <img
                                src={image2}
                                alt="work image"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                    <div className="w-[300px] h-[400px] relative overflow-hidden rounded-4xl flex-shrink-0">
                        <div className="absolute inset-0 grayscale-50 hover:grayscale-0 transition duration-500">
                            <img
                                src={image3}
                                alt="office image"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
