
const initialState = {
    nickname: ""
}

export function setProfileNickname(nickname) {
    return {
        type: "SET_PROFILE_NICKNAME",
        payload: nickname
    }
}

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_PROFILE_NICKNAME": 
            return {
                nickname: action.payload
            }
        default:
            return state
    }
}