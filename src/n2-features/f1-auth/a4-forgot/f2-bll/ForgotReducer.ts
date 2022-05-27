
export type StateType = {
    login: boolean;

}

export const setPassInitState: StateType = {
    login: false,

};


export const ForgotReducer = (state = setPassInitState, action: ACType): StateType => {
    switch (action.type) {
        case "login/SET_PASS": {
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

const ActionC = (login:boolean): any => {
    return {type: "login/SET_PASS",login} as const
}

export type ACType = ReturnType<typeof ActionC>

