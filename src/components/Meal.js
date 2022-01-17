import React from "react";
import { Link } from "react-router-dom";

export default function Meal(props) {
    const { strMeal, idMeal, strMealThumb } = props;
    return (
        <div className="card flex">
            <div className="card-image">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="card-content">
                <span className="card-title">{strMeal}</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${idMeal}`} className="btn">
                    watch recipe
                </Link>
            </div>
        </div>
    );
}
