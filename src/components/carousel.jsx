import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import card1 from "../assets/card_1.jpg";
import card2 from "../assets/card_2.jpg";
import card3 from "../assets/card_3.jpg";
import card4 from "../assets/card_4.jpg";

const carouselDatas = [
  {
    count: 1,
    header: 'GAIN',
    letter: 'G',
    text: 'Gain Buyers Trust',
    image: card1,
    styles: {
      height: '320px',
      width: '500px',
      left: '15%',
      top: '27%',
      borderRadius: '50px',
    },
    mobileStyles: {
      height: '180px',
      width: '280px',
      left: '5%',
      top: '20%',
      borderRadius: '30px',
    }
  },
  {
    count: 2,
    header: 'ENHANCE',
    letter: 'E',
    text: 'Enhance Sales Quota Attachment',
    image: card2,
    styles: {
      height: '180px',
      width: '280px',
      right: '15%',
      top: '45%',
      borderRadius: '30px',
    },
    mobileStyles: {
      height: '140px',
      width: '200px',
      right: '5%',
      top: '47%',
      borderRadius: '20px',
    }
  },
  {
    count: 3,
    header: 'GENERATE',
    letter: 'G',
    text: 'Generate Download',
    image: card3,
    styles: {
      height: '110px',
      width: '180px',
      right: '35%',
      top: '80%',
      borderRadius: '25px',
    },
    mobileStyles: {
      height: '90px',
      width: '140px',
      right: '35%',
      top: '68%',
      borderRadius: '15px',
    }
  },
  {
    count: 4,
    header: 'BUILD',
    letter: 'B',
    text: 'Build Different',
    image: card4,
    styles: {
      height: '80px',
      width: '130px',
      right: '55%',
      top: '87%',
      borderRadius: '25px',
    },
    mobileStyles: {
      height: '60px',
      width: '100px',
      right: '55%',
      top: '85%',
      borderRadius: '15px',
    }
  },
];

export default function Carousel() {
  const [order, setOrder] = useState([0, 1, 2, 3]);
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const rotateItems = (clickedIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    const currentPosition = order.indexOf(clickedIndex);
    const newOrder = [...order];
    
    // Calculate how many positions to move forward
    const positionsToMove = currentPosition === 0 ? 3 : currentPosition - 1;
    
    // Rotate array by the calculated positions
    for (let i = 0; i < positionsToMove; i++) {
      newOrder.push(newOrder.shift());
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        setOrder(newOrder);
        setIsAnimating(false);
      }
    });

    // Animate each card to its new position
    cardRefs.current.forEach((ref, currentIndex) => {
      const newPosition = newOrder.indexOf(currentIndex);
      const targetStyles = isMobile 
        ? carouselDatas[newPosition].mobileStyles 
        : carouselDatas[newPosition].styles;

      timeline.to(ref, {
        ...targetStyles,
        duration: 0.8,
        ease: "power2.inOut",
      }, 0);
    });
  };

  return (
    <div className="min-h-screen py-10 relative">
      <h1 className={`${isMobile ? 'text-3xl' : 'md:text-7xl sm:text-5xl md:px-52 sm:px-32'} font-medium`}>
        if you&apos;re looking at us, you&apos;re looking to
      </h1>

      {carouselDatas.map((item, index) => {
        const currentPosition = order.indexOf(index);
        const currentStyles = isMobile 
          ? carouselDatas[currentPosition].mobileStyles 
          : carouselDatas[currentPosition].styles;
        
        return (
          <div
            key={item.count}
            ref={el => cardRefs.current[index] = el}
            className="absolute flex justify-center items-center cursor-pointer"
            onClick={() => rotateItems(index)}
            style={{
              ...currentStyles,
              background: `url(${item.image})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              zIndex: 4 - currentPosition
            }}
          >
            <div className={`flex text-white ${
              currentPosition === 0 ? 'gap-10' : 
              currentPosition === 1 ? 'gap-5' : 
              currentPosition === 2 ? 'gap-3' : 'gap-2'
            } ${isMobile ? 'scale-75' : ''}`}>
              <div className={`relative flex justify-center items-center ${
                currentPosition === 0 ? `${isMobile ? 'text-5xl' : 'text-7xl'}` : 
                currentPosition === 1 ? `${isMobile ? 'text-4xl' : 'text-6xl'}` : 
                currentPosition === 2 ? `${isMobile ? 'text-2xl' : 'text-3xl'}` : 
                `${isMobile ? 'text-xl' : 'text-3xl'}`
              } font-bold`}>
                <div className={`absolute text-[#ffffff22] ${
                  currentPosition === 0 ? `${isMobile ? 'text-7xl' : 'text-9xl'}` : 
                  currentPosition === 1 ? `${isMobile ? 'text-6xl' : 'text-8xl'}` : 
                  currentPosition === 2 ? `${isMobile ? 'text-4xl' : 'text-5xl'}` : 
                  `${isMobile ? 'text-3xl' : 'text-5xl'}`
                }`}>
                  {item.letter}
                </div>
                {item.count}
              </div>
              <div className="text-start flex flex-col">
                <div className={`${
                  currentPosition === 0 ? `${isMobile ? 'text-3xl' : 'text-5xl'}` : 
                  currentPosition === 1 ? `${isMobile ? 'text-lg' : 'text-xl'}` : 
                  currentPosition === 2 ? `${isMobile ? 'text-sm' : 'text-md'}` : 
                  `${isMobile ? 'text-xs' : 'text-sm'}`
                } font-semibold`}>
                  {item.header}
                </div>
                <div className={`${
                  currentPosition === 0 ? `${isMobile ? 'text-xl' : 'text-2xl'}` : 
                  currentPosition === 1 ? `${isMobile ? 'text-sm' : 'text-md'}` : 
                  currentPosition === 2 ? `${isMobile ? 'text-[10px]' : 'text-xs'}` : 
                  `${isMobile ? 'text-[8px]' : 'text-[8px]'}`
                }`}>
                  {item.text}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}