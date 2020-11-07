import React from "react";
import Image404 from "../images/404.jpg";

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="container">
        <img src={Image404} alt="" className="img-fluid mx-auto d-block" style={{maxWidth: '80%'}}/>
      </div>
    );
  }
}
