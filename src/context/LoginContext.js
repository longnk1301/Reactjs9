import { useState } from "react";
import { createContext } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    const login = (data) => {
        setUser({ ...data, auth: true });
    };

    const logout = (data) => {
        setUser({ ...data, auth: false });
    };

    return <UserContext.Provider value={{ user, login, logout }}>{children}</UserContext.Provider>;
};

export default UserProvider;
