import React from 'react';
import SuperInputText from "../../../n1-main/m1-ui/common/c1-superInput/SuperInputText";
import SuperButton from "../../../n1-main/m1-ui/common/c2-superButton/SuperButton";
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