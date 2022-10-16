import React from "react";
import CardItem from "../../../component/CardItem/CardItem";
import "./Categories.css";
import data from "../../../data/data.json";
import { NavLink } from "react-router-dom";

const Categories = (props) => {

    const allCategories = data.Categories;

    return (
        <div className="recommended">
            <h3>Categories</h3>
            <div className="row">
                {allCategories.map((category) => (
                    <div value={category.name} key={category.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                        <NavLink className="nav-link" to={"/category/" + category.name.toLowerCase()} >
                            <CardItem info={category} />
                        </NavLink>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Categories;