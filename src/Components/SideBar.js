import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="containerSideBar">
      <ul className="listSidebar">
        <h2>Food categories</h2>
        <Link to="/beefpages">
          <li className="styleListSideBar">Beef</li>
        </Link>
        <Link to="#">
          {" "}
          <li className="styleListSideBar">Chicken</li>
        </Link>
        <Link to="#">
          {" "}
          <li className="styleListSideBar">Dessert</li>
        </Link>
        <Link to="#">
          {" "}
          <li className="styleListSideBar">Lamb</li>
        </Link>
        <Link to="#">
          {" "}
          <li className="styleListSideBar">Miscellaneous</li>
        </Link>
        <Link to="#">
          {" "}
          <li className="styleListSideBar">Pasta</li>
        </Link>
        <Link to="#">
          {" "}
          <li className="styleListSideBar">Pork</li>
        </Link>
        <Link to="#">
          {" "}
          <li className="styleListSideBar">Seafood</li>
        </Link>
        <Link to="#">
          {" "}
          <li className="styleListSideBar">Side</li>
        </Link>
        <Link to="#">
          {" "}
          <li className="styleListSideBar">Starter</li>
        </Link>
        <Link to="#">
          {" "}
          <li className="styleListSideBar">Vegan</li>
        </Link>
        <Link to="#">
          {" "}
          <li className="styleListSideBar">Vegetarian</li>
        </Link>
        <Link to="#">
          {" "}
          <li className="styleListSideBar">Breakfast</li>
        </Link>
        <Link to="#">
          {" "}
          <li className="styleListSideBar">Goat</li>
        </Link>
      </ul>
    </div>
  );
}

export default SideBar;
