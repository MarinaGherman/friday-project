import React from 'react';
import SuperInputText from "../../../../n0-common/c1-superInput/SuperInputText";
import SuperCheckbox from "../../../../n0-common/c3-superChekbox/SuperCheckbox";
import SuperButton from "../../../../n0-common/c2-superButton/SuperButton";
import s from './Login.module.css'

const Login = () => {
    return (
        <div className={s.loginForm}>
            <SuperInputText placeholder={"E-mail"}/>
            <SuperInputText placeholder={"Password"}/>
            <div className={s.checkboxBlock}>
                <span>Remember me</span>
                <SuperCheckbox/>
            </div>
            <SuperButton children={"Login"}/>
        </div>
    );
};

export default Login;