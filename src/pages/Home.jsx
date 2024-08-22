import React from "react";
import Header from "../components/Heade";
import Category from "../components/Category";
import TopRestaurant from "../components/TopRestaurant";

export default function Home()
{
    return (
        <>
            <Header/>
            <Category />
            <TopRestaurant/>
        </>
    )
}
