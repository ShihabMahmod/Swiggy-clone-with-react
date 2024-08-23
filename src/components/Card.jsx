import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { ImInsertTemplate } from "react-icons/im";

export default function Card(prop)
{

    return (
        
        <div className="w-[273px] shrink-0 mb-8">
            <div className="group h-[181px] rounded-[15px] overflow-hidden relative ">
                    <img className=" group-hover:scale-125  duration-300 obejct-cover w-full h-full" src={"http://localhost:5000/images/"+ prop.image} alt="" />
                    <div className="image-overlay absolute w-full h-full top-0 flex items-end p-3 text-[20px] font-bold text-white ">
                    {prop.offer}
                    </div>
            </div>
            <div className="text-xl font-bold mt-3 ">
                {prop.title}
            </div>
            <div className="font-bold">
                <FcRating className="inline" /> {prop.rating}
                <span className="ml-4">({prop.minTime} - {prop.maxTime} min)</span>
            </div>
            <div>{prop.place}</div>
            <div>{prop.name}</div>
        </div>
    )
}