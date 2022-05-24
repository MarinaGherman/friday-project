import React from 'react';
import Error from "./Error";
import img from '../images/error-404.png'

const ErrorContainer = () => {
    return (
        <div>
            <Error name={"404"} img={img}/>
        </div>
    );
};

export default ErrorContainer;