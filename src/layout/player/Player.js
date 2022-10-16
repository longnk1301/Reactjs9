import React, { useEffect } from "react";
import "./Player.css";
import { useSelector } from 'react-redux';

const Player = () => {

    const song = useSelector((state) => state.song);

    useEffect(() => {
        reloadPlayerHandler();
    }, [song]);

    const reloadPlayerHandler = () => {
        document.getElementById("player").load();
        document.getElementById("player").play();
    }

    return (
        <div className="player">
            <div className="song-info">
                <div className="song-img">
                    <img src={require("src/asset/img/" + song.image)} alt={song.name} />
                </div>
                <div>
                    <h5>{song.name}</h5>
                    <br />
                    <h6>{song.performer}</h6>
                </div>

            </div>
            <audio controls id="player">
                <source src={require("src/asset/music/" + song.audio)} type="audio/mp3" />
            </audio>
            <div className=""></div>
        </div>
    )
}

export default Player;