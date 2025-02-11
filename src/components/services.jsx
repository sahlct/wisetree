import PropTypes from 'prop-types';
import dotGrid from "../assets/dot_grid.png";
import card1 from "../assets/card_1.jpg";
import card2 from "../assets/card_2.jpg";
import card3 from "../assets/card_3.jpg";
import card4 from "../assets/card_4.jpg";

const ServiceCard = ({ mainBg, circleBg, number, position }) => (
  <div className="relative">
    <div 
      className={`absolute w-14 h-14 right-3 ${position === "top" ? "top-1" : "-bottom-2"} translate-x-2 -translate-y-2 z-50 rounded-full flex justify-center items-center text-white font-bold text-2xl`} 
      style={{ 
        background: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${circleBg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover'
      }}
    >
      {number}
    </div>
    <div 
      className={`${position === "top" ? "inverted-radius_1" : "inverted-radius_2"} h-[250px] py-5 px-5 flex flex-col justify-between ${position === "top" ? "z-10 overflow-visible" : ""}`}
      style={{ 
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${mainBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>
      </div>
      <div className="text-start text-white">
        <h2 className="">ENHANCED BRAND VISIBILITY IN COMPETITIVE FIELD</h2>
        <h1 className="text-2xl font-semibold">MARKETS</h1>
      </div>
    </div>
  </div>
);

// ✅ Define Prop Types for Validation
ServiceCard.propTypes = {
  mainBg: PropTypes.string.isRequired,
  circleBg: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom"]).isRequired,
};

export default function Services() {
  return (
    <div>
      <div
        style={{
          background: `url(${dotGrid})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="md:h-44 h-28 flex items-center md:px-10 px-5"
      >
        <h1 className="md:text-9xl text-6xl text-start">Services</h1>
      </div>
      <h2 className="md:text-7xl text-4xl md:pe-52 pe-10 md:py-10 py-5 md:px-10 px-4 md:pb-16 pb-10 font-semibold text-start text-blue-900">
        Empowering B2B Leaders To
        <span className="bg-gradient-to-r from-[#104386] to-[#86a0bf] bg-clip-text text-transparent">
          Scale Organically
        </span>
      </h2>
      <div className="grid md:grid-cols-4 gap-5 md:px-10 px-5">
        <ServiceCard mainBg={card1} circleBg={card2} number="01." position="top" />
        <ServiceCard mainBg={card2} circleBg={card3} number="02." position="bottom" />
        <ServiceCard mainBg={card4} circleBg={card1} number="03." position="top" />
        <ServiceCard mainBg={card3} circleBg={card4} number="04." position="bottom" />
      </div>
    </div>
  );
}
