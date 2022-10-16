import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import DataProvider from "./context";
import UserProvider from "./context/LoginContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./styles/GlobalStyle.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <DataProvider>
            <UserProvider>
                <RouterProvider router={router}></RouterProvider>
            </UserProvider>
        </DataProvider>
    </React.StrictMode>
);
