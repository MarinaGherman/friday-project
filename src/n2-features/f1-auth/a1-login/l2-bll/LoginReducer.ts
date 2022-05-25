
export type LoginStateType = {
    loading: boolean;

}

export const loginInitState: LoginStateType = {
    loading: false,

};


export const LoginReducer = (state = loginInitState, action: LoginACType): LoginStateType => {
    switch (action.type) {
        case "login/SET_LOADING": {
            return {
                ...state,
                loading: action.loading,
            }
        }
        default: {
            return state
        }
    }
};

const LoginAC = (loading:boolean): any => {
    return {type: "login/SET_LOADING",loading} as const
}

export type LoginACType = ReturnType<typeof LoginAC>

