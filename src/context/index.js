import { createContext, useEffect, useState } from "react";
import { getDataCart } from "../services";
import { commerce } from "../lib/commerce";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [cart, setCart] = useState({});

    const [checkoutToken, setCheckoutToken] = useState({});

    const [loading, setLoading] = useState(false);

    const [shippingData, setShippingData] = useState({});

    useEffect(() => {
        const handleDataCart = async () => {
            const response = await getDataCart();

            if (response) {
                setCart(response);

                setLoading(true);
            }
        };

        handleDataCart();
    }, []);

    useEffect(() => {
        if (cart.id) {
            const handleGenerateToken = async () => {
                const response = await commerce.checkout
                    .generateToken(cart.id, { type: "cart" })
                    .then((response) => response)
                    .catch((error) => console.log(error));

                if (response) {
                    setCheckoutToken(response);
                }
            };

            handleGenerateToken();
        }
    }, [cart]);

    return (
        <DataContext.Provider value={{ cart, setCart, loading, checkoutToken, setShippingData, shippingData }}>
            {children}
        </DataContext.Provider>
    );
};

export default DataProvider;
