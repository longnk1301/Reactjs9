import React, { useState } from "react";
import CardItem from "src/component/cardItem/CardItem";
import "./CategoryPage.css";
import data from "src/data/data.json";
import { useDispatch } from 'react-redux';
import { setSong } from 'src/actions/setSong';
import { useParams } from "react-router-dom";

const CategoryPage = () => {

    const allPlayList = data.playLists;
    const dispatch = useDispatch();
    const [playlists, setPlaylists] = useState([]);
    let { categorySelect } = useParams();
    const songs = data.recommendedSongs;

    const filterPlaylistByCategory = () => {
        const temp = [];
        allPlayList.forEach(playlist => {
            if (playlist.type === categorySelect.toLowerCase()) {
                temp.push(playlist);
            }
        });
    }

    filterPlaylistByCategory();

    const changeSongHandle = (song) => {
        dispatch(setSong(song));
    }

    return (
        <div className="category-page">
            <h3>Category:</h3>
            <div className="row">
                {playlists.map((playlist) => (
                    <div onClick={() => changeSongHandle(playlist)} key={playlist.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <CardItem info={playlist} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CategoryPage;