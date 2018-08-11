import React from "react";
import {render} from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";
import Main from "./Components/Main";
import "./index.css";


render(
    <Router basename="fortydays">
        <Main/>
    </Router>,
    document.getElementById("root")
);