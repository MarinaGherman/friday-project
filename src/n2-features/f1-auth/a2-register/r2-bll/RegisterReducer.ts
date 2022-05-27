
export type RegisterStateType = {
    login: boolean;

}

export const loginInitState: RegisterStateType = {
    login: false,

};


export const RegisterReducer = (state = loginInitState, action: RegisterACType): RegisterStateType => {
    switch (action.type) {
        case "login/SET_REGISTER": {
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

const RegisterAC = (login:boolean): any => {
    return {type: "login/SET_LOADING",login} as const
}

export type RegisterACType = ReturnType<typeof RegisterAC>

