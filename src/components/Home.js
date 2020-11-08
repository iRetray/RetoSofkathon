import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import monsterHome from "../images/monsterHome.png";
import enterprise from "../images/enterprise.png";

export default class Home extends React.Component {
  verificarSesion() {
    if (localStorage.getItem("userSession")) {
      window.location = "/reporter";
    }
  }

  componentDidMount() {
    this.verificarSesion();
  }

  render() {
    return (
      <div>
        {document.body.setAttribute("style", "background-color: white;")}
        <NavBar />
        <div className="container" style={{ marginTop: "30px" }}>
          <div className="row align-items-center">
            <div className="col-sm-6">
              <img
                src={monsterHome}
                alt=""
                className="img-fluid"
                style={{ padding: "30px" }}
              />
            </div>
            <div className="col-sm-6">
              <Jumbotron
                style={{ paddingBottom: "10px", marginBottom: "20px" }}
              >
                <center>
                  <h2>
                    ¿Cansado de llenar formularios{" "}
                    <strong>engorrosos y desesperantes</strong>?
                  </h2>
                  <h4 className="lead">
                    Cuentale a <strong>Maeve</strong> tu día y él llenará el
                    informe por ti.
                  </h4>
                  <hr />
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Button color="warning" block>
                      <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>{" "}
                      Iniciar <strong> Speakly </strong>
                    </Button>
                  </Link>
                  <img
                    src={enterprise}
                    alt=""
                    className="img-fluid"
                    style={{ padding: "30px" }}
                  />
                </center>
              </Jumbotron>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
