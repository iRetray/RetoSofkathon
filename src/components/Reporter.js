import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Typography } from "antd";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophone,
  faDownload,
  faBackspace,
} from "@fortawesome/free-solid-svg-icons";
const { Paragraph, Title } = Typography;

const Reporter = () => {
  const [name, setName] = useState("");
  const [visible, setVisible] = useState(true);
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [editableStr, setEditableStr] = useState("");

  useEffect(() => obtenerSesion(), []);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
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
          <Paragraph
            editable={{ onChange: setEditableStr }}
            style={{ fontSize: "25px" }}
          >
            {editableStr}
          </Paragraph>
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
