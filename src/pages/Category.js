import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFilteredCategory } from "../api";
import MealList from "../components/MealList";
import Preloader from "../components/Preloader";
import { useHistory } from "react-router-dom";

export default function Category() {
    const { name } = useParams();
    const [meals, setMeals] = useState([]);
    const { goBack } = useHistory();

    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, [name]);
    return (
        <>
            <button className="btn" onClick={goBack}>
                GO Back
            </button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
}
