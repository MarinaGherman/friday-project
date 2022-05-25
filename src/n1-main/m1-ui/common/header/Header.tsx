import React from 'react';
import {NavLink} from "react-router-dom";
import {ERROR_PATH, LOGIN_PATH, REGISTERED_PATH} from "../../routes/Routers";
import s from "./Header.module.css"

const Header = () => {
    return (
        <div className={s.navBar}>

            <NavLink to={LOGIN_PATH}>Login</NavLink>
            <NavLink to={REGISTERED_PATH}>Register</NavLink>
            <NavLink to={ERROR_PATH}>404</NavLink>
        </div>
    );
};

export default Header;