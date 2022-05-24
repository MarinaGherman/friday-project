import React from 'react';
import { Route, Routes} from "react-router-dom";
import LoginContainer from "../../../n2-features/f1-auth/a1-login/l1-LoginContainer";
import Profile from "../components/Profile";
import Header from "../header/Header";


export const LOGIN_PATH = '/login';
export const REGISTERED_PATH = '/registered';
export const PROFILE_PATH = '/';


const Routers: React.FC = () => {
    return (
        <>
            <Routes>
                <Route path={PROFILE_PATH} element={<Profile/>}/>
                <Route path={LOGIN_PATH} element={<LoginContainer/>}/>
                <Route path={REGISTERED_PATH} element={<LoginContainer/>}/>
            </Routes>
        </>
    );
};

export default Routers;