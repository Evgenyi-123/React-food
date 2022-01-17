import React from "react";

import { Link } from "react-router-dom";

export default function CategoryItem(props) {
    const { strCategory, strCategoryThumb, strCategoryDescription } = props;

    return (
        <div className="card flex">
            <div className="card-image">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="card-content">
                <span className="card-title">{strCategory}</span>
                <p>{strCategoryDescription.slice(0, 60)}...</p>
            </div>
            <div className="card-action">
                <Link to={`/category/${strCategory}`} className="btn">
                    watch category
                </Link>
            </div>
        </div>
    );
}
