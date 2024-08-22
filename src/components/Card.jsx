import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FcRating } from "react-icons/fc";

export default function Card(prop)
{

    return (
        
        <div className="w-[273px]">
            <div className="h-[181px] rounded-[15px] overflow-hidden relative ">
                    <img className="obejct-cover w-full h-full" src={"http://localhost:5000/images/2b4f62d606d1b2bfba9ba9e5386fabb7.jpeg"} alt="" />
                    <div className="image-overlay absolute w-full h-full top-0 flex items-end p-3 text-[20px] font-bold text-white ">
                    ₹50 OFF ABOVE ₹19
                    </div>
            </div>
            <div className="text-xl font-bold mt-3 ">
                {prop.title}
            </div>
            <div>
                <FcRating className="inline" /> 4.5
                <span className="ml-2">fdsf sdfds</span>
            </div>
            <div>ghdds fsdfhdsfh</div>
            <div>ghdds fsdfhdsfh</div>
        </div>
    )
}