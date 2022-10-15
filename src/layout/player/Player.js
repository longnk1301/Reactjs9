import React from "react";
import "./Player.css";
import { useSelector } from 'react-redux';

const Player = () => {

    // const song = useSelector((state) => state.song);

    return (
        <div className="player">
            <div className="song-info">
                <div className="song-img">
                <img src="src/data/img/aloha.jpg" alt="song-name" />
                </div>
                <div>
                    <h5>Name song</h5>
                    <br />
                    <h6>Singer</h6>
                </div>

            </div>
            <audio controls>
                <source src={require("../../asset/music/Phi-Dieu-Va-Ve-Sau-Nham-Nhien.mp3")} type="audio/mp3" />
            </audio>
            <div className=""></div>
        </div>
    )
}

export default Player;