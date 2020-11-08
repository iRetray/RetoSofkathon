import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Reporter = () => {
  const [name, setName] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition();

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
  };

  return (
    <div>
      <NavBar />
      <div>El usuario logeado es: {name}</div>
      <button onClick={SpeechRecognition.startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};

export default Reporter;
