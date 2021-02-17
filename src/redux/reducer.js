const initialState = {
    user: '',
    profilePicture: ''
}

UPDATE_USER = "UPDATE_USER"
LOGOUT_USER = "LOGOUT_USER"

// Action function/builder:
// export function updateUser() {
//     return {
//         type: UPDATE_USER,
//         payload: user, profilePicture
//     }
// }

export function updateUser() {
let data = axios.get('/api/auth/me').then(res => res.data)
    return{
        type: UPDATE_USER,
        payload: data
    }
}

export function logoutUser(){
    let data = axios.post('/api/auth/logout').then(res=> res.data)
    return{
        type: LOGOUT_USER,
        payload: data
    }
}

//Reducer function:
export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_USER + "_FUFILLED":
            const { username, profilePicture } = action.payload.user
            return{ username, profilePicture }
        case LOGOUT_USER:
            return {state = ''} 
        default:
            return state
    }
}