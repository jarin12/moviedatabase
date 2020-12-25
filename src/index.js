import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
  import Navbar from "./components/Navbar";
import { BrowserRouter, Link, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    < Navbar/>
      <div>
        <Route path="/" exact component={App} />
        <Route path="/movie/:id" exact component={MovieDetails} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);