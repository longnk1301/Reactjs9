import { combineReducers } from "redux";
import CurrentSongReducer from "./CurrentSongReducer";
import SearchReducer from "./SearchReducer";

const rootReducers = combineReducers({
    song: CurrentSongReducer,
    searchValue: SearchReducer
});

export default rootReducers;