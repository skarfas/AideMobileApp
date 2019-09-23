import { LOGIN_ACC } from "../features/Login/LoginActions";

let initialState = {email: '',
                    password: ''}

export function login(state = initialState, action){
    switch (action.type){
        case LOGIN_ACC:
            return { ...state,
                    email: action.email,
                    password: action.password}
        default:
            console.log(state)
            return state;
    }
}