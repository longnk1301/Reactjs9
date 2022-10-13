import React from "react";
import "./CardItem.css";

const CardItem = (props) => {
    return (
        <div className="card-item">
            <div className="song-img">
                <img src={props.song.image} alt={props.song.name} />
            </div>
            <div className="song-name">{props.song.name}</div>
            <div className="performer">{props.song.performer}</div>
        </div>
    )
}

export default CardItem;