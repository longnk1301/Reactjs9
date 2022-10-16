import React from "react";
import CardItem from "../../../component/CardItem/CardItem";
import "./Recommended.css";
import data from "../../../data/data.json";
import { useDispatch } from 'react-redux';
import { setSong } from '../../../actions/setSong';

const Recommended = () => {

    const dispatch = useDispatch();
    const songs = data.recommendedSongs;

    const changeSongHandle = (song) => {
        dispatch(setSong(song));
    }

    return (
        <div className="recommended">
            <h3>Recommended</h3>
            <div className="row">
                {songs.map((song) => (
                    <div onClick={() => changeSongHandle(song)} key={song.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <CardItem info={song} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recommended;