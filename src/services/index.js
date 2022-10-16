import { commerce } from "../lib/commerce";
import axios from "./axios";

export const getData = async () => {
    const response = await commerce.products
        .list()
        .then((response) => response.data)
        .catch((error) => console.log(error));

    return response;
};

export const getDataCart = async () => {
    const response = await commerce.cart
        .retrieve()
        .then((response) => response)
        .catch((error) => console.log(error));

    return response;
};

export const handleUpdateDataCart = async (productId, quantity) => {
    const response = await commerce.cart
        .update(productId, { quantity })
        .then((response) => response)
        .catch((error) => console.log(error));

    return response;
};

export const handleRemoveDataCart = async (productId) => {
    const response = await commerce.cart
        .remove(productId)
        .then((response) => response)
        .catch((error) => console.log(error));

    return response;
};

export const handleEmptyDataCart = async () => {
    const response = await commerce.cart.empty();

    return response;
};

export const getDataShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    return countries;
};

export const getDataSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    return subdivisions;
};

export const getDataShippingOptions = async (checkoutTokenId, country, region = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region });

    return options;
};

export const registerApi = async (email, password) => {
    return axios.post("/api/register", { email, password });
};
