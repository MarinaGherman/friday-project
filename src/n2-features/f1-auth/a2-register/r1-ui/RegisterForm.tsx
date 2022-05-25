import React from 'react';
import SuperInputText from "../../../../n0-common/c1-superInput/SuperInputText";
import SuperButton from "../../../../n0-common/c2-superButton/SuperButton";
import s from './Register.module.css'

const RegisterForm = () => {
    return (
        <div className={s.registeredBlock}>
            <SuperInputText/>
            <SuperInputText/>
            <SuperInputText/>
            <SuperButton children={'Register Me'}/>
        </div>
    );
};

export default RegisterForm;