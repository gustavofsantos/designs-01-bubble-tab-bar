import React from "react";
import Navigation from "../components/Navigation";
import Content from "../components/Content";

export default function Main(props) {
  return (
    <div className="main">
      <Content />
      <Navigation />
    </div>
  );
}
