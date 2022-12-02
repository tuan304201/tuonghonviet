import React from "react";
import "./Banner.css";

const Banner = (props) => {
    return (
        <div className="container__banner">
            <img src={props.banner} alt="" />
            <div className="overlay__banner"></div>
        </div>
    );
};

export default Banner;
