import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {LoginReducer} from "../../n2-features/f1-auth/a1-login/l2-bll/LoginReducer";
import {ProfileReducer} from "../../n2-features/f1-auth/a5-profile/p2-bll/ProfileReducer";
import {ForgotReducer} from "../../n2-features/f1-auth/a4-forgot/f2-bll/ForgotReducer";
import {SetPassReducer} from "../../n2-features/f1-auth/a3-setPass/s2-bll/SetPassReducer";
import {RegisterReducer} from "../../n2-features/f1-auth/a2-register/r2-bll/RegisterReducer";

export type StoreType = ReturnType<typeof reducers>


const reducers = combineReducers({
    login: LoginReducer,
    profile: ProfileReducer,
    forgot: ForgotReducer,
    setPass: SetPassReducer,
    register: RegisterReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

