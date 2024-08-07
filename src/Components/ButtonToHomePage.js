import React from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

function ButtonToHomePage() {
    return (
        <div className="buttonContainer">
          <Link to="/homepage" className="btn btn-secondary btn-lg">
           Home
          </Link>
        </div>
      );
}

export default ButtonToHomePage