import React from "react";
import { RxCaretDown } from "react-icons/rx";
import { useState } from "react";
import Nav from "./Nav";

export default function Header()
{
    const[toggle,setToggle] = useState(false);


    const showSideMenue = () =>{
        setToggle(true);
    }

    const hideMenu = () =>{
        setToggle(false)
    }

    return (
        <>
            <div className="black-overlay w-full h-full fixed duration-500 z-index-50" onClick={hideMenu} style={{
                opacity : toggle ? 1 : 0,
                visibility : toggle ? "visible" : "hidden"
            }}>
                <div className="bg-white w-[500px] duration-[500ms] h-full absolute "  style={{
                    left : toggle ? '0%' : '-100%'
                }}
                onClick={(e) => {
                    e.stopPropagation();
                }}
                ></div>
            </div>
            <header className="p-3 shadow-xl">
                <div className="max-w-[1200px] mx-auto flex items-center gap-8">
                    <div className="w-[40px] h-[55px]">
                        <img src="images/logo.png" className="w-full h-full" alt="" />
                    </div>
                    <div>
                        <span className="font-bold border-b-[2px] border-black hover:text-[#FC8019] cursor-pointer">Ratanada</span> Jodhpur, Rajasthan, India<RxCaretDown onClick={showSideMenue} fontSize={25} className="cursor-pointer font-bold inline text-[#ff5200]"/>
                    </div>
                    <Nav />
                </div>
            </header>
            

        </>
    )
}