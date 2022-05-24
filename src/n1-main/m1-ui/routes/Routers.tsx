import React from 'react';
import { Route, Routes} from "react-router-dom";
import LoginContainer from "../../../n2-features/f1-auth/a1-login/l1-LoginContainer";
import ErrorContainer from "../common/error/ErrorContainer";
import ProfileContainer from "../components/Profile/ProfileContainer";
import RegisterFormContainer from "../../../n2-features/f1-auth/a2-register/RegisterFormContainer";


export const LOGIN_PATH = '/login';
export const REGISTERED_PATH = '/registered';
export const PROFILE_PATH = '/';
export const ERROR_PATH = '/error';


const Routers: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={PROFILE_PATH} element={<ProfileContainer/>}/>
                <Route path={LOGIN_PATH} element={<LoginContainer/>}/>
                <Route path={ERROR_PATH} element={<ErrorContainer/>}/>
                <Route path={REGISTERED_PATH} element={<RegisterFormContainer/>}/>
            </Routes>
        </>
    );
};

export default Routers;