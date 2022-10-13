import { createBrowserRouter } from "react-router-dom";
import Content from "../components/Content/Content";
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
            { path: "feature/payment", element: <Payment /> },
        ],
    },
]);
