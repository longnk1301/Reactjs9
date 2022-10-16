import { createBrowserRouter } from "react-router-dom";

import Login from "../auth/Login/Login";
import Signup from "../auth/Signup/Signup";
import Content from "../components/Content/Content";
import Checkout from "../components/Payment/Checkout/Checkout";
import Payment from "../components/Payment/Payment";

import DefaultLayout from "../Layout/DefaultLayout";
import Feature from "../pages/Feature/Feature";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            { index: true, element: <Home /> },
            { path: "shop", element: <Content /> },
            { path: "feature", element: <Feature /> },
            { path: "/payment", element: <Payment /> },
            { path: "/checkout", element: <Checkout /> },
        ],
    },
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
]);
