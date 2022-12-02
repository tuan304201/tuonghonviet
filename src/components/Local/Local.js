import React from "react";
import "./Local.css";

const Local = (props) => {
    return (
        <div className="container__local">
            <h1>{props.title}</h1>
            <p>{props.local}</p>
        </div>
    );
};

export default Local;
