
export const setSearchValue = (newSearchValue) => {
    return {
        type: 'SET_SEARCH_VALUE',
        payload:  newSearchValue ,
    };
};

export default setSearchValue;
