import React from 'react';
import s from "./Error.module.css"


type ErrorPropsType =  {
   name?: string
    img?:string
}

const Error:React.FC<ErrorPropsType> = (
    {name, img, ...restProps}) => {
    return (
        <div className={s.error}>
            <img src={img} alt=""/>
        </div>
    );
};

export default Error;