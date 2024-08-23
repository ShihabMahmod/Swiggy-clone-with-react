import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./Card";

export default function TopRestaurant()
{
    const[slide,setSlide] = useState(0);
    const[restaurants,setrestaurant] = useState([]);

    const fetchRestaurant = async() =>{
        const response = await fetch("http://localhost:5000/restaurents");
        const data = await response.json();
        setrestaurant(data);
    }
    useEffect(()=>{
        fetchRestaurant();
    },[]);
    
    const nextSlide = () =>{
        if(restaurants.length - 8 == slide) return false
        setSlide(slide+3);
    }
    const previousSlide = () => {
        if(slide == 0) return false
        setSlide(slide-3);
    }
    return (
        <>
            <div className="max-w-[1200px] mx-auto">
                <div className="flex justify-between items-end my-4">
                    <div className="text-[25] font-bold">Top restaurant chainis in Dhaka</div>
                    <div className="flex gap-2">
                        <div onClick={nextSlide} className="flex items-center justify-center bg-[#e2e2e7] w-[30px] h-[30px] rounded-full">
                            <FaArrowRight />
                        </div>
                        <div onClick={previousSlide} className="flex items-center justify-center bg-[#e2e2e7] w-[30px] h-[30px] rounded-full">
                            <FaArrowLeft />
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 overflow-hidden ">
                    {
                        restaurants.map((item,index)=>{
                           return  <Card {...item} key={index} />
                        })
                    }
                </div>
            </div>
        </>
    )
}