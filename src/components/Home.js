import React from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import monsterHome from "../images/monsterHome.png";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
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
              <Jumbotron>
                <center>
                  <h2>
                    ¿Cansado de llenar formularios{" "}
                    <strong>engorrosos y desesperantes</strong>?
                  </h2>
                  <h4 className="lead">
                    Cuentale con tu voz a <strong>Maeve</strong> tu día y él
                    llenará el informe por ti.
                  </h4>
                  <hr />
                  <Link to="/home/tasks" style={{ textDecoration: "none" }}>
                    <Button color="warning" block>
                      <FontAwesomeIcon icon={faPlayCircle}></FontAwesomeIcon>{" "}
                      Iniciar <strong> Speakly </strong>
                    </Button>
                  </Link>
                </center>
              </Jumbotron>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
