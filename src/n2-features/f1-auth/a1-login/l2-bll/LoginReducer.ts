
export type LoginStateType = {
    login: boolean;

}

export const loginInitState: LoginStateType = {
    login: false,

};


export const LoginReducer = (state = loginInitState, action: LoginACType): LoginStateType => {
    switch (action.type) {
        case "login/SET_LOADING": {
            return {
                ...state,
                login: action.login,
            }
        }
        default: {
            return state
        }
    }
};

const LoginAC = (login:boolean): any => {
    return {type: "login/SET_LOADING",login} as const
}

export type LoginACType = ReturnType<typeof LoginAC>

