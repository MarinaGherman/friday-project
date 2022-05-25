import React from 'react';
import {Link} from "react-router-dom";
import Login from "./Login";
import {LOGIN_PATH} from "../../../../n1-main/m1-ui/routes/Routers";

const LoginContainer = () => {
    return (
        <div>
            <Link to={LOGIN_PATH}>
                <Login/>
            </Link>

        </div>
    );
};

export default LoginContainer;