import React, { Fragment, useEffect, useState } from "react";
import CardItem from "../../../component/cardItem/CardItem";
import "./SearchPage.css";
import data from "../../../data/data.json";
import { useDispatch, useSelector } from 'react-redux';
import { setSong } from '../../../actions/setSong';

const SearchPage = () => {

    const dispatch = useDispatch();
    const [songs, setSongs] = useState([]);
    const [artists, setArtists] = useState([]);
    const allSongs = data.allSongs;
    const allArtists = data.artists;

    const searchValue = useSelector((state) => state.searchValue);

    useEffect(() => {
        filterSongs();
        filterArtists();
    }, [searchValue])

    const filterSongs = () => {
        const temp = [];
        allSongs.forEach(song => {
            if (song.name.toLowerCase().search(searchValue.searchValue.toLowerCase()) !== -1) {
                temp.push(song);
            }
        });
        setSongs(temp);
    }

    const filterArtists = () => {
        const temp = [];
        allArtists.forEach(artist => {
            if (artist.name.toLowerCase().search(searchValue.searchValue.toLowerCase()) !== -1) {
                temp.push(artist);
            }
        });
        setArtists(temp);
    }

    const changeSongHandle = (song) => {
        dispatch(setSong(song));
    }

    return (
        <div className="search-page">
            <h2>Search result for: {searchValue.searchValue}</h2>
            {songs !== [] && (
                <Fragment>
                    <h3>Songs</h3>
                    <div className="row">
                        {songs.map((song) => (
                            <div onClick={() => changeSongHandle(song)} key={song.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <CardItem info={song} />
                            </div>
                        ))}
                    </div>
                </Fragment>
            )}
            {artists !== [] && (
                <Fragment>
                    <h3>Artists</h3>
                    <div className="row">
                        {artists.map((artist) => (
                            <div key={artist.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                                <CardItem info={artist} />
                            </div>
                        ))}
                    </div>
                </Fragment>
            )}
            


        </div>
    )
}

export default SearchPage;