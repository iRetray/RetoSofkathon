import React from "react";
import NavBar from "./NavBar";

export default class Reporter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
    this.obtenerSesion = this.obtenerSesion.bind(this)
  }

  componentDidMount() {
    this.obtenerSesion();
  }

  obtenerSesion() {
    if (localStorage.getItem("userSession")) {
      let session = JSON.parse(localStorage.getItem("userSession"));
      this.setState({
        name: session.name,
      });
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <div>El usuario logeado es: {this.state.name}</div>
      </div>
    );
  }
}
