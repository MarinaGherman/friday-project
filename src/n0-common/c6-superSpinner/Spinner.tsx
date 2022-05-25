import React from 'react';
import img from "../images/Spinner.svg"
import s from "./Spinner.module.css"

const Spinner = () => {
    return (
        <div className={s.spinner}>
            <img src={img} alt=""/>
            loading...
        </div>
    );
};

export default Spinner;