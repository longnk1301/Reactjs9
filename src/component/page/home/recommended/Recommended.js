import React from "react";
import CardItem from "../../../CardItem/CardItem";
import "./Recommended.css";
import data from "../../../../data/data.json";
import { useDispatch } from 'react-redux';
import { setSong } from '../../../../actions/setSong';

import imgSong1 from "../../../../data/img/phidieuvavesau.jpg";
import imgSong2 from "../../../../data/img/thoikhongsailech.jpg";
import imgSong3 from "../../../../data/img/aloha.jpg";

import audioSong1 from "../../../../data/music/Phi-Dieu-Va-Ve-Sau-Nham-Nhien.mp3";
import audioSong2 from "../../../../data/music/Thoi-Khong-Sai-Lech-Ngai-Than.mp3";
import audioSong3 from "../../../../data/music/Aloha-Jo-Jung-Suk.mp3";

const Recommended = () => {

    const songs = data.songs;
    const dispatch = useDispatch();

    songs[0].image = imgSong1;
    songs[1].image = imgSong2;
    songs[2].image = imgSong3;

    songs[0].audio = audioSong1;
    songs[1].audio = audioSong2;
    songs[2].audio = audioSong3;

    const changeSongHandle = (song) => {
        dispatch(setSong(song));
    }

    return (
        <div className="recommended">
            <h3>Recommended</h3>
            <div className="row">
                {songs.map((song) => (
                    <div onClick={() => changeSongHandle(song)} key={song.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <CardItem song={song} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Recommended;