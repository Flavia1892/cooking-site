import React from "react";
import ReactPlayer from "react-player";
import "../App.css";

function MealComponent({ title, description, category, youtube, tag, thumb }) {
 

  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div>
            <h2 className="card-title">{title}</h2>
          </div>

          <div className="containerFoodCards">
            <div className="picture">
              <img src={thumb} width={100} height={100}></img>
            </div>
            <div className="list">
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{category}</li>
                <li className="list-group-item">{description}</li>
                <li className="list-group-item">{tag}</li>
              </ul>
            </div>
          </div>
          <div className="videosYoutube">
            <a href={youtube} class="card-link">
              Youtube video link
            </a>
            <ReactPlayer width={250} height={150} url={youtube} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealComponent;
