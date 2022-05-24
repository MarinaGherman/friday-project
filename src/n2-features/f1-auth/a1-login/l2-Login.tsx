import React from 'react';
import SuperInputText from "../../../n1-main/m1-ui/common/c1-superInput/SuperInputText";
import SuperCheckbox from "../../../n1-main/m1-ui/common/c3-superChekbox/SuperCheckbox";
import SuperButton from "../../../n1-main/m1-ui/common/c2-superButton/SuperButton";

const Login = () => {
    return (
        <div>
            <SuperInputText/>
            <SuperCheckbox/>
            <SuperButton children={"Login"}/>
        </div>
    );
};

export default Login;