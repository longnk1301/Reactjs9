import React from "react";
import "./CardItem.css";

const CardItem = (props) => {
    let subInfo = "";
    switch (props.info.type) {
        case "song":
            subInfo = props.info.performer;
            break;
        case "artist":
            subInfo = props.info.followers + " followers";
            break;
        case "category":
            subInfo = "";
            break;
    }

    return (
        <div className="card-item">
            <div className="card-img">
                <img src={require("src/asset/img/" + props.info.image)} alt={props.info.name} />
                <i className="fa-regular fa-circle-play"></i>
            </div>
            <div className="card-name">{props.info.name}</div>
            <div className="sub-info">{subInfo}</div>

        </div>
    )
}

export default CardItem;