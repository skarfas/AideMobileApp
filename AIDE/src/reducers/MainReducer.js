let initialState = {data: ''}

export function entry(state = initialState, action){
    switch (action.type){
        case "Login":
            return { ...state,
                    email: action.email,
                    password: action.password}
        default:
            console.log('MainReducer', state)
            return state;
    }
}