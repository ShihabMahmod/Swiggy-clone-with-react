import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

export default function Category()
{
    const[slide,setSlide] = useState(0);
    const[category,setCategory] = useState([]);

    const fetchCategory = async() =>{
        const response = await fetch("http://localhost:5000/categories");
        const data = await response.json();
        setCategory(data);
    }
    useEffect(()=>{
        fetchCategory();
    },[]);
    
    const nextSlide = () =>{
        if(category.length - 8 == slide) return false
        setSlide(slide+3);
    }
    const previousSlide = () => {
        if(slide == 0) return false
        setSlide(slide-3);
    }
    return (
        <>
            <div className="max-w-[1200px] mx-auto">
                <div className="flex justify-between items-end py-3">
                    <div className="text-[25] font-bold">What's on your mind?</div>
                    <div className="flex gap-2">
                        <div onClick={nextSlide} className="flex items-center justify-center bg-[#e2e2e7] w-[30px] h-[30px] rounded-full">
                            <FaArrowRight />
                        </div>
                        <div onClick={previousSlide} className="flex items-center justify-center bg-[#e2e2e7] w-[30px] h-[30px] rounded-full">
                            <FaArrowLeft />
                        </div>
                    </div>
                </div>
                <div className="flex overflow-hidden ">
                    {
                        category.map((item,index)=>{
                            return (
                                <div 
                                style={{
                                    transform : `translateX(-${slide * 100}%)`
                                }}
                                 className="w-[150px] shrink-0 duration-500">
                                    <img src={"http://localhost:5000/images/"+item.image} alt="" />
                                </div>
                            )
                        })
                    }
                </div>
                <div></div>
            </div>
        </>
    )
}