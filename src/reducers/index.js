import { combineReducers } from "redux";
import CurrentSongReducer from "./currentSongReducer";
import SearchReducer from "./SearchReducer";

const rootReducers = combineReducers({
    song: CurrentSongReducer,
    searchValue: SearchReducer
});

export default rootReducers;