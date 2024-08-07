import React from "react";
import ReactPlayer from "react-player";
import "../App.css";
import { Link } from "react-router-dom";

function MealComponent(meal) {
 console.log(meal)
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div>
            <Link to="/recipepage" className="card-title">
              <h2 className="card-title">{meal.meal.strMeal}</h2>
            </Link>
          </div>

          <div className="containerFoodCards">
            <div className="picture">
              <img src={meal.meal.strMealThumb} width={100} height={100}></img>
            </div>
            <div className="list">
              <ul>
                <li>{meal.meal.strCategory}</li>
                <li>{meal.meal.strArea}</li>
              </ul>
            </div>
          </div>
          <div className="videosYoutube">
            <a href={meal.meal.strYoutube} class="card-link">
              Youtube video link
            </a>
            <ReactPlayer width={250} height={150} url={meal.meal.strYoutube} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealComponent;
