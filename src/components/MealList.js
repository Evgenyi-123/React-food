import React from "react";
import Meal from "./Meal";

export default function MealList({ meals }) {
    return (
        <div className="list">
            {meals.map((el) => (
                <Meal key={el.idMeal} {...el} />
            ))}
        </div>
    );
}
