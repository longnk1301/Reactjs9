import React from "react";
import "./Header.css";
import Search from "../../component/search/Search";
import logo from "../../asset/img/logo.jpg";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <NavLink to={"/"}>
                    <img src={logo} alt="logo" />
                </NavLink>
            </div>
            <Search />
        </div>
    )
}

export default Header;