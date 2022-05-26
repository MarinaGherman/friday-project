import React, {ChangeEvent, useState} from 'react';
import SuperInputText from "../../../../n0-common/c1-superInput/SuperInputText";
import SuperCheckbox from "../../../../n0-common/c3-superChekbox/SuperCheckbox";
import SuperButton from "../../../../n0-common/c2-superButton/SuperButton";
import s from './Login.module.css'

export type LoginInputs = {
    email: string;
    password: string;
    rememberMe: boolean;
}

type LoginPropsType = {
    onSubmit: (values: LoginInputs) => void;
}

const Login: React.FC<LoginPropsType> = ({onSubmit}) => {
    const [values, setValues] = useState<LoginInputs>({
        email: "",
        password: "",
        rememberMe: false
    })

    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setValues((oldValues) => ({
            ...oldValues,
            email: e.target.value
        }))
    }

    const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
        setValues((oldValues) => ({
            ...oldValues,
            password: e.target.value
        }))
    }

    const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setValues((oldValues) => ({
            ...oldValues,
            rememberMe: e.target.checked
        }))
    }

    const handleSubmit = () => {
        onSubmit(values)
    }

    return (
        <div className={s.loginForm}>
            <SuperInputText value={values.email} onChange={handleChangeEmail} placeholder={"E-mail"}/>
            <SuperInputText value={values.password} onChange={handleChangePassword} placeholder={"Password"} type={"password"}/>
            <div className={s.checkboxBlock}>
                <span>Remember me</span>
                <SuperCheckbox checked={values.rememberMe} onChange={handleChangeCheckbox} />
            </div>
            <SuperButton onClick={handleSubmit}>Login</SuperButton>
        </div>
    );
};

export default Login;