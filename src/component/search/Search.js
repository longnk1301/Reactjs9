import React from "react";
import "./Search.css";
import { useDispatch } from "react-redux";
import { setSearchValue } from '../../actions/setSearchValue'; 
import { useNavigate } from "react-router-dom";

const Search = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchingHandler = (event) => {
        event.preventDefault();
        dispatch(setSearchValue({searchValue: document.getElementById("search-input").value}));
        navigate("/search");
    }

    return (
        <div className="search">
            <form onSubmit={searchingHandler}>
                <input id="search-input" defaultValue="" type="text" placeholder="Search..." />
                <button onClick={searchingHandler} type="button" className="">Search</button>
            </form>
        </div>
    )
}

export default Search;