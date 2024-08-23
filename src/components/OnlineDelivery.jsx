import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import Card from "./Card";

export default function OnlineDelivery()
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
                    <div className="text-[25] font-bold">Restaurants with online food delivery in dhaka!</div>
                </div>
                <div className="grid grid-cols-4">
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