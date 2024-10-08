import React from "react";
import ErrorCat from "../Assets/errorcat.png";
import PlaceHolder from "./PlaceHolder";

function PageNotFound() {
  return (
    <div className="errorPage">
      <p className="errorTitle">ERROR</p>
      <h2>Page not found, please retry!</h2>
      <div className="imgError">
        <img src={ErrorCat} width={600} height={500}></img>
      </div>
      <PlaceHolder />
    </div>
  );
}

export default PageNotFound;
