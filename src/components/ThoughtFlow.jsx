import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image4 from "../assets/image_1.jpg";
import image5 from "../assets/image_2.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ThoughtFlow() {
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  useEffect(() => {
    gsap.set(leftImageRef.current, { rotate: -5 });
    gsap.set(rightImageRef.current, { rotate: 5 });

    gsap.fromTo(
      leftImageRef.current,
      { x: -100, opacity: 0 }, // Start position (off-screen left)
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "linear",
        scrollTrigger: {
          trigger: leftImageRef.current,
          start: "top 80%",
          toggleActions: "play none none reset", // Restart animation on re-entry
        },
      }
    );

    gsap.fromTo(
      rightImageRef.current,
      { x: 100, opacity: 0 }, // Start position (off-screen right)
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "linear",
        scrollTrigger: {
          trigger: rightImageRef.current,
          start: "top 80%",
          toggleActions: "play none none reset", // Restart animation on re-entry
        },
      }
    );
  }, []);

  return (
    <div className="py-10 z-30 relative w-full flex flex-col items-center bg-white md:rounded-b-[80px] rounded-b-[40px] overflow-hidden">
      <h2 className="md:text-xl text-lg font-light my-3 text-start w-full px-6">
        THOUGHTFLOW
      </h2>
      <hr className="w-full border-gray-300" />

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full px-6 md:py-12 py-8 relative">
        
        {/* Left Image */}
        <div className="w-full md:w-1/3 flex justify-end">
          <img
            ref={leftImageRef}
            src={image4}
            alt="Brand Identity"
            className="md:mr-20 mr-16 max-h-[300px] md:max-h-[550px] h-auto rounded-xl shadow-lg grayscale-50 transition duration-300 hover:grayscale-0 rotate-[-5deg]"
          />
        </div>

        {/* Center Content */}
        <div className="w-full md:w-1/3 text-center flex flex-col items-center md:gap-20 gap-5">
          <h5 className="text-gray-500">Oct 15, 2024 | Brand Identity</h5>
          <h1 className="md:text-3xl text-2xl font-semibold text-blue-900">
            Define a unique and clear brand identity that resonates with the relevant target audience
          </h1>
          <button className="py-2 md:px-10 px-8 cursor-pointer border border-gray-500 rounded-full hover:bg-gray-200 transition">
            VIEW BLOG
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:flex hidden md:w-1/3 justify-start">
          <img
            ref={rightImageRef}
            src={image5}
            alt="Team Collaboration"
            className="ml-20 max-h-[400px] md:max-h-[550px] w-full rounded-xl shadow-lg grayscale-50 transition duration-300 hover:grayscale-0 rotate-[5deg]"
          />
        </div>
      </div>
    </div>
  );
}
