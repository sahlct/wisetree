// import React from 'react'

import LearnMoreButton from "./learnmorBtn";

export default function WhatMakesSection() {
    return (
        <div className="pt-10 pb-28 w-full px-10 bg-white rounded-b-[80px] z-30 relative">
            <h2 className="text-xl font-light my-3 text-start">WHAT MAKES US UNIQUE</h2>
            <hr />
            <h1 className="text-7xl text-[#174685] text-start mt-10 tracking-wider font-semibold">Redefining Success For <br /><span className="bg-gradient-to-r from-[#174685] to-[#86a0bf] bg-clip-text text-transparent">
                B2B Brands
            </span></h1>
            <div className="grid md:grid-cols-3 gap-8 text-start mt-16">
                <div className="flex justify-start items-end">
                    <LearnMoreButton data={"LEARN MORE"}/>
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ad molestiae iure optio dolore. Dolores dignissimos officiis omnis hic laborum praesentium minima! Sapiente harum ratione odit quasi fugit, ex earum.
                    Excepturi officia expedita voluptatibus is a laudantium cum delectus ipsa, harum magnam set veniam adipisci modi et corrupti voluptate in, lorem inventore dolores  <span className="font-bold uppercase">asperiores vel Lorem</span> super dignissimos! Iste nemo tenetur saepe ipsum!
                    officia expedita voluptatibus laudantium cum delectus ipsa, harum magnam veniam adipisci modi et corrupti voluptate in, veritatis, inventore
                </div>
                <div>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque ad molestiae iure optio dolore. Dolores dignissimos officiis omnis hic laborum praesentium minima! Sapiente harum ratione odit quasi fugit, ex earum.
                    Excepturi officia expedita voluptatibus is a laudantium cum delectus ipsa, harum magnam set veniam adipisci modi et corrupti voluptate in like asperiores a vel cumque super dignissimos! Iste nemo tenetur saepe ipsum!
                    <span className="font-bold uppercase"> lorem inventore dolores </span>
                    officia expedita voluptatibus laudantium cum delectus ipsa, harum magnam veniam adipisci modi et corrupti voluptate in, veritatis, inventore
                </div>
            </div>
        </div>
    )
}
