import React from "react";
import ReactDOM from "react-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";
import 'react-toastify/dist/ReactToastify.css';
import App from "./components/App";

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>

    , document.getElementById("root"));
