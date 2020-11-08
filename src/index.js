import React from "react";
import ReactDOM from "react-dom";
import Speakly from "./Speakly";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<Speakly />, document.getElementById("app"));

serviceWorker.register();
