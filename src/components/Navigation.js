import React, { useState } from "react";

export default function Navigation(props) {
  const [selected, setSelected] = useState("");

  return (
    <div className="main-navigation">
      <div>
        <div
          id="home"
          className={selected === "home" ? "active active__home" : ""}
          onClick={() => setSelected("home")}
        >
          <i className="fas fa-home" />
          <p>Home</p>
        </div>
      </div>
      <div>
        <div
          id="logger"
          className={selected === "logger" ? "active active__logger" : ""}
          onClick={() => setSelected("logger")}
        >
          <i className="far fa-clock" />
          <p>Logger</p>
        </div>
      </div>
      <div>
        <div
          className={selected === "docs" ? "active active__docs" : ""}
          onClick={() => setSelected("docs")}
        >
          <i className="far fa-folder-open" />
          <p>Docs</p>
        </div>
      </div>
      <div>
        <div
          className={selected === "menu" ? "active active__menu" : ""}
          onClick={() => setSelected("menu")}
        >
          <i className="fas fa-bars" />
          <p>Menu</p>
        </div>
      </div>
    </div>
  );
}
