import React, { useState } from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [defaultState, setState] = useState([
    { id: 1, title: "Relate post 1", desc: "description" },
    { id: 2, title: "Relate post 2", desc: "description" },
    { id: 3, title: "Relate post 3", desc: "description" },
    { id: 4, title: "Relate post 4", desc: "description" },
  ]);

  const addItem = (item) => {
    setState([...defaultState, item]);
  };

  const updateItem = (newState) => {};

  const deleteItem = (id) => {};

  const getPosts = () => {};

  return (
    <AppContext.Provider
      value={{ defaultState, addItem, updateItem, deleteItem, getPosts }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
