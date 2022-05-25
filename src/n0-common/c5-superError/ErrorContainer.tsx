import React from 'react';
import Error from "./Error";

import img from '../images/error-404.png'

const ErrorContainer = () => {
    return (
        <div>
            <Error img={img} />
        </div>
    );
};

export default ErrorContainer;