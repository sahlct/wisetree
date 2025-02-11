import { useState, useRef } from 'react';
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
    }
  },
];

export default function Carousel() {
  const [order, setOrder] = useState([0, 1, 2, 3]); // Keep track of current order
  const [isAnimating, setIsAnimating] = useState(false);
  const cardRefs = useRef([]);

  const rotateItems = (clickedIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);

    // Calculate new order based on clicked item
    // const clickedPosition = order.indexOf(clickedIndex);
    const newOrder = [...order];
    
    // Rotate array until clicked item is at position 0
    while (newOrder.indexOf(clickedIndex) !== 0) {
      newOrder.unshift(newOrder.pop());
    }

    const timeline = gsap.timeline({
      onComplete: () => {
        setOrder(newOrder);
        setIsAnimating(false);
      }
    });

    // Animate each card to its new position
    cardRefs.current.forEach((ref, currentIndex) => {
      // const currentPosition = order.indexOf(currentIndex);
      const newPosition = newOrder.indexOf(currentIndex);
      const targetStyles = carouselDatas[newPosition].styles;

      timeline.to(ref, {
        ...targetStyles,
        duration: 0.8,
        ease: "power2.inOut",
      }, 0);
    });
  };

  return (
    <div className="min-h-screen py-10 relative">
      <h1 className="text-7xl font-medium">
        if you&apos;re looking at us,<br /> you&apos;re looking to
      </h1>

      {carouselDatas.map((item, index) => {
        const currentPosition = order.indexOf(index);
        
        return (
          <div
            key={item.count}
            ref={el => cardRefs.current[index] = el}
            className="absolute flex justify-center items-center cursor-pointer"
            onClick={() => rotateItems(index)}
            style={{
              ...carouselDatas[currentPosition].styles,
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
              currentPosition === 2 ? 'gap-5' : 'gap-3'
            }`}>
              <div className={`relative flex justify-center items-center ${
                currentPosition === 0 ? 'text-7xl' : 
                currentPosition === 1 ? 'text-6xl' : 
                currentPosition === 2 ? 'text-3xl' : 'text-3xl'
              } font-bold`}>
                <div className={`absolute text-[#ffffff22] ${
                  currentPosition === 0 ? 'text-9xl' : 
                  currentPosition === 1 ? 'text-8xl' : 
                  currentPosition === 2 ? 'text-5xl' : 'text-5xl'
                }`}>
                  {item.letter}
                </div>
                {item.count}
              </div>
              <div className="text-start flex flex-col">
                <div className={`${
                  currentPosition === 0 ? 'text-5xl' : 
                  currentPosition === 1 ? 'text-xl' : 
                  currentPosition === 2 ? 'text-md' : 'text-sm'
                } font-semibold`}>
                  {item.header}
                </div>
                <div className={`${
                  currentPosition === 0 ? 'text-2xl' : 
                  currentPosition === 1 ? 'text-md' : 
                  currentPosition === 2 ? 'text-xs' : 'text-[8px]'
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