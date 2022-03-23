import { createStore, combineReducers } from "redux";
import statusReducer from "./animeStatusReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
    statuses: statusReducer,
    profile: profileReducer
})

const store = createStore(rootReducer)

export default store




