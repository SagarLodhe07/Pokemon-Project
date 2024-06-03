// import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import CustomRoutes from "./Routes/CustomRoutes";
import Pokedex from "./component/Pokemon/Pokemon";

function App() {
  return (
    <>
      <div id="wrapper-head">
        <h2>
          <Link className="head" to={"/"}>Pokedex</Link>
        </h2>
        <CustomRoutes />
      </div>
    </>
  );
}

export default App;
