import React, { useReducer } from "react";

//redux la 1 he thong quan ly state toan cuc
//thanh phan:
//- store, state, reducer, dispatch

export const defaultCommunityState = {
  autographs: [
    { name: "John", score: 2000 },
    { name: "Ahiles", score: 4000 },
    { name: "Gavin", score: 3000 },
  ],
  partners: [
    { name: "Mike", score: 2000 },
    { name: "Dave", score: 4000 },
    { name: "Tom", score: 3000 },
  ],
};

export const actions = {
  add_item: "add_item",
  update_item: "update_item",
};

const communityReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case actions.add_item: {
      return { ...state, autographs: [...state.autographs, payload] };
    }
    case actions.update_item: {
      return state;
    }
    default:
      return state;
  }
};

export const CommunityContext = React.createContext({
  communityState: defaultCommunityState,
});

const CommunityProvider = ({ children }) => {
  const [communityState, dispatchCommunityState] = useReducer(
    communityReducer,
    Object.assign({}, defaultCommunityState)
  );

  return (
    <CommunityContext.Provider
      value={{ communityState, dispatchCommunityState }}
    >
      {children}
    </CommunityContext.Provider>
  );
};

export default CommunityProvider;
