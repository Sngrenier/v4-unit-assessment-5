const initialState = {
    username: null,
    profile_pic: null
}

const UPDATE_USER = "UPDATE_USER"
const LOGOUT_USER = "LOGOUT_USER"


//ACTION BUILDER:
export function updateUser(user) {
    console.log('reducer',user)
    return{
        type: UPDATE_USER,
        payload: user
    }
}

//ACTION BUILDER:
export function logoutUser(){
    return{
        type: LOGOUT_USER,
        payload: {
            username: null,
            profile_pic: null
        }
    }
}

//REDUCER FUNCTION:
export default function reducer(state = initialState, action){
    const {type, payload } = action
    switch(type){
        case UPDATE_USER:
            return{ ...state, ...payload }
        case LOGOUT_USER:
            return{ ...state, ...payload }
        default:
            return state
    }
}