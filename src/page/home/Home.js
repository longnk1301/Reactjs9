import React from "react";
import Artists from "./artists/Artists";
import Categories from "./categories/Categories";
import "./Home.css";
import Recommended from "./recommended/Recommended";

const Home = () => {
    return (
        <div className="home">
            <Recommended />
            <Artists />
            <Categories />
        </div>
    )
}

export default Home;