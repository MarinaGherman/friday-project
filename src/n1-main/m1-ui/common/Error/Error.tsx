import React from 'react';
import s from "./Error.module.css"

type ErrorPropsType =  {
   name: string
}

const Error:React.FC<ErrorPropsType> = (
    {name, ...restProps}) => {
    return (
        <div className={s.error}>
            {name}
        </div>
    );
};

export default Error;