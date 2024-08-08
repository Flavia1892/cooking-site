import React from "react";
import ReactPlayer from "react-player";
import "../App.css";
import { useNavigate } from "react-router-dom";
import data from "../Assets/mockdata";

function MealComponent(meal) {
  const navigate = useNavigate();

  function getId(mealobj) {
    let id = mealobj.idMeal;
    return id;
  }

  const goToRecipePage = () => {
    let id = getId(meal.meal);
    navigate(`/recipepage/${id}`);
  };

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div>
            <h3 className="card-title">{meal.meal.strMeal}</h3>
            <button
              class="cardButton"
              type="button"
              onClick={() => {
                goToRecipePage();
              }}
            >
              Go to recipe
            </button>
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
            <ReactPlayer width={250} height={115} url={meal.meal.strYoutube} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealComponent;
