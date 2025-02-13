import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dotGrid from "../assets/dot_grid.png";
import card1 from "../assets/card_1.jpg";
import card2 from "../assets/card_2.jpg";
import card3 from "../assets/card_3.jpg";
import card4 from "../assets/card_4.jpg";

gsap.registerPlugin(ScrollTrigger);

const ServiceCard = ({ mainBg, circleBg, number, position, header, headerBig, icon }) => (
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
      className={`${position === "top" ? "inverted-radius_1" : "inverted-radius_2"} h-[250px] py-5 px-5 flex flex-col ${position === "top" ? "justify-between" : "justify-between flex-col-reverse"}`}
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${mainBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="text-white">
        {icon}
      </div>
      <div className="text-start text-white">
        <h2 className="">{header}</h2>
        <h1 className="text-2xl font-semibold">{headerBig}</h1>
      </div>
    </div>
  </div>
);

ServiceCard.propTypes = {
  mainBg: PropTypes.string.isRequired,
  circleBg: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  position: PropTypes.oneOf(["top", "bottom"]).isRequired,
  header: PropTypes.string.isRequired,
  headerBig: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired
};

export default function Services() {
  const cards = [
    {
      count: '01.',
      main_bg: card1,
      circle_bg: card2,
      header: 'ENHANCED BRAND VISIBILITY IN COMPETITIVE FIELD',
      header_big: 'MARKETS',
      svg: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-codesandbox"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M20 7.5v9l-4 2.25l-4 2.25l-4 -2.25l-4 -2.25v-9l4 -2.25l4 -2.25l4 2.25z" /><path d="M12 12l4 -2.25l4 -2.25" /><path d="M12 12l0 9" /><path d="M12 12l-4 -2.25l-4 -2.25" /><path d="M20 12l-4 2v4.75" /><path d="M4 12l4 2l0 4.75" /><path d="M8 5.25l4 2.25l4 -2.25" /></svg>)
    },
    {
      count: '02.',
      main_bg: card2,
      circle_bg: card3,
      header: 'BALANCE CAC WITH ROI',
      header_big: 'DIGITAL ERA',
      svg: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-cube-unfolded"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M2 15h10v5h5v-5h5v-5h-10v-5h-5v5h-5z" /><path d="M7 15v-5h5v5h5v-5" /></svg>)
    },
    {
      count: '03.',
      main_bg: card3,
      circle_bg: card4,
      header: 'COMPLEX PRODUCT & SERVICE',
      header_big: 'LAUNCHES',
      svg: (<svg  xmlns="http://www.w3.org/2000/svg"  width="40"  height="40"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-codepen"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 15l9 6l9 -6l-9 -6l-9 6" /><path d="M3 9l9 6l9 -6l-9 -6l-9 6" /><path d="M3 9l0 6" /><path d="M21 9l0 6" /><path d="M12 3l0 6" /><path d="M12 15l0 6" /></svg>)
    },
    {
      count: '04.',
      main_bg: card4,
      circle_bg: card1,
      header: 'SCALE MARKETING OPERATIONS FOR',
      header_big: 'GROWTH',
      svg: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-react"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" /><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" /><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" /><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" /><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" /><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" /><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" /></svg>)
    }
  ];

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(max-width: 767px)", () => {
      // Mobile animations
      gsap.utils.toArray(".service-card").forEach((card, index) => {
        const direction = index % 2 === 0 ? -100 : 100; // Odd cards left, even cards right
        gsap.from(card, {
          x: direction,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        });
      });
    });

    mm.add("(min-width: 768px)", () => {
      // Desktop animations
      gsap.utils.toArray(".service-card").forEach((card) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          scrollTrigger: {
            trigger: card,
            start: "top 100%",
            end: "top 70%",
            scrub: 1,
          },
        });
      });
    });

    return () => mm.revert(); // Cleanup
  }, []);

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
        <h1 className="md:text-9xl sm:text-7xl text-6xl text-start">Services</h1>
      </div>
      <h2 className="md:text-7xl sm:text-5xl text-4xl md:pe-52 pe-10 md:py-10 py-5 md:px-10 px-4 md:pb-16 pb-10 font-semibold text-start text-blue-900">
        Empowering B2B Leaders To
        <span className="bg-gradient-to-r from-[#104386] to-[#86a0bf] bg-clip-text text-transparent">
          {" "}Scale Organically
        </span>
      </h2>
      <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-5 md:px-10 px-5">
        {cards.map((card, index) => (
          <div key={card.count} className="service-card">
            <ServiceCard
              mainBg={card.main_bg}
              circleBg={card.circle_bg}
              number={card.count}
              position={index % 2 === 0 ? "top" : "bottom"}
              header={card.header}
              headerBig={card.header_big}
              icon={card.svg}
            />
          </div>
        ))}
      </div>
    </div>
  );
}