import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";
import "./index.css";

 
render(
	<BrowserRouter>
      <Main/> 
     </BrowserRouter>,
  document.getElementById("root")
);