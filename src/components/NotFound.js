import React from "react";
import NavBar from "./NavBar";
import Image404 from "../images/404.jpg";
import "./styles/NotFound.css"

export default class NotFound extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <img
            src={Image404}
            alt=""
            className="image404 mx-auto d-block"
          />
        </div>
      </div>
    );
  }
}
