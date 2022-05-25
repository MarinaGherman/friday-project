import React from 'react';
import { Route, Routes} from "react-router-dom";
import LoginContainer from "../../../n2-features/f1-auth/a1-login/l1-ui/LoginContainer";
import ErrorContainer from "../common/error/ErrorContainer";
import RegisterFormContainer from "../../../n2-features/f1-auth/a2-register/r1-ui/RegisterFormContainer";


export const LOGIN_PATH = '/login';
export const REGISTERED_PATH = '/registered';
export const ERROR_PATH = '/error';
export const SET_PASS = '/set-password';


const Routers: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={LOGIN_PATH} element={<LoginContainer/>}/>
                <Route path={ERROR_PATH} element={<ErrorContainer/>}/>
                <Route path={REGISTERED_PATH} element={<RegisterFormContainer/>}/>
                <Route path={SET_PASS} element={<RegisterFormContainer/>}/>
            </Routes>
        </>
    );
};

export default Routers;