import image4 from "../assets/image_1.jpg";
import image5 from "../assets/image_2.jpg";

export default function ThoughtFlow() {
  return (
    <div className="py-10 z-30 relative w-full flex flex-col items-center bg-white md:rounded-b-[80px] rounded-b-[40px] overflow-hidden">
      <h2 className="md:text-xl text-lg font-light my-3 text-start w-full px-6">THOUGHTFLOW</h2>
      <hr className="w-full border-gray-300" />
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full px-6 md:py-12 py-8 relative">
        
        {/* Left Image */}
        <div className="w-full md:w-1/3 flex justify-end">
          <img 
            src={image4} 
            alt="Brand Identity" 
            className="md:mr-20 mr-16 max-h-[300px] md:max-h-[550px] h-auto rounded-xl rotate-[-5deg] shadow-lg grayscale-50 transition duration-300 hover:grayscale-0"
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
            src={image5} 
            alt="Team Collaboration" 
            className="ml-20 max-h-[400px] md:max-h-[550px] w-full rounded-xl rotate-[5deg] shadow-lg grayscale-50 transition duration-300 hover:grayscale-0"
          />
        </div>
      </div>
    </div>
  );
}
