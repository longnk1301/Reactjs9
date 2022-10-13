import { createContext, useEffect, useState } from "react";
import { getDataCart } from "../services";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleDataCart = async () => {
            const response = await getDataCart();

            if (response) {
                setCart(response);

                setLoading(true);
            } else {
                setCart({});
            }
        };

        handleDataCart();
    }, []);

    return <DataContext.Provider value={{ cart, setCart, loading }}>{children}</DataContext.Provider>;
};

export default DataProvider;
