import { combineReducers } from "redux";
import currentSongReducer from "./currentSongReducer";

const rootReducers = combineReducers({
    song: currentSongReducer,
});

export default rootReducers;