import React from 'react';
import SuperInputText from "../../../../n0-common/c1-superInput/SuperInputText";
import SuperButton from "../../../../n0-common/c2-superButton/SuperButton";
import s from "./SetPass.module.css"

const SetPass = () => {
    return (
        <div className={s.setPassBlock}>
            <SuperInputText placeholder={"old pass"}/>
            <SuperInputText placeholder={"new pass"}/>
            <SuperButton children={"set pass"}/>
        </div>
    );
};

export default SetPass;