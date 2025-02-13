// import React, { useEffect } from 'react';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LearnMoreButton from './learnmorBtn';

gsap.registerPlugin(ScrollTrigger);

export default function WhatMakesSection() {
    useEffect(() => {
        const letters = document.querySelectorAll('.animated-letter');

        gsap.fromTo(
            letters,
            { opacity: 0.2, color: '#86a0bf' }, 
            {
                opacity: 1,
                color: '#174685', 
                stagger: 0.05, 
                scrollTrigger: {
                    trigger: '.text-animation-container',
                    start: 'top 100%', 
                    end: 'top 50%',
                    scrub: true, 
                },
            }
        );
    }, []);

    // Helper function to wrap letters
    const wrapLetters = (text) =>
        text.split('').map((char, index) => (
            <span key={index} className="animated-letter inline-block">
                {char === ' ' ? '\u00A0' : char} {/* Preserve spaces */}
            </span>
        ));

    return (
        <div className="md:pt-10 pt-4 md:pb-28 pb-14 w-full md:px-10 px-4 bg-white md:rounded-b-[80px] rounded-b-[40px] z-30 relative">
            <h2 className="md:text-xl text-lg font-light my-3 text-start">WHAT MAKES US UNIQUE</h2>
            <hr />
            <h1 className="md:text-7xl md:pe-52 pe-8 sm:pe-28 text-5xl text-[#174685] text-start md:mt-10 mt-5 tracking-wider font-semibold text-animation-container">
                <span className="block">{wrapLetters('Redefining Success For')}</span>
                <span className="block bg-gradient-to-r from-[#174685] to-[#86a0bf] bg-clip-text text-transparent">
                    {wrapLetters('B2B Brands')}
                </span>
            </h1>
            <div className="grid md:grid-cols-3 gap-8 text-start md:mt-16 mt-8">
                <div className="flex justify-start items-end">
                    <LearnMoreButton data="LEARN MORE" />
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ad molestiae iure optio dolore. Dolores dignissimos officiis omnis hic laborum praesentium minima! Sapiente harum ratione odit quasi fugit, ex earum.
                    Excepturi officia expedita voluptatibus is a laudantium cum delectus ipsa, harum magnam set veniam adipisci modi et corrupti voluptate in, lorem inventore dolores{' '}
                    <span className="font-bold uppercase">asperiores vel Lorem</span> super dignissimos! Iste nemo tenetur saepe ipsum! officia expedita voluptatibus laudantium cum delectus ipsa, harum magnam veniam adipisci modi et corrupti voluptate in, veritatis, inventore
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ad molestiae iure optio dolore. Dolores dignissimos officiis omnis hic laborum praesentium minima! Sapiente harum ratione odit quasi fugit, ex earum.
                    Excepturi officia expedita voluptatibus is a laudantium cum delectus ipsa, harum magnam set veniam adipisci modi et corrupti voluptate in like asperiores a vel cumque super dignissimos! Iste nemo tenetur saepe ipsum!
                    <span className="font-bold uppercase"> lorem inventore dolores </span>
                    officia expedita voluptatibus laudantium cum delectus ipsa, harum magnam veniam adipisci modi et corrupti voluptate in, veritatis, inventore
                </div>
            </div>
        </div>
    );
}
