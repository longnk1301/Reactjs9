import React from "react";
import CardItem from "../../../component/cardItem/CardItem";
import "./Artists.css";
import data from "../../../data/data.json";
import { useDispatch } from 'react-redux';

const Artists = () => {

    const artists = data.artists;

    return (
        <div className="artists">
            <h3>Artists</h3>
            <div className="row">
                {artists.map((artist) => (
                    <div key={artist.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <CardItem info={artist} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Artists;