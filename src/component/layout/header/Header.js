import React from "react";
import "./Header.css";
import Search from "../../search/Search";
import logo from "../../../asset/img/logo.jpg";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <Search />
        </div>
    )
}

export default Header;