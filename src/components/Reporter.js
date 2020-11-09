import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Typography, Modal } from "antd";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faDownload,
  faBackspace,
} from "@fortawesome/free-solid-svg-icons";
import monsterRegister from "../images/monsterRegister.png";
const { Paragraph, Title } = Typography;

const Reporter = () => {
  const [modalVisible, setModal] = useState(false);
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(true);
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [editableStr, setEditableStr] = useState("");

  /*eslint-disable */
  useEffect(() => obtenerSesion(), []);
  /*eslint-disable */

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  const cerrarModal = () => {
    setModal(false);
  };

  const abrirModal = () => {
    setModal(true)
  }

  const obtenerSesion = () => {
    if (localStorage.getItem("userSession")) {
      let session = JSON.parse(localStorage.getItem("userSession"));
      setName(session.name);
      console.log(name);
    }
    SpeechRecognition.startListening({ continuous: true, language: "es-CO" });
  };

  const pasarAEdicion = () => {
    console.log("se pasa a edicion");
    setEditableStr(transcript);
    resetTranscript();
    SpeechRecognition.stopListening();
    setVisible(false);
  };

  const siteLayoutContent = {
    minHeight: "280px",
    padding: "24px",
    background: "#fff",
    maxWidth: "500px",
    margin: "40px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  return (
    <div>
      {document.body.setAttribute("style", "background-color: #F0F2F5;")}
      <NavBar />
      <Modal
        title="Informe enviado correctamente"
        visible={modalVisible}
        onOk={cerrarModal}
        onCancel={cerrarModal}
      >
        <img
          src={monsterRegister}
          alt=""
          className="img-fluid"
          style={{ padding: "50px" }}
        />
        <Title level={4}>
          <center>Ahora Maeve llevará este informe a tu empresa</center>
        </Title>
      </Modal>
      <div style={siteLayoutContent}>
        <Title level={2}>Bienvenido, {name}</Title>
        <Paragraph style={{ marginTop: "-15px" }}>
          <strong>Habla</strong> ahora o <strong>escribe</strong> para generar
          tu informe diario
        </Paragraph>
        <hr />
        {visible ? (
          <Paragraph style={{ fontSize: "25px" }}>{transcript}</Paragraph>
        ) : (
          <div>
            <Paragraph
              editable={{ onChange: setEditableStr }}
              style={{ fontSize: "25px" }}
            >
              {editableStr}
            </Paragraph>
            <center>
              <Button
                color="success"
                style={{ borderRadius: "20px" }}
                onClick={abrirModal}
              >
                <FontAwesomeIcon icon={faDownload}></FontAwesomeIcon>
                <strong> Enviar informe </strong>
              </Button>
              <hr />
            </center>
          </div>
        )}
        <center>
          <Button
            color="danger"
            style={{ borderRadius: "20px" }}
            onClick={pasarAEdicion}
          >
            <FontAwesomeIcon icon={faMicrophone}></FontAwesomeIcon>
            <strong> Guardar </strong>
          </Button>
          {"  "}
          <Button
            color="primary"
            outline
            style={{ borderRadius: "20px" }}
            onClick={resetTranscript}
          >
            <FontAwesomeIcon icon={faBackspace}></FontAwesomeIcon>
            <strong> Limpiar </strong>
          </Button>
        </center>
      </div>
    </div>
  );
};

export default Reporter;