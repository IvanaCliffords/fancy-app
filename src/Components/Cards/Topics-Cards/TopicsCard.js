import React from "react";
import './TopicsCard.css';
import { Data } from "./assets/Data";



const TopicsCard = ({ title, imageUrl, linkUrl }) => {




    return (


        <div className="card-container">
            <div className="image-container">
                <img src={`${process.env.PUBLIC_URL}/card-images/${imageUrl}`} alt="" />
            </div>
            <div className="card-title">


                <h2><a href={linkUrl} target="_blank"> {title}</a> </h2>

            </div>
        </div>
    )
}

export default TopicsCard;