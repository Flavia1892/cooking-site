import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import data from "../Assets/mockdata";

function Navbar() {
  let recipeList = data.meals;
  let [recipes, setRecipes] = useState(recipeList);
  let [searchVal, setSearchVal] = useState("");
  let navigate = useNavigate();

  function handleSearchClick() {
    if (searchVal === " ") {
      setRecipes(recipeList);
    }

    let filterBySearch = recipeList.filter((item) => {
      if (
        item.strMeal.toLocaleLowerCase().includes(searchVal.toLocaleLowerCase())
      ) {
        return item;
      }
    });
    setRecipes(filterBySearch);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo01"
        aria-controls="navbarTogglerDemo01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <Link className="nav-link" to="/morerecipespages">
              More recipes <span class="sr-only"></span>
            </Link>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li>
            <input
              onChange={(e) => {
                setSearchVal(e.target.value);
                handleSearchClick();
              }}
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  // handleSearchClick();

                   navigate("/searchrecipepage", {state:recipes});
                  //<Link to="/searchrecipepage" state={recipes}></Link>;
                }
              }}
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search recipe here"
              aria-label="Search"
            ></input>
          </li>
          <li>
            <Link
              onClick={handleSearchClick}
              to="/searchrecipepage"
              state={recipes}
            >
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
