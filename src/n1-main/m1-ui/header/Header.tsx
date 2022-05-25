import React from 'react';
import {NavLink} from "react-router-dom";
import {ERROR_PATH, LOGIN_PATH, PROFILE_PATH, REGISTERED_PATH, SET_PASS_PATH} from "../routes/Routers";
import s from "./Header.module.css"

const Header = () => {
    return (
        <div className={s.navBar}>
            <NavLink to={PROFILE_PATH}>Profile</NavLink>
            <NavLink to={LOGIN_PATH}>Login</NavLink>
            <NavLink to={REGISTERED_PATH}>Register</NavLink>
            <NavLink to={SET_PASS_PATH}>SetPass</NavLink>
            <NavLink to={ERROR_PATH}>404</NavLink>
        </div>
    );
};

export default Header;