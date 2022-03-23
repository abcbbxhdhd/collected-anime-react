
const initialState = {
    favorite: [],
    seen: [],
    inProgress: []
}

export function removeFavorite(id) {
    return {
        type: "REMOVE_FAVORITE",
        payload: id
    }
}

export function addFavorite(anime) {
    return {
        type: "ADD_FAVORITE",
        payload: {
            id: anime.id,
            poster: anime.poster,
            title: anime.title
        }
    }
}

export function addInProgress(anime) {
    return {
        type: "ADD_IN_PROGRESS",
        payload: {
            id: anime.id,
            poster: anime.poster,
            title: anime.title
        }
    }
}

export function removeInProgress(id) {
    return {
        type: "REMOVE_IN_PROGRESS",
        payload: id
    }
}

export function addSeen(anime) {
    return {
        type: "ADD_SEEN",
        payload: {
            id: anime.id,
            poster: anime.poster,
            title: anime.title
        }
    }
}

export function removeSeen(id) {
    return {
        type: "REMOVE_SEEN",
        payload: id
    }
}

export default function statusReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_SEEN":
            return {
                ...state,
                seen: [...state.seen, {id: action.payload.id, poster: action.payload.poster, title: action.payload.title}]
            }
        case "REMOVE_SEEN":
            return {
                ...state,
                seen: state.seen.filter(seen => seen.id !== action.payload)
            }
        case "ADD_FAVORITE":
            return {
                ...state,
                favorite: [...state.favorite, {id: action.payload.id, poster: action.payload.poster, title: action.payload.title}]
            }
        case "REMOVE_FAVORITE":
            return {
                ...state,
                favorite: state.favorite.filter(fav => fav.id !== action.payload)
            }
        case "ADD_IN_PROGRESS":
            return {
                ...state,
                inProgress: [...state.inProgress, {id: action.payload.id, poster: action.payload.poster, title: action.payload.title}]
            }
        case "REMOVE_IN_PROGRESS":
            return {
                ...state,
                inProgress: state.inProgress.filter(inProgress => inProgress.id !== action.payload)
            }
        default:
            return state
    }
}