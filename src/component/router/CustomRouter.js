import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Body from "../layout/body/Body";
import Header from "../layout/header/Header";
import Player from "../layout/player/Player";
import Home from "../page/home/Home";

const CustomRouter = () => {
    return (
        <Fragment>
            <Header />
            <Body>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/category' element={"page 111"} />
                    <Route path='/playlist' element={"asdsadsa"} />
                    <Route path='/album' element={"page 111"} />
                </Routes>
            </Body>
            <Player />
        </Fragment >
    );
}

export default CustomRouter;