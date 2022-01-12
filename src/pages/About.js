import React from "react";
import TopicsCard from "../Components/Cards/Topics-Cards/TopicsCard";

import { Data } from "../Components/Cards/Topics-Cards/assets/Data";



function About() {

    {}
    return (
        <>
        <h1>ABOUT</h1>
        <TopicsCard title={Data[0].title} imageUrl={Data[0].imageUrl} linkUrl={Data[0].linkUrl}/>
        </>
    )
}

export default About;