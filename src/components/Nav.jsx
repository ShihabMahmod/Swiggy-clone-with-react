import React from "react";
import { CiSearch } from "react-icons/ci";
import { CiDiscount1 } from "react-icons/ci";
import { LuBadgeHelp } from "react-icons/lu";
import { CiUser } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

export default function Nav()
{

    const menuItems = [
        {
            icon : <CiSearch />,
            name : "Search"
        },
        {
            icon : <CiDiscount1 />,
            name : "Offers",
            sup : "new"
        },
        {
            icon : <LuBadgeHelp />,
            name : "Help"
        },
        {
            icon : <CiUser />,
            name : "Sign In"
        },
        {
            icon : <CiShoppingCart />,
            name : "Cart"
        }

    ];

    return (
        <nav className="flex list-none gap-10 ml-auto text-[18px] font-semibold">
            {
                menuItems.map((item,index)=>{
                    return <li key={index} className="cursor-pointer gap-2 flex items-center hover:text-[#FC8019]">
                        {item.icon}
                        {item.name}
                    </li>
                })
            }
        </nav>
    )
}