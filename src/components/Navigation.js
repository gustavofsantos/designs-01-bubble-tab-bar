import React, { useState } from "react";

export default function Navigation(props) {
  const [selected, setSelected] = useState("");

  return (
    <div className="main-navigation">
      <div>
        <div
          className={selected === "home" ? "active" : ""}
          onClick={() => setSelected("home")}
        >
          <i className="fas fa-home" />
          <p>Home</p>
        </div>
      </div>
      <div>
        <div
          className={selected === "logger" ? "active" : ""}
          onClick={() => setSelected("logger")}
        >
          <i className="far fa-clock" />
          <p>Logger</p>
        </div>
      </div>
      <div>
        <div
          className={selected === "docs" ? "active" : ""}
          onClick={() => setSelected("docs")}
        >
          <i className="far fa-folder-open" />
          <p>Docs</p>
        </div>
      </div>
      <div>
        <div
          className={selected === "menu" ? "active" : ""}
          onClick={() => setSelected("menu")}
        >
          <i className="fas fa-bars" />
          <p>Menu</p>
        </div>
      </div>
    </div>
  );
}
