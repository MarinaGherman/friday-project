import {applyMiddleware, combineReducers, createStore} from "redux";
import  thunkMiddleware from "redux-thunk"
import {LoginReducer} from "../../n2-features/f1-auth/a1-login/l2-bll/LoginReducer";

export type StoreType = ReturnType<typeof reducers>


const reducers = combineReducers({
    login: LoginReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store

