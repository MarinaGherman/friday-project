import React from 'react';
import Login, {LoginInputs} from "./Login";

const LoginContainer = () => {

    const handleSubmit = (values: LoginInputs) => {
        console.log(values)
    }

    return (
        <div>
            <Login onSubmit={handleSubmit} />
        </div>
    );
};

export default LoginContainer;