const initialState = {
    searchValue: ""
};

const SearchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_VALUE':
            return action.payload;
        default:
            return state;
    }
}

export default SearchReducer;
