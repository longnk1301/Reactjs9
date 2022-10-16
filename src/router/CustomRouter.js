import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "src/page/category/CategoryPage";
import Body from "../layout/body/Body";
import Header from "../layout/header/Header";
import Player from "../layout/player/Player";
import Home from "../page/home/Home";
import SearchPage from "../page/home/searchpage/SearchPage"

const CustomRouter = () => {
    return (
        <Fragment>
            <Header />
            <Body>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/category/:categorySelect' element={<CategoryPage />} />
                    <Route path='/playlist' element={"asdsadsa"} />
                    <Route path='/search' element={<SearchPage />} />
                </Routes>
            </Body>
            <Player />
        </Fragment >
    );
}

export default CustomRouter;